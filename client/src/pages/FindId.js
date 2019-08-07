// dependencies
import react, {Component} from 'react';

// import API
import API from "../services.API";

class FindId extends Component {
    state = {
        books: [],
        message: ''
    }
    componentDidMount = () => {
        // what happens when we load
        this.getBookById()
    };
    getBookById = () => {
        // do the api call by id
        API.findById().then(res => {
            this.setState({
                books: res.data
            })
        })
    };
    render() {
        return (
            <div>
                {this.state.books.map(oneBook => {
                    <div>
                        <p>{oneBook.title}</p>
                        <p>{oneBook.author}</p>
                    </div>
                })}
            </div>
        )
    }
}