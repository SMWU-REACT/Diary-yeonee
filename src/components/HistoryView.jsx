import "./HistoryView.css";
import { useNavigate } from "react-router-dom";

function HistoryView() {
  const navigate = useNavigate();

  return (
    <>
      <div style={{ display: "flex", alignItems: "center" }}>
        <button
          className="back-btn"
          onClick={() => {
            // MainView 화면으로 전환
            navigate('/');
          }}>
          &lt;
        </button>
        <h4>다이어리 기록</h4>
      </div>
      <div className="diary-item">
        <div className="diary-date">(날짜)</div>
        <div>(내용)</div>
      </div>
    </>
  );
}
export default HistoryView;
