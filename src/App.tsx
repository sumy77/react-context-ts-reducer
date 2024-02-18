import { useContext } from 'react'
import './App.css'
import { ThemeContext } from './context/ThemeContext'

function App() {

  const {state, dispatch} = useContext(ThemeContext);

  return (
    <>
      <div className={`main ${state.theme} flex`} style={{fontSize: state.fontSize}}>
        <div>
          <p>
            <button onClick={() => dispatch({type: 'SET_THEME'})}>Change Theme</button>
            <span>Selected Theme: {state.theme}</span>
          </p>
          <p>
            <button onClick={() => dispatch({type: 'SET_FONT_SIZE', payload: 16})}>Change Font Size</button>
            <span>Selected FontSize: {state.fontSize}</span>
          </p>
        </div>
      </div>
    </>
  )
}

export default App
