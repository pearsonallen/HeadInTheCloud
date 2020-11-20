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
      <button onClick={() => setValue(1)}>Head 1</button>
      <button onClick={() => setValue(2)}>Head 2</button>
      <button onClick={() => setValue(3)}>Head 3</button>
    </div>
  );
}

export default App;
