'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Html, Environment } from '@react-three/drei';
import { useMemo, useState } from 'react';

type LayerKey = 'roads' | 'power' | 'fiber' | 'water' | 'green' | 'buildings';
const layerList: LayerKey[] = ['roads', 'power', 'fiber', 'water', 'green', 'buildings'];

function Zone({ position, color, label, onClick }: { position: [number, number, number]; color: string; label: string; onClick: () => void }) {
  const [hovered, setHovered] = useState(false);
  return (
    <group position={position} onClick={onClick} onPointerOver={() => setHovered(true)} onPointerOut={() => setHovered(false)}>
      <mesh>
        <boxGeometry args={[1.4, 0.4, 1.4]} />
        <meshStandardMaterial color={color} emissive={hovered ? color : '#000'} emissiveIntensity={hovered ? 0.4 : 0} />
      </mesh>
      {hovered && <Html distanceFactor={10}><div className="glass rounded px-3 py-1 text-xs">{label}</div></Html>}
    </group>
  );
}

export default function Masterplan3D() {
  const [selected, setSelected] = useState('Select a district zone');
  const [night, setNight] = useState(true);
  const [phase, setPhase] = useState(2);
  const [layers, setLayers] = useState<Record<LayerKey, boolean>>({ roads: true, power: true, fiber: true, water: true, green: true, buildings: true });

  const zones = useMemo(
    () => [
      { label: 'Central CBD', pos: [0, 0.2, 0] as [number, number, number], color: '#2DF7FF' },
      { label: 'Technology City', pos: [-2.2, 0.2, -1] as [number, number, number], color: '#8A6DFF' },
      { label: 'Education City', pos: [1.8, 0.2, -1.5] as [number, number, number], color: '#40FFB4' },
      { label: 'Health City', pos: [-1.2, 0.2, 1.8] as [number, number, number], color: '#38BDF8' }
    ],
    []
  );

  return (
    <section className="section grid gap-6 lg:grid-cols-[2fr_1fr]">
      <div className="glass h-[560px] rounded-2xl p-2">
        <Canvas camera={{ position: [6, 6, 6], fov: 50 }}>
          <ambientLight intensity={night ? 0.25 : 0.7} />
          <directionalLight position={[6, 10, 6]} intensity={night ? 0.8 : 1.5} color={night ? '#7dd3fc' : '#fff'} />
          <mesh rotation={[-Math.PI / 2, 0, 0]}>
            <planeGeometry args={[14, 14]} />
            <meshStandardMaterial color={night ? '#102033' : '#dbeafe'} />
          </mesh>
          {layers.green && <mesh position={[0, 0.02, -3]}><boxGeometry args={[4, 0.04, 2]} /><meshStandardMaterial color="#166534" /></mesh>}
          {layers.water && <mesh position={[3.2, 0.03, 2]}><boxGeometry args={[3, 0.03, 2]} /><meshStandardMaterial color="#0ea5e9" /></mesh>}
          {layers.roads && <mesh position={[0, 0.03, 0]}><boxGeometry args={[8, 0.03, 0.5]} /><meshStandardMaterial color="#64748b" /></mesh>}
          {layers.buildings && zones.map((zone) => (
            <Zone key={zone.label} position={zone.pos} color={zone.color} label={zone.label} onClick={() => setSelected(zone.label)} />
          ))}
          <Environment preset={night ? 'night' : 'city'} />
          <OrbitControls autoRotate autoRotateSpeed={phase * 0.2} enablePan enableZoom />
        </Canvas>
      </div>
      <div className="space-y-4">
        <div className="glass rounded-2xl p-5">
          <h3 className="text-lg font-semibold">Masterplan Controls</h3>
          <p className="mt-2 text-sm text-slate-300">{selected}</p>
          <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
            {layerList.map((layer) => (
              <button key={layer} type="button" onClick={() => setLayers((prev) => ({ ...prev, [layer]: !prev[layer] }))} className={`rounded px-3 py-2 ${layers[layer] ? 'bg-neon-cyan text-slate-900' : 'glass'}`}>
                {layer}
              </button>
            ))}
          </div>
        </div>
        <div className="glass rounded-2xl p-5">
          <label className="text-sm">Development Phase Timeline: Phase {phase}</label>
          <input className="mt-3 w-full" type="range" min={1} max={5} value={phase} onChange={(e) => setPhase(Number(e.target.value))} />
          <button type="button" onClick={() => setNight((prev) => !prev)} className="mt-4 rounded-full bg-neon-violet px-4 py-2 text-sm">
            {night ? 'Switch to Day' : 'Switch to Night'}
          </button>
          <p className="mt-3 text-xs text-slate-400">Heatmap overlay represented through district emissive highlights and phase-based flythrough speed.</p>
        </div>
      </div>
    </section>
  );
}
