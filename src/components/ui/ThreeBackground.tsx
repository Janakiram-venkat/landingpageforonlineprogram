"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

// Soft theme palette (light-purple lead + cheerful accents)
const PALETTE = [
  0x7c5ce6, // purple
  0x5b3fd6, // purple deep
  0xc9b8ff, // purple soft
  0xff7a85, // coral
  0x5fd9a8, // mint
  0x5cc6ff, // sky
  0xffce4d, // sunny
];

// Round, soft sprite texture for the particles
function makeDotTexture() {
  const size = 64;
  const c = document.createElement("canvas");
  c.width = c.height = size;
  const ctx = c.getContext("2d")!;
  const g = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  g.addColorStop(0, "rgba(255,255,255,1)");
  g.addColorStop(0.35, "rgba(255,255,255,0.85)");
  g.addColorStop(1, "rgba(255,255,255,0)");
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, size, size);
  const tex = new THREE.CanvasTexture(c);
  tex.needsUpdate = true;
  return tex;
}

export default function ThreeBackground() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isMobile = window.innerWidth < 768;

    let width = window.innerWidth;
    let height = window.innerHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 100);
    camera.position.z = 22;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0); // transparent
    mount.appendChild(renderer.domElement);

    // ---- Particle field ----
    const COUNT = isMobile ? 70 : 130;
    const positions = new Float32Array(COUNT * 3);
    const colors = new Float32Array(COUNT * 3);
    const speeds = new Float32Array(COUNT);
    const color = new THREE.Color();

    for (let i = 0; i < COUNT; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 46;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 32;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 24;
      color.setHex(PALETTE[(Math.random() * PALETTE.length) | 0]);
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
      speeds[i] = 0.004 + Math.random() * 0.012;
    }

    const pGeo = new THREE.BufferGeometry();
    pGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    pGeo.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const dotTex = makeDotTexture();
    const pMat = new THREE.PointsMaterial({
      size: isMobile ? 0.7 : 0.85,
      map: dotTex,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      depthWrite: false,
      blending: THREE.NormalBlending,
      sizeAttenuation: true,
    });
    const points = new THREE.Points(pGeo, pMat);
    scene.add(points);

    // ---- A few slow wireframe shapes for gentle depth ----
    const shapes: THREE.Mesh[] = [];
    const shapeDefs = [
      { geo: new THREE.IcosahedronGeometry(3.2, 0), pos: [-13, 6, -4], hex: 0x7c5ce6 },
      { geo: new THREE.TorusGeometry(2.4, 0.7, 8, 16), pos: [14, -7, -6], hex: 0xff7a85 },
      { geo: new THREE.OctahedronGeometry(2.6, 0), pos: [11, 8, -8], hex: 0x5fd9a8 },
      { geo: new THREE.DodecahedronGeometry(2.4, 0), pos: [-15, -8, -7], hex: 0x5cc6ff },
    ];
    for (const d of shapeDefs) {
      const mat = new THREE.MeshBasicMaterial({
        color: d.hex,
        wireframe: true,
        transparent: true,
        opacity: 0.22,
      });
      const mesh = new THREE.Mesh(d.geo, mat);
      mesh.position.set(d.pos[0], d.pos[1], d.pos[2]);
      mesh.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, 0);
      scene.add(mesh);
      shapes.push(mesh);
    }

    // ---- Subtle mouse / scroll parallax ----
    const target = { x: 0, y: 0 };
    const onPointer = (e: PointerEvent) => {
      target.x = (e.clientX / window.innerWidth - 0.5) * 2;
      target.y = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("pointermove", onPointer, { passive: true });

    const onResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener("resize", onResize);

    const clock = new THREE.Clock();
    let raf = 0;
    let running = true;

    const render = () => {
      const t = clock.getElapsedTime();

      // drift particles slowly upward, wrap around
      const pos = pGeo.attributes.position as THREE.BufferAttribute;
      for (let i = 0; i < COUNT; i++) {
        let y = pos.getY(i) + speeds[i];
        if (y > 16) y = -16;
        pos.setY(i, y);
      }
      pos.needsUpdate = true;

      points.rotation.y = t * 0.02;

      shapes.forEach((s, i) => {
        s.rotation.x += 0.0014 + i * 0.0003;
        s.rotation.y += 0.0018 + i * 0.0002;
        s.position.y += Math.sin(t * 0.4 + i) * 0.004;
      });

      // ease camera toward pointer for a soft parallax
      camera.position.x += (target.x * 2.2 - camera.position.x) * 0.03;
      camera.position.y += (-target.y * 1.6 - camera.position.y) * 0.03;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    };

    const loop = () => {
      if (!running) return;
      render();
      raf = requestAnimationFrame(loop);
    };

    const onVisibility = () => {
      if (document.hidden) {
        running = false;
        cancelAnimationFrame(raf);
      } else if (!reduced) {
        running = true;
        clock.start();
        loop();
      }
    };
    document.addEventListener("visibilitychange", onVisibility);

    if (reduced) {
      render(); // single static frame
    } else {
      loop();
    }

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onPointer);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", onVisibility);
      pGeo.dispose();
      pMat.dispose();
      dotTex.dispose();
      shapes.forEach((s) => {
        s.geometry.dispose();
        (s.material as THREE.Material).dispose();
      });
      renderer.dispose();
      if (renderer.domElement.parentNode === mount) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      aria-hidden="true"
      className="fixed inset-0 -z-20 pointer-events-none"
      style={{ opacity: 0.55 }}
    />
  );
}
