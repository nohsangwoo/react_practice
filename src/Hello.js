import React from 'react';

// 비구조할당으로 넘겨받을수있음
// 또는 그냥 props로 받고 props.color  ,props.name으로 사용가능
function Hello({ color, name, isSpecial }) {
  return (
    // 자바스크립트 값은 {}중괄호로 감싸고 그것을 jsx 문법에서 또 중괄호로 감싼다
    <div
      style={{
        color,
      }}
    >
      {isSpecial ? <b>특별한</b> : <b>안특벼한</b>}
      {isSpecial && <b>*</b>}
      안녕하세요{name}
    </div>
  );
}

// 넘겨받은 props의 값이 없거나 설정안됐을경우 기본값 설정
Hello.defaultProps = {
  name: '이름없음',
};

// Hello라는 component를 내보내 주겠다.
export default React.memo(Hello);
