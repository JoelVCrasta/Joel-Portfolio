import { useState, useContext, createContext } from "react"

export enum Device {
  Mobile = 0,
  Desktop,
}

interface ContextProps {
  device: Device
  setDevice: React.Dispatch<React.SetStateAction<Device>>
  loaded: boolean
  setLoaded: React.Dispatch<React.SetStateAction<boolean>>
}

const Context = createContext<ContextProps | undefined>(undefined)

export const ContextProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [device, setDevice] = useState<Device>(Device.Desktop)
  const [loaded, setLoaded] = useState<boolean>(false)

  const value = {
    device,
    setDevice,
    loaded,
    setLoaded,
  }

  return <Context.Provider value={value}>{children}</Context.Provider>
}

export const useDevice = () => {
  const context = useContext(Context)
  if (!context) {
    throw new Error("useDevice must be used within a ContextProvider")
  }

  return context
}
