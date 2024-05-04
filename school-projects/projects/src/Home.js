import React from "react";
import { Link } from "react-router-dom";
import Typed from "typed.js";
import { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";


export default function Home() {
  const [CounterOn, setCounterOn] = useState(false);
  React.useEffect(() => {
    const typed = new Typed(".liner", {
      strings: ["بَنك الأَفكَار التّطوِعية"],
      typeSpeed: 50,
      showCursor: false,
    });
  }, []);
  return (
    <main className="Home">
      <section>
        <img src={require("./assets/home.png")} alt="img"></img>
        <hgroup>
          <h1 className="liner"></h1>
          <p>مبادرة من مدرسة ابن النفيس الثانوية لتطوير العمل التطوعي</p>
          <Link to="/YourIdea">اطرح فكرة!</Link>
        </hgroup>
      </section>
      <section>
        <h3>طموحاتنا</h3>
        <hr></hr>

        <ScrollTrigger
          className="Cards"
            onEnter={() => setCounterOn(true)}
            onExit={() => setCounterOn(false)}
          >
            <div className="Card" data-aos="fade-right">
              <h4>فكرة</h4>
              <p>
                {CounterOn && (
                  <CountUp start={0} end={200000} duration={2} delay={0} />
                )}
              </p>
            </div>
            <div className="Card" data-aos="fade-up">
              <h4>مساهمة</h4>
              <p>
                {CounterOn && (
                  <CountUp start={0} end={10000} duration={2} delay={0} />
                )}
              </p>
            </div>
            <div className="Card" data-aos="fade-left">
              <h4>اصلاح</h4>
              <p>
                {CounterOn && (
                  <CountUp start={0} end={5000} duration={2} delay={0} />
                )}
              </p>
            </div>
          </ScrollTrigger>
      </section>
      <section>
      <i class="fa-solid fa-quote-left"></i>
      <p>
        بنك الأفكار التطوعية هو مبادرة تطوعية تهدف إلى تعزيز الوعي بأهمية العمل التطوعي وتشجيع المشاركة فيه. يُعد العمل التطوعي جزءًا أساسيًا من تطوير المجتمع وتحقيق التغيير الإيجابي. يمكن للطلاب والمتطوعين تقديم أفكارهم ومشاركتها في بنك الأفكار، حيث يمكن للجهات المعنية تبني هذه الأفكار وتنفيذها على أرض الواقع.

      </p>
      <i class="fa-solid fa-quote-right"></i>
      </section>


    </main>
  );
}
