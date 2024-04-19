import { useEffect, useRef } from "react"
import * as THREE from "three"
import gsap from "gsap"
import ascii from "../utils/ascii"

const Particles = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const scene = new THREE.Scene()

    // Particles
    const asciiParticles = ascii(["j", "o", "e", "l", "c", "r", "a", "s", "t"])
    if (asciiParticles)
      asciiParticles.forEach((particle) => scene.add(particle))

    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight,
    }

    window.addEventListener("resize", () => {
      // Update sizes
      sizes.width = window.innerWidth
      sizes.height = window.innerHeight

      // Update camera
      camera.aspect = sizes.width / sizes.height
      camera.updateProjectionMatrix()

      // Update renderer
      renderer.setSize(sizes.width, sizes.height)
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    })

    // Camera
    const camera = new THREE.PerspectiveCamera(
      50,
      sizes.width / sizes.height,
      0.1,
      100
    )
    camera.position.x = 0
    camera.position.y = 0
    camera.position.z = 1
    scene.add(camera)

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current as HTMLCanvasElement,
      alpha: true,
    })
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

    // ------------------------------------------------------------------

    let mouseX = 0
    let mouseY = 0

    document.addEventListener("mousemove", (event) => {
      mouseX = event.clientX
      mouseY = event.clientY
    })

    const clock = new THREE.Clock()

    const tick = () => {
      const elapsedTime = clock.getElapsedTime()
      asciiParticles.forEach((particle) => {
        gsap.to(particle.rotation, {
          x: mouseY * 0.0001 + elapsedTime * 0.04,
          y: mouseX * 0.0001 + elapsedTime * 0.04,
        })
      })

      // Render
      renderer.render(scene, camera)
      window.requestAnimationFrame(tick)
    }

    tick()
  }, [])

  return (
    <>
      <canvas ref={canvasRef} className="webgl2 blur-[4px]"></canvas>
    </>
  )
}

export default Particles
