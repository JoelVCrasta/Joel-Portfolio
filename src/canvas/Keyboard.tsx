import { useEffect, useRef } from "react"
import * as THREE from "three"
import gsap from "gsap"
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js"
import * as dat from "dat.gui"
import { Device, useDevice } from "../utils/context"
import { mobileAnimation } from "./animations/mobile"
import { desktopAnimation } from "./animations/desktop"

const Keyboard = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { device } = useDevice()

  useEffect(() => {
    const gui = new dat.GUI()
    const gltfLoader: GLTFLoader = new GLTFLoader()

    // Scene
    const scene: THREE.Scene = new THREE.Scene()

    const mobileTimeline: gsap.core.Timeline = gsap.timeline()
    const desktopTimeline: gsap.core.Timeline = gsap.timeline()

    mobileTimeline.pause()
    desktopTimeline.pause()

    // Keyboard
    gltfLoader.load("../keyboard2.gltf", (gltf) => {
      gltf.scene.scale.set(0.3, 0.3, 0.3)
      gltf.scene.rotation.set(1.6, 0, 0)
      gltf.scene.position.set(0, -1.5, -0.2)
      scene.add(gltf.scene)

      // DAT GUI -----------------------------------------------
      gui.add(gltf.scene.rotation, "x").min(0).max(9)
      gui.add(gltf.scene.rotation, "y").min(0).max(9)
      gui.add(gltf.scene.rotation, "z").min(0).max(9)

      gui.add(gltf.scene.position, "x").min(0).max(9)
      gui.add(gltf.scene.position, "y").min(0).max(9)
      gui.add(gltf.scene.position, "z").min(0).max(9)

      gui.add(pointLight.position, "x").min(-9).max(9)
      gui.add(pointLight.position, "y").min(-9).max(9)
      gui.add(pointLight.position, "z").min(-9).max(9)

      gui.close()
      // -------------------------------------------------------

      if (device === Device.Mobile) {
        gltf.scene.scale.set(0.12, 0.12, 0.12)
      }

      /* 
        Play the timeline based on the device
        If the device is desktop, pause the mobile timeline and play the desktop timeline
        If the device is mobile, pause the desktop timeline and play the mobile timeline
      */
      if (device === Device.Desktop) {
        desktopAnimation({ gltf, desktopTimeline })
        desktopTimeline.resume()
      } else {
        mobileAnimation({ gltf, mobileTimeline })
        mobileTimeline.resume()
      }
    })

    // Lights
    const pointLight = new THREE.PointLight(0xffffff, 100)
    pointLight.position.x = 2
    pointLight.position.y = 3
    pointLight.position.z = 4

    scene.add(pointLight)

    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight,
    }

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
      antialias: true,
    })

    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

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

    // ------------------------------------------------------------------

    const tick = () => {
      // Render
      renderer.render(scene, camera)
      window.requestAnimationFrame(tick)
    }

    tick()
  }, [device])

  return (
    <>
      <canvas ref={canvasRef} className="webgl1"></canvas>
    </>
  )
}

export default Keyboard
