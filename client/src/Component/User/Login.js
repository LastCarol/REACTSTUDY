import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoginDiv from "../../Style/UserCSS";
import { useSelector } from "react-redux";
import firebase from "../../firebase";

function Login() {
  const [Email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [ErrorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  const user = useSelector((state) => state.user);

  const SignInFunction = async (e) => {
    e.preventDefault();
    if (!(Email && password)) {
      return alert("모든 값을 채워주세요.");
    }
    try {
      await firebase.auth().signInWithEmailAndPassword(Email, password);
      navigate("/");
    } catch (err) {
      if (err.code === "auth/user-not-found") {
        setErrorMsg("존재하지 않는 이메일입니다.");
      } else if (err.code === "auth/wrong-password") {
        setErrorMsg("비밀번호가 일치하지 않습니다.");
      } else {
        setErrorMsg("로그인이 실패하였습니다.");
      }
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setErrorMsg("");
    }, 5000);
  }, [ErrorMsg]);

  useEffect(() => {
    if (user.accessToken) {
      console.log(user.accessToken);
    }
  }, []);

  return (
    <LoginDiv>
      <form>
        <label>이메일</label>
        <input
          type="email"
          value={Email}
          required
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
        {ErrorMsg !== "" && <p>{ErrorMsg}</p>}
        <button
          onClick={(e) => {
            SignInFunction(e);
          }}
        >
          로그인
        </button>
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
