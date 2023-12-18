import { Link } from 'react-router-dom';

export default function Home(){
    return(
    <main className='Home'>
        <img src={require('./assets/undraw_Thought_process_re_om58.png')} alt='img'></img>
      <hgroup>
        <h1 className='liner'>
          بنك <span className='span-1'>الْأَفْكَار</span> التطوعية 
        </h1>
        <p>
        مبادرة من مدرسة ابن النفيس الثانوية لتطوير العمل التطوعي
        </p>
        <Link to='/YourIdea'>اطرح فكرة!</Link>
      </hgroup>
    </main>
)}