import React, {Component} from 'react';
import '../App.css';
import Grocery from "./Grocery";
import ShoppingBag from "./ShoppingBag";
import Stats from "./Stats";
import PocketMoney from "./PocketMoney";

class App extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="jumbotron text-center">
                        <h1>Shoppers Stop</h1>
                        <p>Where you can get your daily products</p>
                    </div>
                </div>
                <div className="row">
                   <PocketMoney/>
                    <Grocery/>
                    <ShoppingBag/>
                    <Stats/>
                </div>
            </div>
        );
    }
}

export default App;
