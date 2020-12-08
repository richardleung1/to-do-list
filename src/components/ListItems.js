function ListItem(props) {
    console.log(props)
    return (
        <li>{props.doThis}</li>
    )
}

// class ListItem extends Component {
//     console.log(props)
//     render() {
//         return (
//             <li>{props.doThis}</li>
//         )
//     }
// }

export default ListItem;

