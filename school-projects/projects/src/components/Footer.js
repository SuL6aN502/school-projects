export default function Footer() {
  return (
    <footer>
      <img src={require("../assets/wblogo.png")} alt="logo"></img>
      <img src={require("../assets/wzlogo.png")} alt="logo"></img>
      <img src={require("../assets/mt.png")} alt="logo"></img>
      <ul className="ulF">
        <h3>وسائل تواصل المدرسة</h3>
        <a href="">
          <i className="fa-brands fa-x-twitter"></i>
          <p>تويتر</p>
        </a>
        <a href="">
          <i className="fa-brands fa-telegram"></i>
          <p>تلجرام</p>
        </a>
      </ul>
      <ul className="ulF">
        <h3>وسائل تواصل وزارة التعليم</h3>

        <a href="http://twitter.com/moe_gov_sa">
          <i className="fa-brands fa-x-twitter"></i>
          <p>تويتر</p>
        </a>

        <a href="https://www.instagram.com/moe_gov_sa/">
          <i className="fa-brands fa-instagram"></i>
          <p>انستقرام</p>
        </a>

        <a href="https://www.youtube.com/channel/UCNI3mOncSgbjIJJp01EzgVA">
          <i className="fa-brands fa-youtube"></i>
          <p>يوتيوب</p>
        </a>

        <a href="https://www.snapchat.com/add/moe_gov?locale=ar">
          <i className="fa-brands fa-snapchat"></i>
          <p>سناب شات</p>
        </a>
      </ul>
      <p className="copyright">2023®جميع الحقوق محفوظة لثانوية ابن النفيس الرياض مكتب تعليم قرطبة</p>
    </footer>
  );
}
