"use client";

import { useEffect, useRef } from "react";

const nodes = [
  { id: "api", label: "API", x: 0.28, y: 0.48 },
  { id: "auth", label: "Auth", x: 0.48, y: 0.26 },
  { id: "db", label: "DB", x: 0.7, y: 0.5 },
  { id: "queue", label: "Queue", x: 0.38, y: 0.74 },
  { id: "model", label: "Model", x: 0.78, y: 0.28 },
];

const edges: [string, string][] = [
  ["api", "auth"],
  ["api", "db"],
  ["api", "queue"],
  ["db", "queue"],
  ["auth", "model"],
  ["api", "model"],
];

export function SystemField() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let frame = 0;
    let alive = true;
    let width = 0;
    let height = 0;

    const draw = (time: number) => {
      if (!alive) return;
      const parent = canvas.parentElement;
      if (!parent) return;
      const nextW = parent.clientWidth;
      const nextH = parent.clientHeight;
      if (nextW < 2 || nextH < 2) {
        frame = requestAnimationFrame(draw);
        return;
      }

      if (nextW !== width || nextH !== height) {
        width = nextW;
        height = nextH;
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        canvas.width = Math.floor(width * dpr);
        canvas.height = Math.floor(height * dpr);
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      }

      ctx.clearRect(0, 0, width, height);

      const pos = new Map<string, { x: number; y: number }>();
      nodes.forEach((node, index) => {
        const drift = reduce ? 0 : Math.sin(time / 1400 + index) * 5;
        pos.set(node.id, { x: node.x * width, y: node.y * height + drift });
      });

      ctx.lineWidth = 1;
      ctx.strokeStyle = "rgba(235,231,223,0.18)";
      edges.forEach(([from, to]) => {
        const a = pos.get(from);
        const b = pos.get(to);
        if (!a || !b) return;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
      });

      ctx.font = "12px Geist, sans-serif";
      nodes.forEach((node) => {
        const point = pos.get(node.id);
        if (!point) return;
        ctx.beginPath();
        ctx.fillStyle = "#ebe7df";
        ctx.arc(point.x, point.y, 3.2, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = "rgba(235,231,223,0.62)";
        ctx.fillText(node.label, point.x + 10, point.y + 4);
      });

      if (!reduce) frame = requestAnimationFrame(draw);
    };

    frame = requestAnimationFrame(draw);
    return () => {
      alive = false;
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      className="h-full w-full"
      role="img"
      aria-label="Services linked together: API, auth, database, queue, and a model."
    />
  );
}
