import React, { useState } from "react";
import firebase from "./firebase";
import ShowCommentsList from "./ShowCommentsList";
import "../css/CommentSection.css";
// import Button from "@material-ui/core/Button";
import AccountCircleRoundedIcon from "@material-ui/icons/AccountCircleRounded";

const CommentSection = ({ movieid }) => {
  const [CommentText, setCommentText] = useState("");

  const TextArea = (e) => {
    setCommentText(e.target.value);
  };

  /* BUTTON CLICK SAVE DATA TO FIREBASE */

  const SendData = () => {
    var a = CommentText.trim();
    if (a !== "") {
      const comment = {
        CommentText: CommentText,
      };

      const data = firebase.database().ref(`${movieid}`);

      data.push(comment).getKey();
      setCommentText("");
    } else {
      alert("Write Something!")
    }
  
  };
  
  /* END BOTTON CLICK */

  return (
    <>
      <div className="CommentSection">
        <div className="inputField">
          <div className="ImgTextSection">
           
              <AccountCircleRoundedIcon
                style={{ fontSize: "6.5rem" }}
                className="TexrtAreaImg"
              />
              <textarea
                type="text"
                id="commentText"
                value={CommentText}
                onChange={TextArea}
                placeholder="Add comment..."
              />
      
            {/* <div className="CommentDiv"></div> */}
          </div>
          <div className="sendDataButton">
            <div className="btn">
              <button onClick={SendData}>Send</button>
            </div>
          </div>
        </div>

        {/* <h1>{CommentText}</h1> */}
        <div className="commentsList">
          <div className="userComments">
            <ShowCommentsList movieid={movieid} />
          </div>
        </div>
      </div>
    </>
  );
};

export default CommentSection;
