import './App.css';
import data from "./data"
import Card from './components/Card';

function App() {
  const cards_data = data.cards.map((elem, idx) => {
    return (
      <Card 
        img={elem.img}
        title={elem.title}
        video={elem.video}
        slides={elem.slides}
        key={idx}
      />
    )
  })


  return (
    <div className='App'>
      <h1 className='App-header'>Talks & Conferences</h1>
      <div className='card-container'>
        {cards_data}
      </div>
    </div>
  );
}

export default App;
