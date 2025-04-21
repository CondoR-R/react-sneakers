import { useContext } from "react";

import { SneakersContext } from "../../pages/Provider/Provider";

import Info from "../Info/Info";

import style from "./EmptyShell.module.scss";

function EmptyShell({ title, text }) {
  const { goBack, emojiIndex } = useContext(SneakersContext);

  const emoji = ["🥺", "🥲", "😞", "😔", "😕", "☹️", "😫", "😩", "😢"];

  return (
    <div className={style.emptyShell}>
      <Info
        title={title}
        text={text}
        spanContent={emoji[emojiIndex]}
        onClick={goBack}
      />
    </div>
  );
}

export default EmptyShell;
