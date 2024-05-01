import React from "react";
import { Link } from "react-router-dom";
import Typed from "typed.js";
export default function Home() {

  React.useEffect(() => {
    const typed = new Typed(".liner", {
      strings: ["بَنك الأَفكَار التّطوِعية"],
      typeSpeed: 50,
      showCursor: false
    })
  }, []);
  return (
    <main className="Home">
      <img src={require("./assets/Home.png")} alt="img"></img>
      <hgroup>
        <h1 className="liner"></h1>
        <p>مبادرة من مدرسة ابن النفيس الثانوية لتطوير العمل التطوعي</p>
        <Link to="/YourIdea">اطرح فكرة!</Link>
      </hgroup>
    </main>
  );
}
