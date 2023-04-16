import React, { useState } from "react";
import LoginDiv from "../../Style/UserCSS";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [PWConfirm, setPWConfirm] = useState("");

  return (
    <LoginDiv>
      <form>
        <label>이름</label>
        <input
          type="name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <label>이메일</label>
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <label>패스워드</label>
        <input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <label>패스워드 확인</label>
        <input
          type="password"
          value={PWConfirm}
          onChange={(e) => setPWConfirm(e.target.value)}
        />
        <button>회원가입</button>
      </form>
    </LoginDiv>
  );
}

export default Register;
