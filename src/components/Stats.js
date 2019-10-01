import React, {Component} from 'react';
import {connect} from 'react-redux';

class Stats extends Component {
    render() {
        console.log('from the stats ',this.props);
        return (
            <div className="col-sm-3 col-md-3">
                <h4>Stats Items</h4>
                <ul className="list-group">
                    {this.props.shoppingBag.map((item) => {
                        return <li onClick={() => this.props.addGroceryById(item.id)} className="list-group-item"
                                   key={item.id}><b>Cost {this.cost()}</b> <br/> <b>Calories {this.calories()} kcal</b> <b>Weight {this.weight()}</b></li>
                    })}
                </ul>
            </div>
        )
    }
    cost(){
        let totalCost=0;
        this.props.shoppingBag.forEach(item=>totalCost+=item.cost);
        return totalCost;
    }
    calories(){
        let totalCalories=0;
        this.props.shoppingBag.forEach(item=>totalCalories+=item.calories);
        return totalCalories;
    }
    weight(){
        let totalWeight=0;
        this.props.shoppingBag.forEach(item=>totalWeight+=item.weight);
        return totalWeight;
    }
}

function mapStateToProps(state) {
    console.log(state);
    return {
        shoppingBag: state.shoppingBag
    }
}

export default connect(mapStateToProps,null)(Stats);