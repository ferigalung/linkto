import handleLight from '../assets/light-mode/handle.svg'
import handleDark from '../assets/dark-mode/handle.svg'
function Switch() {
  return (
    <>
    <label htmlFor="toggle" className="relative w-[64px] h-6 border border-stroke-color-light-mode rounded-full bg-surface-color-light-mode backdrop-blur-sm">
      <input type="checkbox" id="check" className='peer' />
      <img src={handleLight} className="absolute -left-4 -top-2/4" alt="handle" />
    </label>
    </>
  )
}

export default Switch