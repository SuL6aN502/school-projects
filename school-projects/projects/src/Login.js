import { Link } from "react-router-dom";

export default function Login() {
  return (
    <main className="main_login">
      <section className="left_side"></section>
        <form className="login">
        <label htmlFor="Email">اسم المستخدم او البريد الإكتروني</label>
          <input type="email" placeholder="البريد الإلكتروني" id="Email"></input>
          <label htmlFor="pass">كلمة المرور </label>
          <input type="password" placeholder="كلمة المرور" id="pass" value={''}></input>
          <Link to="/forgitpass">هل نسيت كلمة المرور؟</Link>
          <button type="submit">تسجيل دخول</button>
        </form>
    </main>
  );
}
