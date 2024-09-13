import { GLTF } from "three/examples/jsm/loaders/GLTFLoader.js"

interface desktopAnimationProps {
  gltf: GLTF
  desktopTimeline: gsap.core.Timeline
}

export function desktopAnimation(props: desktopAnimationProps) {
  const { gltf, desktopTimeline } = props

  desktopTimeline.to(gltf.scene.position, {
    y: 0,
    duration: 1.5,
    ease: "power3.out",
  })
  desktopTimeline.to(
    gltf.scene.position,
    { x: 0.2, duration: 1, ease: "power1.out" },
    "-=0.3"
  )
  desktopTimeline.to(
    gltf.scene.rotation,
    { z: 0.8, duration: 1, ease: "expo.out" },
    "-=1"
  )
  desktopTimeline.to(
    gltf.scene.position,
    { z: 0.3, duration: 1, ease: "expo.out" },
    "-=1"
  )
  desktopTimeline.to(gltf.scene.position, {
    y: -0.01,
    duration: 3,
    ease: "power1.inOut",
    yoyo: true,
    repeat: -1,
  })
}
