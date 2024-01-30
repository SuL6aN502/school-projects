import Card from "./components/Card";

export default function MyThoughts() {
  return (
    <main className="MyThoughts">
      <section>
        <hgroup>
          <h2>أهمية اقتراحاتك!</h2>
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
          <Card title="تعزيز الابتكار في التعليم" schoolName="ابتدائية الامام الشاطبي" volunteerIdea="تقديم برامج تعليمية تشجع على الإبداع والابتكار، مع توفير فرص للطلاب لتطوير مشاريعهم الخاصة والعمل على تحقيقها."/>
        </div>
      </section>
      <section>
        <h3>طموحاتنا</h3>
        <hr></hr>
        <div className="Cards">
          <div className="Card">
            <h4>فكرة</h4>
            <p>500000</p>
          </div>
          <div className="Card">
            <h4>مساهمة</h4>
            <p>10000</p>
          </div>
          <div className="Card">
            <h4>اصلاح</h4>
            <p>5000</p>
          </div>
        </div>
      </section>

      <section>
      <h3>
                مزايانا   
            </h3>
        <div>
          <div>
            <i className="fa-solid fa-gamepad"></i>
            <h3>سهل</h3>
          </div>

          <div>
            <i className="fa-solid fa-chart-simple"></i>
            <h3>بسيط</h3>
          </div>

          <div>
            <i className="fa-solid fa-user-tie"></i>
            <h3>احترافي</h3>
          </div>

          <div>
            <i className="fa-solid fa-ranking-star"></i>
            <h3>احتارفي</h3>
          </div>

          <div>
            <i className="fa-solid fa-book"></i>
            <h3>من الطلاب وإليهم</h3>
          </div>

          <div>
            <i className="fa-solid fa-shield-halved"></i>
            <h3>أمن</h3>
          </div>
        </div>
      </section>
    </main>
  );
}
