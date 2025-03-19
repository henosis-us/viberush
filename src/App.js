import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

function Box(props) {
  return (
    <mesh {...props}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={props.color || 'orange'} />
    </mesh>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <Box position={[-1.2, 0, 0]} color="hotpink" />
      <Box position={[1.2, 0, 0]} />
    </>
  );
}

function App() {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Canvas>
        <Scene />
        <OrbitControls />
      </Canvas>
    </div>
  );
}

export default App;