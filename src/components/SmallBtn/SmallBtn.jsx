import style from "./SmallBtn.module.scss";

function SmallBtn({
  children,
  isFavorite = false,
  isAdded = false,
  isSmall = false,
  positionClass = "",
  onClick = () => {},
}) {
  const classes = `${style.smallBtn} ${isFavorite ? style.likeBtn : ""} ${
    isAdded ? style.addedBtn : ""
  } ${isSmall ? style.moreSmallBtn : ""} ${positionClass}`;

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}

export default SmallBtn;
