import React from 'react';
import Hello from './Hello';

import './App.css';
import Wrapper from './Wrapper';
import Counter from './Counter';
import InputSample from './InputSample';
import UserList from './UserList';

function App() {
  const name = 'react';
  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: 24,
    padding: '1rem',
  };
  return (
    // fragment: 비어있는 이름을 가지고있는 태그
    // div를 사용해서 css가 꼬일때 또는 맘에 안들대 fragment태그를 이용
    // fragment를 사용하면 실제로 div로 감싸고 있는 태그가 존재하지 않음
    // babeljs.io를 사용해서 jsx를 javascript언어로 해석해줌
    // 변수사용을 원한다면 {}안에 변수를 넣어줌
    <Wrapper>
      {/* props 전달방법 */}
      <Hello name="react" color="red" />
      <Hello color="red" />
      <div style={style}>{name}</div>
      <div className="gray-box"></div>
      <Hello name="react" color="red" isSpecial={true} />
      <Counter />
      <InputSample />
      <UserList />
    </Wrapper>
  );
}

export default App;
