export default function YourIdea(){
    return(
        <main className="YourIdea">
            <img src={require("./assets/img1.png")} alt="img"></img>
            <form>

                <label htmlFor="title">عنوان الفكرة</label>
                <input type="text" placeholder="الفكرة" id="title"></input>

                <label htmlFor="text">نص الفكرة</label>
                <textarea type="text" placeholder="نص الفكرة" id="text"></textarea>

                <label htmlFor="imgs">ارفاق صور</label>
                <input type="file" name="" value=""  id='imgs'></input>


                <button type="submit">ارسال</button>

            </form>
        </main>
    );
}