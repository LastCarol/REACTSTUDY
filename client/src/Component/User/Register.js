import React, { useState } from "react";
import LoginDiv from "../../Style/UserCSS";

import firebase from "../../firebase";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [PWConfirm, setPWConfirm] = useState("");
  const [Flag, setFlag] = useState(false);
  const [NameCheck, setNameCheck] = useState(false);
  const [NameInfo, setNameInfo] = useState("");

  let navigate = useNavigate();

  const RegisterFunction = async (e) => {
    setFlag(true);
    e.preventDefault();
    if (!(name && email && password && PWConfirm)) {
      return alert("모든 값을 채워주세요!");
    }
    if (password !== PWConfirm) {
      return alert("비밀번호와 비밀번호 확인 값은 같아야 합니다.");
    }
    if (!NameCheck) {
      return alert("닉네임 중복검사를 진행해 주세요!");
    }
    let createdUser = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);

    await createdUser.user.updateProfile({
      displayName: name,
    });

    console.log(createdUser.user);
    let body = {
      email: createdUser.user.multiFactor.user.email,
      displayName: createdUser.user.multiFactor.user.displayName,
      uid: createdUser.user.multiFactor.user.uid,
    };
    axios
      .post("/api/user/register", body)
      .then((res) => {
        setFlag(false);
        if (res.data.success) {
          //회원가입 성공
          navigate("/login");
        } else {
          //회원가입 실패시
          return alert("회원가입에 실패하였습니다.");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const NameCheckFunc = (e) => {
    e.preventDefault();
    if (!name) {
      return alert("닉네임을 입력해주세요.");
    }
    let body = {
      displayName: name,
    };
    axios.post("/api/user/namecheck", body).then((res) => {
      if (res.data.success) {
        if (res.data.check) {
          setNameCheck(true);
          setNameInfo("사용 가능한 닉네임 입니다.");
        } else {
          setNameInfo("사용 불가능한 닉네임입니다.");
        }
      }
    });
  };

  return (
    <LoginDiv>
      <form>
        <label>닉네임</label>
        <input
          type="name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          disabled={NameCheck}
        />
        {NameInfo}
        <button onClick={(e) => NameCheckFunc(e)}>닉네임 중복검사</button>
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
          minLength={8}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <label>패스워드 확인</label>
        <input
          type="password"
          value={PWConfirm}
          minLength={8}
          onChange={(e) => setPWConfirm(e.target.value)}
        />
        <button
          disabled={Flag}
          onClick={(e) => {
            RegisterFunction(e);
          }}
        >
          회원가입
        </button>
      </form>
    </LoginDiv>
  );
}

export default Register;
