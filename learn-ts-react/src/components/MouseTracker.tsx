import React, {useState, useEffect} from 'react'

const MouseTracker: React.FC = () => {
  const [positions, setPositionis] = useState({x:0, y:0})
  useEffect(()=>{
    const updateMouse = (e: MouseEvent) => {
      console.log('ddd')
      setPositionis({x: e.clientX,y:e.clientY})
    }
    document.addEventListener('click', updateMouse)
    return ()=>{
      console.log('dsd')
      document.removeEventListener('click', updateMouse)
    }
  }, [])
  return (
  <p>X: {positions.x} Y: {positions.y}</p>
  )
}
export default MouseTracker