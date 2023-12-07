import { useConvexPolyhedron } from "@react-three/cannon";
import { useMemo } from "react";
import CannonUtils from "./utils/CannonUtils";
import { IcosahedronGeometry } from "three";
import { useEffect } from "react";

export function Icosahedron(props) {
    const geometry = useMemo(() => new IcosahedronGeometry(0.5, 0), [])
    const args = useMemo(() => CannonUtils.toConvexPolyhedronProps(geometry), [
      geometry
    ])

    const [ref, api] = useConvexPolyhedron(
      () => ({ args, mass: 1, ...props }),
    )

    return (
      <mesh ref={ref} castShadow {...props} geometry={geometry} onPointerDown={() => api.velocity.set(0, 5, -1)}>
        <meshBasicMaterial color="orange" />
      </mesh>
    );
}