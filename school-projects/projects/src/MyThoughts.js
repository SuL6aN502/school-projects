import Card from "./components/Card";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();
export default function MyThoughts() {

  return (
    <main className="MyThoughts">
      <section>
        <hgroup>
          <h2>أهمية فكرتك!</h2>
          <p>
            نحن نؤمن بأن قوة الإبداع تكمن في تبادل الأفكار والتفاعل. يُعَدّ
            "أفكار الطلاب" مساحة حيث يمكن للعقول الشابة أن تتقاطع وتتبادل
            الأفكار الرائدة. بتقديم اقتراحاتك، تشارك في بناء مستقبل يعتمد على
            الإبداع والابتكار. إن كل فكرة صغيرة يمكن أن تكون بذرة لتحولات كبيرة.
            ساهم في تشكيل غدٍ أفضل من خلال مشاركة أفكارك الفريدة والملهمة اليوم.
          </p>
        </hgroup>
        <div>
          <h3>ابرز الابداعات</h3>
          <hr></hr>
          <Card
            title="تعزيز الابتكار في التعليم"
            schoolName="ثانوية الامام الشاطبي"
            volunteerIdea="تقديم برامج تعليمية تشجع على الإبداع والابتكار، مع توفير فرص للطلاب لتطوير مشاريعهم الخاصة والعمل على تحقيقها."
          />
        </div>
      </section>


      <section>
        <h3>مزايانا</h3>
        <div>
          <div  data-aos="fade-up">
            <i className="fa-solid fa-gamepad"></i>
            <h3>سهل</h3>
          </div>

          <div  data-aos="fade-up">
            <i className="fa-solid fa-chart-simple"></i>
            <h3>بسيط</h3>
          </div>

          <div  data-aos="fade-up">
            <i className="fa-solid fa-user-tie"></i>
            <h3>احترافي</h3>
          </div>

          <div  data-aos="fade-up">
            <i className="fa-solid fa-ranking-star"></i>
            <h3>احتارفي</h3>
          </div>

          <div  data-aos="fade-up">
            <i className="fa-solid fa-book"></i>
            <h3>من الطلاب وإليهم</h3>
          </div>

          <div  data-aos="fade-up">
            <i className="fa-solid fa-shield-halved"></i>
            <h3>أمن</h3>
          </div>
        </div>
      </section>
    </main>
  );
}
