import twitter from '../assets/icons/twitter.svg'
import Instagram from '../assets/icons/Instagram.svg'
import GitHub from '../assets/icons/GitHub.svg'
import LinkedIn from '../assets/icons/LinkedIn.svg'
function SocialLink(props) {
    let logoImg;
    if(props.media === 'twitter') {
        logoImg = twitter
    }
    if(props.media === 'instagram') {
        logoImg = Instagram
    } 
    if(props.media === 'github') {
        logoImg = GitHub
    }
    if(props.media === 'linkedin') {
        logoImg = LinkedIn
    }
  return (
    <a href={props.link} target="_blank">
        <img className='invert dark:invert-0' src={logoImg} alt={props.media} />
    </a>
  )
}

export default SocialLink