
function Button(props) {
  return (
    <a className="
    flex justify-center items-center py-4 px-6 gap-2 min-w-full h-14 backdrop-blur-sm rounded-lg border border-stroke-color-light-mode dark:border-stroke-color-dark-mode font-medium leading-6 text-base 
    text-black bg-surface-color-light-mode hover:bg-surface-color-light-mode-hover
    dark:text-white dark:bg-surface-color-dark-mode
    transition duration-300 dark:hover:bg-surface-color-dark-mode-hover hover:border-[1.5px] dark:hover:border-white
    " href={props.link} target="_blank">
      {props.text}
    </a>
  )
}


export default Button