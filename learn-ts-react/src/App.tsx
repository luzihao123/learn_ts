import React, { useState } from 'react';
import logo from './logo.svg';
import Hello from './components/Hello';
import MouseTracker from './components/MouseTracker';
import LikeButton from './components/LikeButton'
import useMousePosition from './hooks/useMousePosition'
import useURLLoader from './hooks/useURLLoader'
import './App.css';
interface IShowResult{
  message: string,
  status: string
}
interface IThemeProps {
  [key: string]: {color: string; background: string;}
}
const  theme: IThemeProps = {
  'light': {
    color: "#000",
    background: '#eee'
  },
  'dark': {
    color: "#fff",
    background: '#222'
  }
}
export const ThemeContext = React.createContext(theme.light)
function App() {
  // const positions = useMousePosition()
  const [show, setShow] = useState(true)
  //const [data, loading] = useURLLoader('https://dog.ceo/api/breeds/image/random',[show])
  //const dogResult = data as IShowResult
  return (
    <div className="App">
      <ThemeContext.Provider value={theme.dark}>

      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <button onClick={()=>setShow(!show)}>换图</button>
        </p>
        <LikeButton></LikeButton>
        <Hello/>
        {/* <p>X: {positions.x} Y: {positions.y}</p>
        {
          loading ? <p>读取中</p>:
          <img src={dogResult && dogResult.message} />
        } */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
