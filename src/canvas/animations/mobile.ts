import { GLTF } from "three/examples/jsm/loaders/GLTFLoader.js"

interface mobileAnimationProps {
  gltf: GLTF
  mobileTimeline: gsap.core.Timeline
}

export function mobileAnimation(props: mobileAnimationProps) {
  const { gltf, mobileTimeline } = props

  mobileTimeline.to(gltf.scene.position, {
    y: 0,
    duration: 1.1,
    ease: "power3.out",
  })
  mobileTimeline.to(gltf.scene.rotation, {
    x: 1.0,
    y: -0.6,
    duration: 1,
    ease: "power",
  })
  mobileTimeline.to(
    gltf.scene.position,
    {
      y: 0.15,
      z: 0.35,
      duration: 1,
      ease: "expo.out",
    },
    "-=1"
  )
  mobileTimeline.to(gltf.scene.position, {
    y: 0.13,
    duration: 3,
    ease: "power1.inOut",
    yoyo: true,
    repeat: -1,
  })
}
