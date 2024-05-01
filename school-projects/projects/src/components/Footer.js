export default function Footer() {
  const year = new Date().getFullYear()
  console.log(year);
  return (
    <footer>
      <img src={require("../assets/wblogo.png")} alt="logo"></img>
      <img src={require("../assets/wzlogo.png")} alt="logo"></img>
      <img src={require("../assets/mt.png")} alt="logo"></img>
      <ul className="ulF">
        <h3>وسائل تواصل المدرسة</h3>
        <a href="https://twitter.com/MOE_RYH_26_0087?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor">
          <i className="fa-brands fa-x-twitter"></i>
          <p>تويتر</p>
        </a>
        <a href="https://t.me/abenalnafese">
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
      <p className="copyright">{year}®جميع الحقوق محفوظة لثانوية ابن النفيس الرياض مكتب تعليم قرطبة</p>
    </footer>
  );
}
