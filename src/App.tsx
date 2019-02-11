import * as React from 'react';
import Counter from './components/Counter';
import Profile from './components/Profile';
import TodoList from './components/TodoList';
class App extends React.Component {
  public render() {
    return (
      <div>
        <Profile
          name="이형준"
          job="바보"
        />
        <Counter counter = {1} />
        <TodoList z ={1}/>
      </div>
    );
  }
}

export default App;