import React, { useEffect } from 'react';

const User = React.memo(({ user, onRemove, onToggle }) => {
  useEffect(() => {
    console.log('컴포넌트가 화면에 나타남');
    console.log(user);
    return () => {
      console.log('컴포넌트가 화면에서 사라짐');
    };
  }, [user]);
  return (
    <div>
      <b
        style={{
          cursor: 'pointer',
          color: user.active ? 'green' : 'black',
        }}
        onClick={() => onToggle(user.id)}
      >
        {user.username}
      </b>
      &nbsp;
      <span>({user.email})</span>
      <button onClick={() => onRemove(user.id)}>삭제</button>
    </div>
  );
});

function UserList({ users, onRemove, onToggle }) {
  return (
    <div>
      {users.map((user) => (
        <User
          user={user}
          key={user.id}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
}
//prevProps랑 nextProps의 users를 비교해서 같다면 리렌더링 하지 않겠다.
export default React.memo(
  UserList,
  (prevProps, nextProps) => prevProps.users === nextProps.users
);
