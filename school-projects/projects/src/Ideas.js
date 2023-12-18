import Card from "./components/Card";
import ideas from './components/ideas.json';
export default function Ideas(){
    const dataShow = ideas.map(el =>(<Card title={el.title} studentName={el.studentName} ideaText={el.ideaText} key={el.key}/>)) ;   
    return(
        <main className="Ideas">
            {dataShow}
        </main>
    );
}