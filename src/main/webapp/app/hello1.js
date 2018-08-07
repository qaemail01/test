import React from 'react';
import ReactDOM from 'react-dom';

class ShoppingList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {text: 'type here'};
        this.items = [{id: "1", text: "Instagram"}, {id:"2", text:"WhatsApp"}, {id:"3", text:"Oculus"}];
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({text : e.target.value});
    }

    render() {
        return (
            <div className="shopping-list">
                <h1>Shopping List for {this.state.text}</h1>
                <ul>
                    {this.items.map(item => (
                        <li key={item.id}>{item.text}</li>
                    ))}
                </ul>
                <input
                    id="new-todo"
                    onChange={this.handleChange}
                    value={this.state.text}
                />
            </div>
        );
    }
}

ReactDOM.render(<ShoppingList/>, document.getElementById('app'));