import handleLight from '../assets/light-mode/handle.svg'
import handleLightHover from '../assets/light-mode/handle-hover.svg'
import handleDark from '../assets/dark-mode/handle.svg'
import { useEffect, useState } from 'react'
function Switch() {
  const [mode, setMode] = useState('light');
  useEffect(() => {
      document.getElementsByTagName('html')[0].setAttribute('class', mode)
  })
  return (
    <>
    <label htmlFor="switch" className="relative w-[64px] h-6 border border-stroke-color-light-mode rounded-full bg-surface-color-light-mode  dark:border-stroke-color-dark-mode dark:bg-surface-color-dark-mode backdrop-blur-sm cursor-pointer group">
    <input type="checkbox" id="switch" className='peer sr-only' onClick={() => setMode(mode === 'dark' ? 'light' : 'dark')} />
      <img src={mode === 'light' ? handleLight : handleDark} className="absolute transition -left-4 -top-2/4 peer-checked:translate-x-11" alt="handle" />
    </label>
    </>
  )
}

export default Switch