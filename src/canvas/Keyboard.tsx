import { useEffect, useRef } from "react"
import * as THREE from "three"
import gsap from "gsap"
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js"
import * as dat from "dat.gui"

const Keyboard = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    // const gui = new dat.GUI()
    const gltfLoader = new GLTFLoader()

    // Scene
    const scene = new THREE.Scene()

    let tl = gsap.timeline()

    // Keyboard
    gltfLoader.load("../keyboard2.gltf", (gltf) => {
      gltf.scene.scale.set(0.3, 0.3, 0.3)
      gltf.scene.rotation.set(1.6, 0, 0)
      gltf.scene.position.set(0, -1.5, -0.2)
      scene.add(gltf.scene)

      /* gui.add(gltf.scene.rotation, "x").min(0).max(9)
      gui.add(gltf.scene.rotation, "y").min(0).max(9)
      gui.add(gltf.scene.rotation, "z").min(0).max(9) */

      tl.to(gltf.scene.position, {
        y: 0,
        duration: 1.5,
        ease: "power3.out",
      })
      tl.to(
        gltf.scene.position,
        { x: 0.2, duration: 1, ease: "power1.out" },
        "-=0.3"
      )
      tl.to(
        gltf.scene.rotation,
        { z: 0.8, duration: 1, ease: "expo.out" },
        "-=1"
      )
      tl.to(
        gltf.scene.position,
        { z: 0.3, duration: 1, ease: "expo.out" },
        "-=1"
      )

      tl.to(gltf.scene.position, {
        y: -0.01,
        duration: 3,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
      })
    })

    // Lights
    const pointLight = new THREE.PointLight(0xffffff, 100)
    pointLight.position.x = 2
    pointLight.position.y = 3
    pointLight.position.z = 4

    /* gui.add(pointLight.position, "x").min(-9).max(9)
    gui.add(pointLight.position, "y").min(-9).max(9)
    gui.add(pointLight.position, "z").min(-9).max(9) */
    scene.add(pointLight)

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
      60,
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

    const tick = () => {
      // Render
      renderer.render(scene, camera)
      window.requestAnimationFrame(tick)
    }

    tick()
  }, [])

  return (
    <>
      <canvas ref={canvasRef} className="webgl1"></canvas>
    </>
  )
}

export default Keyboard
