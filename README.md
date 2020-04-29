#npx create-react-app begin start

#yarn start

#./src/Hello.js 생성
import React from 'react';
react를 불러와서 사용하겠다.

# class type과 function type component가 존재 먼저 function type component 배움

#props 변수 전달 방법

#조건부 렌더링

#useRef() 직접 dom을 조작

#배열렌더링
UserList.js

#useEffect
컴포넌트가 사라질때,생성될때 하는 작업을 지정할수있음(우선순위가 높다는말 같음)

#useMemo
특정 연산을 필요할때만 할수있게 해줌
다른 작업과 같이 작업되게하는걸 방지

적용할 함수를 useMemo로 감싸줌 ex

#useCallback
이전에 만들었던 함수를 재사용 하는 방법
useMemo랑 비슷함
props가 바뀌지 않았다면virtu미Dom에 새로 그리는게 아니라
이전에 만들어 놨던 결과물을 재사용 할수있게 만들수있음

#react dev tools

#react.memo
props가 바뀌었을때만 사용함
componenet에서 렌더링이 불필요할때 이전에 렌더링했던 상태를 사용하는 방법

연산된 값을 재사용하려면 useMemo
특정함수를 재사용하려면 useCallback
컴포넌트의 렌더링된 결과물을 재사용하려면 React.memo

#useReducer
상태를 업데이트 해줌
