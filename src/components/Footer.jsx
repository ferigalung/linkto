import { useEffect, useState } from 'react';
import retceh from '../../retceh.json'
function Footer() {
    const [joke, setJoke] = useState('');

    useEffect(() => {
        const joke = retceh.jokes[Math.floor(Math.random()*retceh.jokes.length)];
        setJoke(joke)
    }, [])
  return (
    <div className='flex flex-col items-center justify-center text-black dark:text-white'>
        <p>{joke.joke}</p>
        <p>{joke.author}</p>
    </div>
  )
}

export default Footer