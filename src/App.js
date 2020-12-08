import logo from './logo.svg';
import './App.css';
import ListItem from './components/ListItems';

const list = ['Buy food', 'Make food', 'Sell food']
const listItems = list.map((action, idx) => {
  return <ListItem doThis={action} />
})

function App() {
  return (
    <div>
      <header>My List</header>
      <div>
        <ul>
          <ListItem doThis={'Buy food'} />
          <ListItem doThis={'Make food'} />
          <ListItem doThis={'Sell food'} />
          {listItems}
        </ul>
      </div>
    </div>
  );
}

export default App;
