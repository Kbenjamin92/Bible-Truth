import { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { createUseStyles } from "react-jss";

interface LikeProps {
  className: string;
}

export const Like: React.FC<LikeProps> = ({ className }) => {
  const [liked, setLiked] = useState<boolean>(false);
  const useLikeStyles = createUseStyles({
    heartButton: {
      "&:active": {
        transform: "scale(0.9)",
      },
    },
  });
  const classes = useLikeStyles();
  return (
    <div className={className}>
      {liked ? (
        <AiFillHeart
          className={classes.heartButton}
          color={"#F44336"}
          size={25}
          onClick={() => setLiked(false)}
        />
      ) : (
        <AiOutlineHeart
          className={classes.heartButton}
          color={"black"}
          size={25}
          onClick={() => setLiked(true)}
        />
      )}
    </div>
  );
};
