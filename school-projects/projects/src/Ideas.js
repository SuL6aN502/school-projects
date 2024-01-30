import Card from "./components/Card";
import ideas from './components/ideas.json';
export default function Ideas(){
    const dataShow = ideas.map(el =>(<Card title={el.title} schoolName={el.schoolName} volunteerIdea={el.volunteerIdea} key={el.key}/>)) ;   
    return(
        <main className="Ideas">
            {dataShow}
        </main>
    );
}