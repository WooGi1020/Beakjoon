==Props Drilling==(복잡한 계층 구조에서 부모Props를 받기위해 자식으로 끊임없이 내려가는 것) 방지

- Context
기존의 부모 컴포넌트의 Props들을 Context 객체에 넣어 자식 이상의 요소로 바로 전달
```JSX
// ex)
// TodoContext.jsx
import { createContext } from "react";

export const TodoContext = createContext();

// App.jsx
return (
    <div className="App">
      <Header></Header>
      <!-- 전달할 데이터를 value 객체에 저장(데이터를 전달할 자식요소를 감싸는 형태) -->
      <TodoContext.Provider value={{ 
        todos, 
        onCreate, 
        onUpdate, 
        onDelete
      }}>
        <TodoEditor 
        onCreate = {onCreate}></TodoEditor>
        <TodoList 
        todos={todos} 
        onUpdate={onUpdate} 
        onDelete={onDelete}></TodoList>
      </TodoContext.Provider>
    </div>
  )
```

⏩ 사용방법
```JSX
import { TodoContext } from '../TodoContext';

// useContext hook의 첫번째 인수로 전달할 데이터를 넣음
const {onCreate} = useContext(TodoContext);
```

기존의 전달받던 props나 태그의 함수 로직은 전부 제거해주고 적용

- 최적화를 위한 Context 분리 기법
기본적으로 useContext 또한 ==리액트의 컴포넌트==이므로, 전달받는 값이 변경 시 리렌더가 필요
-> ==변경될 수 있는 값==과 ==변경되지 않는 값==을 따로 설정하여 Context 객체에 할당
```JSX
// TodoContext.jsx
import { createContext } from "react";

export const TodoStateContext = createContext();
export const TodoDispatchContext = createContext();
```
-> Context를 두개로 만들어, 리렌더될 값과 되지 않을 값을 따로 구분

```JSX
// App.jsx
// 리렌더 방지를 위해 변경되지 않는 값은 객체에 따로 저장하여 전달(useMemo 이)
const memoizedDispatches = useMemo(() => {
    return {
      onCreate,
      onUpdate,
      onDelete
    }
  }, [])

// 나눈 Context를 기반으로 각각의 태그를 지정, value 값또한 따로 작성
return (
    <div className="App">
      <Header></Header>
      <TodoStateContext.Provider value = {todos}> 
        <TodoDispatchContext.Provider
        value = {memoizedDispatches}>
          <TodoEditor />
          <TodoList />
        </TodoDispatchContext.Provider>
      </TodoStateContext.Provider>
    </div>
  )
```

```JSX
// TodoEditor.jsx
import { TodoDispatchContext } from '../TodoContext';
// 변경되지 않는 값인 onCreate를 받아옴
const {onCreate} = useContext(TodoDispatchContext);

// TodoItem.jsx
import { TodoDispatchContext } from '../TodoContext';
// 변경되지 않는 값인 onDelete, onUpdate를 받아옴
const {onDelete, onUpdate} = useContext(TodoDispatchContext);

// TodoList.jsx
import { TodoStateContext } from '../TodoContext';
// 변경 가능한 값인 todos를 받아옴
const todos = useContext(TodoStateContext);
```

