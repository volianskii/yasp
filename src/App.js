import './App.css';
import Column from './components/Column/Column';
import NormElement from './components/NormElement/NormElement';

function App() {
  return (
    <div className="App">
      <div className="App-container">
        <p>Количество пройденных тестов "OS Doors"</p>
        <div className="Columns-container">
          <Column name='dev' />
          <Column name='test' />
          <Column name='prod' />
          <NormElement value='100' />
        </div>
      </div>
    </div>
  );
}

export default App;
