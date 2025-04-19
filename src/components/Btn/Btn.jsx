import style from "./Btn.module.scss";

function Btn({
  positionClass = "",
  text = "",
  marginImg = "",
  isLeftArrow = false,
}) {
  return (
    <button
      className={`${style.btn} ${positionClass} ${
        isLeftArrow ? style.leftArrow : ""
      }`}
    >
      <span className={style.btnMargin}></span>
      <span className={style.btnText}>{text}</span>
      <span className={style.btnMargin}>{marginImg}</span>
    </button>
  );
}

export default Btn;
