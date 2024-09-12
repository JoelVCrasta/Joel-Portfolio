import Loader from "./pages/Loader"
import Home from "./pages/Home"
import { useEffect } from "react"
import { Device, useDevice } from "./utils/context"

const App = () => {
  const { device, setDevice } = useDevice()

  useEffect(() => {
    if (window.innerWidth <= 1024) {
      console.log("Device: ", device)
      setDevice(Device.Mobile)
    } else {
      console.log("Device: ", device)
      setDevice(Device.Desktop)
    }
  }, [])

  return (
    <>
      <Loader isDoneLoading={true} />
      <Home />
      {/*  <Other /> */}
    </>
  )
}

export default App
