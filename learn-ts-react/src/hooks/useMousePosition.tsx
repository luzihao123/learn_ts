import React, {useState, useEffect} from 'react'

const useMousePosition = () => {
  const [positions, setPositionis] = useState({x:0, y:0})
  useEffect(()=>{
    const updateMouse = (e: MouseEvent) => {
      setPositionis({x: e.clientX,y:e.clientY})
    }
    document.addEventListener('mousemove', updateMouse)
    return ()=>{
      document.removeEventListener('mousemove', updateMouse)
    }
  }, [])
  return positions
}

export default useMousePosition