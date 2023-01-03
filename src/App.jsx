
import Button from './components/Button'
import ProfilePic from './components/ProfilePic'
import Socials from './components/Socials'
import Switch from './components/Switch'
import Footer from './components/Footer'
function App() {
  return (
    <>
      <div className='container'>
        <ProfilePic />
        <Switch />
        <Button text='Article - Cara Deploy Dockerized App ke VPS' link='https://ferigalung.notion.site/Deploy-Dockerized-App-into-VPS-e65f1463bad744dd9503235e451c4507' />
        <Button text='Repo - Linkto' link='https://github.com/ferigalung/linkto' />
        <Button text='Rekomendasi Earphone - Tangzu Wan er' link='https://tokopedia.link/Kp9f8Bjjhwb' />
        <Button text='Rekomendasi Mic Buat Meeting - Boya M1' link='https://tokopedia.link/CcfZD7njhwb' />
        <Socials />

        <Footer />
      </div>
    </>
  )
}

export default App
