/*eslint-disable*/
import { useState } from "react";
import "./App.css";

function App() {
  let [글제목, 글제목변경] = useState([
    "남자코트추천",
    "강남우동맛집",
    "파이썬독학",
  ]);
  let [like, likeChange] = useState(0);

  function likeBtn() {
    likeChange(like + 1);
  }
  return (
    <div className="App">
      <div className="black-nav">
        <h4>블로그임</h4>
      </div>
      <button onClick={() => {}}>가나다순 정렬</button>
      <button
        onClick={() => {
          let copy = [...글제목];
          copy[0] = "여자코트추천";
          글제목변경(copy);
        }}
      >
        ddd
      </button>
      <div className="list">
        <h4>
          {글제목[0]} <span onClick={likeBtn}>👍</span> {like}
        </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[2]}</h4>
        <p>2월 17일 발행</p>
      </div>
    </div>
  );
}

export default App;
