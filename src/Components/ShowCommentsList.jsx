import React, { useEffect, useState } from "react";
import firebase from "./firebase";
import "../css/ShowCommentsList.css";
import imagen from '../images/userimg.png';




const ShowCommentsList = ({ movieid }) => {
  const [DatabaseValue, setDatabaseValue] = useState();

  useEffect(() => {
    const showC = firebase.database().ref(`${movieid}`);
    showC.on("value", (snapshot) => {
      const values = snapshot.val();
      const list = [];
      for (var id in values) {
        list.push(values[id]);
      }

      setDatabaseValue(list);
    });
  }, [movieid]);

  console.log(DatabaseValue);

  // CurrentValue.CommentText
  return (
    <>
      {DatabaseValue
        ? DatabaseValue.map((CurrentValue) => {
            return (
              <div className="userCommentImage">
                <img src={imagen} alt={CurrentValue.name} />
                <span className="CommentList">{CurrentValue.CommentText}</span>
              </div>
            );
          })
        : ""}
    </>
  );
};

export default ShowCommentsList;
