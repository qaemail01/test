import React from 'react';
import ReactDOM from 'react-dom';

class ShoppingList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {text: 'type here'};
        this.items = [{id: "1", text: "Instagram"}, {id:"2", text:"WhatsApp"}, {id:"3", text:"Oculus"}];
        this.handleChange = this.handleChange.bind(this);
        this.getText = this.getText.bind(this);
    }

    handleChange(e) {
        this.setState({text : e.target.value});
    }

    getText() {
        return this.state.text === 'type here' ? 'John Doe' : this.state.text;
    }

    render() {
        return (
            <div className="shopping-list">
                <Timer/>
                <h1>Shopping List for {this.getText()}</h1>
                <ul>
                    {this.items.map(item => (
                        <li key={item.id}>{item.text}</li>
                    ))}
                </ul>
                <br/>
                <label htmlFor="new-todo">
                    What needs to be done?
                </label>
                <br/>
                <input
                    id="new-todo"
                    onChange={this.handleChange}
                    value={this.state.text}/>
            </div>
        );
    }
}

class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { seconds: 0 };
    }

    tick() {
        this.setState(prevState => ({
            seconds: prevState.seconds + 1
        }));
    }

    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <div>
                Seconds: {this.state.seconds}
            </div>
        );
    }
}

ReactDOM.render(<ShoppingList/>, document.getElementById('app'));
