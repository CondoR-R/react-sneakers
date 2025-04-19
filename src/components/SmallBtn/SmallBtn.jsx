import style from "./SmallBtn.module.scss";

function SmallBtn({ children, btnClass = "", parentClass = "" }) {
  return (
    <button
      className={`${style.smallBtn} ${btnClass
        .split(" ")
        .map((c) => `style.${c}`)
        .join(" ")} ${parentClass}`}
    >
      {children}
    </button>
  );
}

export default SmallBtn;
