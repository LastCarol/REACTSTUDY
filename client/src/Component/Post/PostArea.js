import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import { SpinnerDiv } from "../../Style/PostDetailCSS";
import axios from "axios";

import Detail from "./Detail";
import RepleArea from "../Reple/RepleArea";

function PostArea() {
  const [PostInfo, setPostInfo] = useState({});
  const [Flag, setFlag] = useState(false);
  const params = useParams();
  useEffect(() => {
    let body = {
      postNum: params.postNum,
    };
    axios
      .post("/api/post/detail", body)
      .then((res) => {
        if (res.data.success) {
          setPostInfo(res.data.post);
          setFlag(true);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      {Flag ? (
        <>
          <Detail PostInfo={PostInfo} />
          <RepleArea />
        </>
      ) : (
        <SpinnerDiv>
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </SpinnerDiv>
      )}
    </div>
  );
}

export default PostArea;
