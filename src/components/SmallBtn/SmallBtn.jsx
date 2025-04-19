import style from "./SmallBtn.module.scss";

function SmallBtn({
  children,
  isFavorite = false,
  isAdded = false,
  positionClass = "",
  onClick = () => {},
}) {
  const classes = `${style.smallBtn} ${isFavorite ? style.likeBtn : ""} ${
    isAdded ? style.addedBtn : ""
  } ${positionClass}`;

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}

export default SmallBtn;
