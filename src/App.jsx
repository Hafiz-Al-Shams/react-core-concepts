import './App.css'
import Counter from './Counter';
import Friends from './Friends';
import Team from './Team';
import Users from './Users';

function App() {

  function handleClick() {
    alert('button clicked');
  }

  const handleClick2 = () => {
    alert('button 2 clicked');
  }

  const addToFive = (num) => {
    alert(num + 5);
  }



  return (
    <>
      <h2>React Core Concepts Part2</h2>

      <Friends></Friends>

      <Users></Users>

      <Team></Team>

      <Counter></Counter>














      {/* normally html e ja kora hoto=  <button onclick="handleClick()">click me</button> */}

      {/* system-1 */}
      <button onClick={handleClick}>click me</button>

      {/* system-2 */}
      <button onClick={handleClick2} style={{ margin: '10px' }}>click2</button >

      {/* system-3 */}
      <button onClick={() => { alert('third clicked') }}>third</button>

      {/* system-4 */}
      <button onClick={() => addToFive(3)} style={{ margin: '10px' }}>four</button>
    </>
  )
}

export default App
