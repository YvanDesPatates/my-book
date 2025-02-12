
import logo from '../ressources/images/egg.png'
import '../ressources/css/footer.css'
import {useNavigate} from 'react-router-dom';

export default function Footer() {
    const navigate = useNavigate();

    const handleNavigate = (where) => {
        navigate(where)
    }


    return (
        <div className='div-footer-container'>
            <div className='div-footer-menuLogo'>
                <div className='div-footer-logo'>
                    <img className='img-footer-logo' src={logo} />
                </div>
                <div className='div-footer-menu'>
                    <p className='p-footer-menu' onClick={()=>handleNavigate('/')}>HOME</p>
                </div>
            </div>
        </div>
    )
}