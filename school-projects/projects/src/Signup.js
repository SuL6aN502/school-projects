import { Link } from "react-router-dom";


export default function signup() {
  return (
    <main className="main_login">
      <section className="left_side"></section>
      <form className="signup">

      <label htmlFor="text">الاسم الرباعي</label>
        <input type="text" placeholder="اسمك" id="text"></input>

        <label htmlFor="numberph">رقم الهاتف </label>
        <input type="number" placeholder="05*******" id="numberph"></input>

        <label htmlFor="Email">البريد الإكتروني</label>
        <input type="email" placeholder="Email@gmail.com" id="Email"></input>
        
        <label htmlFor="idnumber">الهوية الوطنية</label>
        <input type="number" placeholder="1164******" id="idnumber"></input>
        
        <label htmlFor="pass">كلمة المرور </label>
        <input
          type="password"
          placeholder="كلمة المرور"
          id="pass"
          value={""}
        ></input>
          <Link to="/Login">لديك حساب؟</Link>
        <button type="submit">تسجيل دخول</button>
      </form>
    </main>
  );
}
