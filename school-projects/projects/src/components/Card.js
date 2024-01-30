export default function Card (props) {
  return (
    <div className="Card_project">
      <h4>{props.title}</h4>
      <h5>{props.schoolName}</h5>
        <hr></hr>
      <p>
      {props.volunteerIdea}
      </p>
    </div>
  );
}
