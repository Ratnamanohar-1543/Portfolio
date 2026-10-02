/* =========================================================
   Three.js background: drifting pink/purple particles plus a few
   wireframe shapes. Reacts to the mouse with gentle parallax.
   Scales down on small or low-power devices and stays static
   when the visitor prefers reduced motion.
   ========================================================= */
(function () {
  const canvas = document.getElementById("bg-canvas");
  if (!canvas || typeof THREE === "undefined") return;

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const isSmall = window.innerWidth < 768;
  const lowPower = (navigator.hardwareConcurrency || 4) <= 4;

  const PARTICLE_COUNT = isSmall ? 260 : lowPower ? 520 : 820;
  const SHAPE_COUNT = isSmall ? 3 : 6;

  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: false, powerPreference: "low-power" });
  } catch (e) {
    return; // WebGL unavailable: the CSS glow still works
  }
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, isSmall ? 1.25 : 1.6));
  renderer.setSize(window.innerWidth, window.innerHeight);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 100);
  camera.position.z = 14;

  /* ---- Particles ---- */
  const positions = new Float32Array(PARTICLE_COUNT * 3);
  const colors = new Float32Array(PARTICLE_COUNT * 3);
  const speeds = new Float32Array(PARTICLE_COUNT);
  const pink = new THREE.Color(0xef4a9b);
  const purple = new THREE.Color(0x8b5fe8);

  for (let i = 0; i < PARTICLE_COUNT; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 42;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 30;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 24 - 2;
    const c = pink.clone().lerp(purple, Math.random());
    colors[i * 3] = c.r;
    colors[i * 3 + 1] = c.g;
    colors[i * 3 + 2] = c.b;
    speeds[i] = 0.004 + Math.random() * 0.012;
  }

  const pGeo = new THREE.BufferGeometry();
  pGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  pGeo.setAttribute("color", new THREE.BufferAttribute(colors, 3));

  const pMat = new THREE.PointsMaterial({
    size: isSmall ? 0.07 : 0.06,
    vertexColors: true,
    transparent: true,
    opacity: 0.55,
    depthWrite: false,
    blending: THREE.AdditiveBlending
  });
  const points = new THREE.Points(pGeo, pMat);
  scene.add(points);

  /* ---- Wireframe shapes ---- */
  const shapes = [];
  const geoms = [
    new THREE.IcosahedronGeometry(1, 0),
    new THREE.OctahedronGeometry(1, 0),
    new THREE.TorusGeometry(0.9, 0.28, 8, 24)
  ];
  for (let i = 0; i < SHAPE_COUNT; i++) {
    const mat = new THREE.MeshBasicMaterial({
      color: i % 2 === 0 ? 0xef4a9b : 0x8b5fe8,
      wireframe: true,
      transparent: true,
      opacity: 0.16
    });
    const mesh = new THREE.Mesh(geoms[i % geoms.length], mat);
    const side = i % 2 === 0 ? -1 : 1;
    mesh.position.set(side * (5 + Math.random() * 7), (Math.random() - 0.5) * 14, -3 - Math.random() * 6);
    mesh.scale.setScalar(0.8 + Math.random() * 1.4);
    mesh.userData = {
      rx: 0.0015 + Math.random() * 0.003,
      ry: 0.002 + Math.random() * 0.003,
      baseY: mesh.position.y,
      phase: Math.random() * Math.PI * 2
    };
    shapes.push(mesh);
    scene.add(mesh);
  }

  /* ---- Mouse + scroll parallax ---- */
  const target = { x: 0, y: 0 };
  const current = { x: 0, y: 0 };
  let scrollY = 0;

  if (!reduceMotion) {
    window.addEventListener("pointermove", (e) => {
      target.x = (e.clientX / window.innerWidth - 0.5) * 2;
      target.y = (e.clientY / window.innerHeight - 0.5) * 2;
    }, { passive: true });
    window.addEventListener("scroll", () => { scrollY = window.scrollY; }, { passive: true });
  }

  window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    if (reduceMotion) renderer.render(scene, camera);
  });

  /* ---- Loop ---- */
  let running = true;
  let t = 0;

  function frame() {
    if (!running) return;
    requestAnimationFrame(frame);
    t += 0.01;

    current.x += (target.x - current.x) * 0.04;
    current.y += (target.y - current.y) * 0.04;

    camera.position.x = current.x * 1.6;
    camera.position.y = -current.y * 1.1 - scrollY * 0.0016;
    camera.lookAt(0, -scrollY * 0.0016, 0);

    points.rotation.y = t * 0.03;
    const pos = pGeo.attributes.position.array;
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      pos[i * 3 + 1] += speeds[i];
      if (pos[i * 3 + 1] > 15) pos[i * 3 + 1] = -15;
    }
    pGeo.attributes.position.needsUpdate = true;

    for (const m of shapes) {
      m.rotation.x += m.userData.rx;
      m.rotation.y += m.userData.ry;
      m.position.y = m.userData.baseY + Math.sin(t + m.userData.phase) * 0.5;
    }

    renderer.render(scene, camera);
  }

  if (reduceMotion) {
    renderer.render(scene, camera); // single still frame
  } else {
    frame();
    document.addEventListener("visibilitychange", () => {
      const wasRunning = running;
      running = !document.hidden;
      if (running && !wasRunning) frame();
    });
  }
})();
