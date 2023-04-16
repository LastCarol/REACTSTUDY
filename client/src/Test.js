import React, { useState } from "react";

/*
1. 컴포넌트의 이름은 반드시 영어 대문자로 시작해야함
2. 컴포넌트는 다른 컴포넌트가 사용할 수 있도록 export 해줘야 함
3. 컴포넌트가 다른 컴포넌트를 사용하려면 import 해야함 
*/

/*
 jsx 
1. 카멜케이스 원칙: ex) className
2. js : {}
3. css, style : {{}} + object 
*/

/*
state 사용 이유 
state의 값이 변경되도 재랜더링 하지 않기 때문  
setState를 html 태그의 on 속성 호출: function(){}
 */

function Test() {
  const [Content, setContent] = useState("");
  const [ContentList, setContentList] = useState([]);
  const onSubmit = () => {
    let tempArr = [...ContentList];
    tempArr.push(Content);
    setContentList([...tempArr]);
    setContent("");
  };

  return (
    <div className="test">
      {ContentList.map((e, idx) => {
        return (
          <div className="mapDiv" key={idx}>
            내용: {e}
          </div>
        );
      })}
      <input
        type="text"
        value={Content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button
        onClick={() => {
          onSubmit();
        }}
      >
        제출
      </button>
    </div>
  );
}

export default Test;
