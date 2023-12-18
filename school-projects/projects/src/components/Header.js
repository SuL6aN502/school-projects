import { Link } from 'react-router-dom';



export default function Header(){
    return(
    <header>
        <div>
            <img src={require('../assets/logo.png')} alt='logo'></img>
            <Link className='login_btn' to="/Login">تسجيل الدخول</Link>
        </div>
        
        <nav>
            <ul>
                <Link className='li' to="">الصفحة الرئيسية</Link>
                <hr></hr>
                <Link className='li' to="/MyThoughts">إبداعات</Link>
                <hr></hr>
                <Link className='li' to="/Ideas">الافكار</Link>
                <hr></hr>
                <Link className='li' to="/AboutUs">من نحن</Link>
            </ul>
        </nav>
    </header>
)}