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
        code={elem.code}
        key={idx}
      />
    )
  })


  return (
    <div className='App'>
      <h1 className='App-header'>
        <p style={{margin: "0px"}}>Talks & </p>
        <p style={{margin: "0px"}}>Conferences<span className='h-small'> By Ahmed Saed</span></p>
      </h1>
      <div className='card-container'>
        {cards_data}
      </div>
    </div>
  );
}

export default App;
