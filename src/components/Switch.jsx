import handleLight from '../assets/light-mode/handle.svg'
import handleDark from '../assets/dark-mode/handle.svg'
import { useEffect, useState } from 'react'
function Switch() {
  const [mode, setMode] = useState('dark');
  useEffect(() => {
      document.getElementsByTagName('html')[0].setAttribute('class', mode)
  }, [mode])
  return (
    <>
    <label htmlFor="switch" className="relative md:w-[64px] w-14 h-6 border border-stroke-color-light-mode rounded-full bg-surface-color-light-mode  dark:border-stroke-color-dark-mode dark:bg-surface-color-dark-mode backdrop-blur-sm cursor-pointer group">
    <input type="checkbox" id="switch" className='peer sr-only' onClick={() => setMode(mode === 'dark' ? 'light' : 'dark')} />
      <div className="absolute transition duration-500 ease-in-out -left-4 -top-2/4 peer-checked:translate-x-11 group-hover:bg-surface-color-light-mode rounded-full grid place-items-center w-12 h-12 dark:group-hover:bg-surface-color-dark-mode">
        <img src={mode === 'light' ? handleLight : handleDark} alt="handle" />
      </div>
    </label>
    </>
  )
}

export default Switch