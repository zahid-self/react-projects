import React, { useRef, useState } from "react";
import ReactPlayer from "react-player/youtube";
import { useParams } from "react-router-dom";
import classes from "../styles/Miniplayer.module.css";

const Miniplayer = ({ title }) => {
  const miniplayerRef = useRef();
  const [miniplayer, setMiniplayer] = useState(false);
  const { id } = useParams();

  const handleMiniplayer = () => {
    if (!miniplayer) {
      miniplayerRef.current.classList.remove(classes.floatingBtn);
      setMiniplayer(true);
    } else {
      miniplayerRef.current.classList.add(classes.floatingBtn);
      setMiniplayer(false);
    }
  };
  return (
    <div
      className={`${classes.miniPlayer} ${classes.floatingBtn}`}
      ref={miniplayerRef}
      onClick={handleMiniplayer}
    >
      <span className={`material-icons-outlined ${classes.open}`}>
        {" "}
        play_circle_filled{" "}
      </span>
      <span
        className={`material-icons-outlined ${classes.close}`}
        onClick={handleMiniplayer}
      >
        {" "}
        close{" "}
      </span>
      <ReactPlayer
        className={classes.player}
        width={"300px"}
        height={"168px"}
        url={`https://www.youtube.com/watch?v=${id}`}
        playing={miniplayer}
        controls
      />
      <p>{title}</p>
    </div>
  );
};

export default Miniplayer;
