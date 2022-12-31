
function Button(props) {
  return (
    <a className="
    flex justify-center items-center py-4 px-6 gap-2 min-w-full h-14 backdrop-blur-sm rounded-lg border border-stroke-color-dark-mode font-medium leading-6 text-base text-white bg-surface-color-dark-mode
    transition duration-300 hover:bg-surface-color-dark-mode-hover hover:border-[1.5px] hover:border-white
    " href={props.link} target="_blank">
      {props.text}
    </a>
  )
}


export default Button