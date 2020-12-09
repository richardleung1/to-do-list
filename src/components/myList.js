import React, { Component } from 'react';
import ListItem from '../components/ListItems';

class MyList extends Component {

    constructor(props) {
        super()
        this.state = {
            toDoItemArray: props.theList,
            newItem: ""
        }
    }

    clearList(e) {
        this.setState({
            toDoItemArray: []
        })
    }

    newItemChange = (e) => {
        const newValue = e.target.value
        this.setState({ newItem: newValue})
    }

    addItem = (e) => {
        e.preventDefault()
        this.props.theList.push(this.state.newItem)
        this.setState({
            newItem: "",
            toDoItemArray: this.props.theList
        })
    }

    render() {

        let todoItems = this.state.toDoItemArray.map((item, index) => (
            <ListItem doThis={item} key={index} />
        ))

        return (
            <div>
                <h1>Things I should stop procrastinating:</h1>
                <ul>
                    {todoItems}
                </ul>

                <form>
                    <input type="text"
                        placeholder="Type an item here"
                        onChange={(e) => this.newItemChange(e)}
                        value={this.state.newItem}
                    />
                    <button onClick={(e) => this.addItem(e)}>Add it!</button>
                </form>
                
                <button onClick={(e) => this.clearList(e)}>Finished the list!</button>
            </div>
        )
    }
}

export default MyList;