import React from "react";
import TimeAgo from "react-timeago";
import frenchStrings from "react-timeago/lib/language-strings/en";
import buildFormatter from "react-timeago/lib/formatters/buildFormatter";
import "./trending.css"
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";


function Trending({ t }) {
  const formatter = buildFormatter(frenchStrings);

  const choose = (body) => {
    const arraybody = body.split(" ");

    return (
      <span>
        {arraybody.map((x) => {
          if (x.startsWith("http")) {
            return <img className="postImg" src={x} alt="" />;
          }
          return x + " ";
        })}
      </span>
    );
  };

  return (
    <div className="trindPost">
      <div className="postdevid">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src="https://images.unsplash.com/photo-1601120103207-78398c2e8e6a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt=""
            />
            <span className="postUsername">NAif</span>
            <span className="postDate">
              <TimeAgo date={t.post.date} formatter={formatter} />
            </span>
          </div>
        </div>
        <div className="postCenter1">
          <div>{choose(t.post.body)}</div>
          <div> <ThumbUpAltIcon className="iconLikeTrind"/> {t.post.likesCounter}</div>
        </div>
          <hr style={{ fontSize: "10px", color: "gray", marginTop: "10px" , width: "350px" }} />
      </div>
    </div>
  );
}

export default Trending;
