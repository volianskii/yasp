import './App.css';
import Column from './components/Column/Column';
import DescriptionElement from './components/Description/DescriptionElement';
import NormElement from './components/NormElement/NormElement';
import { useEffect, useState } from 'react';
import Sum from './components/Sum/Sum';
import dots from "./img/icons/three_dots.svg";

function App() {
  const [data, setData] = useState({});
  const [firstDiff, setFirstDiff] = useState(0);
  const [secondDiff, setSecondDiff] = useState(0);

  const getData = async () => {
    const response = await fetch(
      "https://rcslabs.ru/ttrp1.json").then((response) => response.json());
    setData(response);
  }
  useEffect(() => {
    getData();
    if (data.dev !== undefined) {
      setFirstDiff((data.test.front + data.test.back + data.test.db) - (data.dev.front + data.dev.back + data.dev.db));
      setSecondDiff((data.prod.front + data.prod.back + data.prod.db) - (data.test.front + data.test.back + data.test.db));
    }
  }, [data])

  return (
    data.dev === undefined ? <div><p>Loading</p></div> :
      <div className="App">
        <div className="App-container">
          <header>
            <p>Количество пройденных тестов "{data.title}"</p>
            <img src={dots} alt='more'></img>
          </header>

          <main>
            <div className="Sum-section">
              <Sum data={firstDiff} />
              <Sum data={secondDiff} />
            </div>
            <div className="Columns-container">
              <Column name='dev' data={data.dev} />
              <Column name='test' data={data.test} />
              <Column name='prod' data={data.prod} />
              <NormElement value={data.norm} />
            </div>
          </main>

          <footer>
            <DescriptionElement color='#4AB6E8' text='Клиентская часть' />
            <DescriptionElement color='#AA6FAC' text='Серверная часть' />
            <DescriptionElement color='#E85498' text='База данных' />
          </footer>
        </div>
      </div>
  );
}

export default App;
