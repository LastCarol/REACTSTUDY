import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginDiv from "../../Style/UserCSS";

function Login() {
  const [Email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let navigate = useNavigate();
  return (
    <LoginDiv>
      <form>
        <label>이메일</label>
        <input
          type="email"
          value={Email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <label>비밀번호</label>
        <input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button>로그인</button>
        <button
          onClick={(e) => {
            e.preventDefault();
            navigate("/register");
          }}
        >
          회원가입
        </button>
      </form>
    </LoginDiv>
  );
}

export default Login;
