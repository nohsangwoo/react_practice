import React, { useRef, useMemo, useCallback, useReducer } from 'react';
import Hello from './Hello';

import './App.css';
import Wrapper from './Wrapper';
import Counter from './Counter';
import InputSample from './InputSample';
import UserList from './UserList';
import CreateUser from './CreateUser';
import CounterWithReduce from './counterWithReducer';

function countActiveUsers(users) {
  console.log('활성 사용자 수를 세는중...');
  return users.filter((user) => user.active).length;
}

const initialState = {
  inputs: {
    username: '',
    email: '',
  },

  users: [
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com',
      active: true,
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com',
      active: false,
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com',
      active: false,
    },
  ],
};

function reducer(state, action) {
  switch (action.type) {
    case 'CHANGE_INPUT':
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.name]: action.value,
        },
      };
    case 'CREATE_USER':
      return {
        inputs: initialState.inputs,
        users: state.users.concat(action.user),
      };
    case 'TOGGLE_USER':
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.id ? { ...user, active: !user.active } : user
        ),
      };
    case 'REMOVE_USER':
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.id),
      };
    default:
      return state;
  }
}
function App() {
  const name = 'React';
  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: 24,
    padding: '1rem',
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const nextId = useRef(4);

  const { users } = state;
  const { username, email } = state.inputs;

  const onChange = useCallback((e) => {
    const { name, value } = e.target;
    dispatch({
      type: 'CHANGE_INPUT',
      name,
      value,
    });
  }, []);

  const onCreate = useCallback(() => {
    dispatch({
      type: 'CREATE_USER',
      user: {
        id: nextId.current,
        username,
        email,
      },
    });
    nextId.current += 1;
  }, [username, email]);

  const onToggle = useCallback((id) => {
    dispatch({
      type: 'TOGGLE_USER',
      id,
    });
  }, []);

  const onRemove = useCallback((id) => {
    dispatch({
      type: 'REMOVE_USER',
      id,
    });
  }, []);

  // useMemoEx
  // [users] <-이걸 deps라고 하는데, 이 값이 바뀌어야만
  // countActiveUsers를 연산해주겠다 라는뜻
  // 리렌더링시 불필요한 작업을 최소화함(최적화)
  const count = useMemo(() => countActiveUsers(users), [users]);
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
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <div>활성 사용자 수: {count}</div>
      <hr />
      <CounterWithReduce />
    </Wrapper>
  );
}

export default App;
