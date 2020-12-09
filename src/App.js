import logo from './logo.svg';
import './App.css';
import ListItem from './components/ListItems';
import MyList from './components/myList';

const theList = ['Buy food', 'Make food', 'Sell food']
// const listItems = list.map((action, idx) => {
//   return <ListItem doThis={action} />
// })

function App() {
  return (
    <div>
      <MyList theList={theList}/>
    </div>
  );
}

export default App;
