import React from "react";
import TimeAgo from "react-timeago";
import frenchStrings from "react-timeago/lib/language-strings/en";
import buildFormatter from "react-timeago/lib/formatters/buildFormatter";

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
        <div className="postCenter">
          <p>{choose(t.post.body)} <span>{t.post.likesCounter}</span></p>
        </div>
      </div>
    </div>
  );
}

export default Trending;
