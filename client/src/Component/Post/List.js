import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { ListDiv, ListItem } from "../../Style/ListCSS";
function List(props) {
  const [PostList, setPostList] = useState([]);
  useEffect(() => {
    axios
      .post("/api/post/list")
      .then((res) => {
        if (res.data.success) {
          setPostList([...res.data.postList]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <ListDiv>
      {PostList.map((e, idx) => {
        return (
          <ListItem key={idx}>
            <Link to={`/post/${e.postNum}`}>
              <p className="title">{e.title}</p>
              <p>{e.content}</p>
            </Link>
          </ListItem>
        );
      })}
    </ListDiv>
  );
}

export default List;
