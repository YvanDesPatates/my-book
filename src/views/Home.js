import {useState, useEffect} from 'react'

import '../ressources/css/home.css'
import { useNavigate } from 'react-router-dom';

export default function Home() {
    const navigate = useNavigate()


    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <div className='container-home'>

        </div>
    )
}