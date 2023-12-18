export default function YourIdea(){
    return(
        <main className="YourIdea">
            <section className="left_side"></section>
            <form>
                <label htmlFor="name">ادخل اسمك الرباعي</label>
                <input type="text" placeholder="الاسم الرباعي" id="name"></input>

                <label htmlFor="title">عنوان الفكرة</label>
                <input type="text" placeholder="الفكرة" id="title"></input>

                <label htmlFor="text">نص الفكرة</label>
                <textarea type="text" placeholder="" id="text"></textarea>

                <label htmlFor="imgs">ارفاق صور</label>
                <input type="file" id='imgs'></input>


                <button type="submit">ارسال</button>

            </form>
        </main>
    );
}