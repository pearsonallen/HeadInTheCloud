import './App.css';

function App() {

  const setValue = (a) => {
    fetch(process.env.REACT_APP_API + '/SendData?value=' + a);
  }

  return (
    <div className="App">
      <h1>Head In The Clouds</h1>
      <h2>Inspired By #art channel's weekly prompt:</h2>
      <h2>Sky</h2>
      <button onClick={() => setValue(1)}>Blue Head</button>
      <button onClick={() => setValue(2)}>Red Head</button>
      <button onClick={() => setValue(3)}>Green Head</button>
    </div>
  );
}

export default App;
