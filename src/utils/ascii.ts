import {
  BufferGeometry,
  BufferAttribute,
  Points,
  PointsMaterial,
  CanvasTexture,
} from "three"

const particlesArr: Points[] = []

function ascii(characterArr: string[]): Points[] {
  characterArr.forEach((char) => {
    const ASCIICanvas = document.createElement("canvas")
    const ASCIIContext = ASCIICanvas.getContext("2d")

    if (!ASCIIContext) {
      return
    }

    interface canvasSize {
      width: number
      height: number
    }

    const canvasSize: canvasSize = {
      width: 16 * 3,
      height: 16 * 3,
    }

    ASCIICanvas.width = canvasSize.width
    ASCIICanvas.height = canvasSize.height

    ASCIIContext.fillStyle = "#2d124e"
    ASCIIContext.font = "48px monospace"

    ASCIIContext.fillText(char, canvasSize.width / 4, canvasSize.height / 1.3)

    const ASCIITexture = new CanvasTexture(ASCIICanvas)

    const particlesGeometry = new BufferGeometry()
    const particleCount = 200

    const posArr = new Float32Array(particleCount * 3)
    for (let i = 0; i < particleCount * 3; i++) {
      posArr[i] = ((Math.random() - 0.5) * 360.0 * 3.14159265359) / 180.0
    }

    particlesGeometry.setAttribute("position", new BufferAttribute(posArr, 3))

    const particlesMaterial = new PointsMaterial({
      size: 0.05,
      transparent: true,
      map: ASCIITexture,
    })

    const particles = new Points(particlesGeometry, particlesMaterial)
    particlesArr.push(particles)
  })
  return particlesArr
}

export default ascii
