/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { useFrame } from "@react-three/fiber";

type GLTFResult = GLTF & {
  nodes: {
	celehead: THREE.Mesh;
  };
  materials: {
	defaultMaterial: THREE.MeshStandardMaterial;
  };
};

interface ModelSimpleProps {
	props?: JSX.IntrinsicElements['group'],
	material : string,
}

export function ModelSimple({ props, material }: ModelSimpleProps) {
  const { nodes, materials } = useGLTF("/celestin.gltf") as any;
  const lyonMaterial = new THREE.MeshStandardMaterial(
		{ 
			color : "red",
			wireframe: true
		}
	)
	const berlinMaterial = new THREE.MeshStandardMaterial(
		
		{ 
			color : "0x000000",
			roughness : 0,
			metalness : 1
		}
	)
	// Rotatition animation
	let myMesh = React.useRef<any>();
	useFrame(({ clock }) => {
	const a = clock.getElapsedTime();
	if (myMesh.current)
		myMesh.current.rotation.y = a;
	});

	const assignMaterial = (materialString : string) : THREE.MeshStandardMaterial =>  {
		switch (materialString) {
			case "lyon" : {
				return (lyonMaterial);
			}
			case "berlin" : {
				return (berlinMaterial);
			}
			default : {
				return (materials.defaultMaterial);
			}
		}
	}

	return (
	<group {...props} dispose={null}>
	  <mesh
		ref= {myMesh}
		geometry={nodes.celehead.geometry}
		material={assignMaterial(material)}
	  />
	</group>
  );
}

useGLTF.preload("/celestin.gltf");

export default ModelSimple