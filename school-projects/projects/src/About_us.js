import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();
export default function AboutUs() {
  return (
    <main className="About-us">
      <section>
        <img
          src={require("./assets/undraw_Profile_re_4a55.png")}
          alt="bk"
        ></img>
        <hgroup>
          <h2>
            من <span className="span-1">نحن؟</span>
          </h2>
          <p>
            تتجسد رؤيتنا في تشجيع الطلاب على التفكير الإبداعي والمساهمة الفعّالة
            في تطوير مجتمعنا. قد قدمنا مبادرة فريدة تحت اسم "بنك الأفكار
            التطوعية"، وهي منصة تهدف إلى تحفيز روح التطوع والمساهمة الإيجابية في
            الأعمال الخدمية.
          </p>
        </hgroup>
      </section>
      <section>
        <div>
          <h2>أهداف المبادرة</h2>

          <hgroup data-aos="fade-right">
            <h4>تعزيز الوعي الاجتماعي</h4>
            <p>
              تشجيع الطلاب على التفكير في قضايا المجتمع وفهم احتياجاته، بهدف
              تعزيز الوعي الاجتماعي لديهم.
            </p>
          </hgroup>

          <hgroup data-aos="fade-left">
            <h4>تحفيز الإبداع والتفكير الإيجابي </h4>
            <p>
              إتاحة الفرصة للطلاب لتقديم أفكارهم الإبداعية والتفكير بحلول
              إيجابية للتحديات التي تواجه المجتمع
            </p>
          </hgroup>

          <hgroup data-aos="fade-up">
            <h4>تشجيع ثقافة التطوع</h4>
            <p>
              نشر ثقافة التطوع بين الشباب وتحفيزهم على المشاركة الفعّالة في
              الأعمال التطوعية.
            </p>
          </hgroup>

          <hgroup data-aos="fade-up">
            <h4>كيف يعمل البنك؟</h4>
            <p>
              يتم استعراض الأفكار المقترحة، وتُختار الأفكار البارزة لتكون جزءًا
              من مشاريع تطوعية حقيقية يشارك فيها الطلاب .
            </p>
          </hgroup>
        </div>
      </section>
    </main>
  );
}
