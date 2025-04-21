import style from "./Btn.module.scss";

function Btn({
  positionClass = "",
  text = "",
  marginImg = "",
  isLeftArrow = false,
  onClick = () => {},
}) {
  return (
    <button
      onClick={onClick}
      className={`${style.btn} ${positionClass} ${
        isLeftArrow ? style.leftArrow : ""
      }`}
    >
      <span className={style.btnMargin}>{isLeftArrow && marginImg}</span>
      <span className={style.btnText}>{text}</span>
      <span className={style.btnMargin}>{!isLeftArrow && marginImg}</span>
    </button>
  );
}

export default Btn;
