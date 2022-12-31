
import Button from './components/Button'
import ProfilePic from './components/ProfilePic'
import Socials from './components/Socials'
function App() {
  return (
    <>
      <div className='container'>
        <ProfilePic />
        
        <Button text='Coba 1' link='https://twitter.com' />
        <Button text='Coba 2' link='https://twitter.com' />
        <Button text='Coba 3' link='https://twitter.com' />
        <Button text='Coba 4' link='https://twitter.com' />

        <Socials />
      </div>
    </>
  )
}

export default App
