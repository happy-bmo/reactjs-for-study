import './App.css';
import { useState } from 'react';
import TodoList from './Components/TodoList';
import Content from './Components/Content'
import Gift from './Components/Gift';
import Info from './Components/Info';
import Count from './Components/Count';

function App() {
  const [show, setShow] = useState(true)

  
  return (
    <div className="App">
      <Count/>
      <Info/>
      <Gift/>
      <TodoList/>
      <button onClick={() => setShow(!show)}>Toggle</button>
      {show && <Content/>}
    </div>
  );
}

export default App;
