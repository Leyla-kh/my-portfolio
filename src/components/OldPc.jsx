import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const { nodes, materials } = useGLTF("/oldPc-transformed.glb");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            geometry={nodes.defaultMaterial.geometry}
            material={materials.Part2}
          />
          <mesh
            geometry={nodes.defaultMaterial_1.geometry}
            material={materials.Part1}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/oldPc-transformed.glb");
