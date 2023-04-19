import React, { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
function RepleUpload(props) {
  const [Reple, setReple] = useState;
  const user = useSelector((state) => state.user);

  const submitHandler = (e) => {
    e.preventDefault();

    let body = {
      reple: Reple,
      uid: user.uid,
    };
    axios.post("/api/reple.submit", body);
  };
  return (
    <div>
      <form>
        <input
          type="text"
          value={Reple}
          onChange={(e) => {
            setReple(e.target.value);
          }}
        />
        <button onClick={(e) => submitHandler(e)}>등록</button>
      </form>
    </div>
  );
}

export default RepleUpload;
