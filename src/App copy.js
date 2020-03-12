import React, { Component } from 'react';
import './App.css';
import Deck from './Deck';
import Hand from './Hand';

class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            deck: new Deck(),
            ready: false
        };
    }

    componentDidMount() {
        this.state.deck.shuffle();
        this.setState({ ready: true });
    }

    render() {
        if (this.state.ready) {
            const cards = [
                this.state.deck.deal(),
                this.state.deck.deal(),
                this.state.deck.deal(),
                this.state.deck.deal(),
                this.state.deck.deal()
            ]
            return (
                <div>
                    <Hand cards={cards} />
                </div>
            )
        } else {
            return <div></div>
        }
    }
}

export default App;
