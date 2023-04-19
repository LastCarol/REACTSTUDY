import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { PostDiv, Post, BtnDiv } from "../../Style/PostDetailCSS";
function Detail(props) {
  let params = useParams();
  let navigate = useNavigate();

  const user = useSelector((state) => state.user);

  const DeleteHandler = () => {
    if (window.confirm("정말로 삭제하시겠습니까?")) {
      let body = {
        postNum: params.postNum,
      };
      axios
        .post("/api/post/delete", body)
        .then((res) => {
          if (res.data.success) {
            alert("게시글이 삭제되었습니다.");
            navigate("/");
          }
        })
        .catch((err) => {
          alert("게시글 삭제에 실패하였습니다.");
        });
    }
  };

  return (
    <PostDiv>
      <Post>
        <h1>{props.PostInfo.title}</h1>
        <h3>{props.PostInfo.author.displayName}</h3>
        {props.PostInfo.image ? (
          <img
            src={`${props.PostInfo.image}`}
            alt=""
            style={{ width: "100%", height: "auto" }}
          />
        ) : null}
        <p>{props.PostInfo.content}</p>
      </Post>
      {user.uid === props.PostInfo.author.uid && (
        <BtnDiv>
          <Link to={`/edit/${props.PostInfo.postNum} `}>
            <button className="edit">수정</button>
          </Link>
          <button className="delete" onClick={() => DeleteHandler()}>
            삭제
          </button>
        </BtnDiv>
      )}
    </PostDiv>
  );
}

export default Detail;
