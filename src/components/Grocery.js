import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addGroceryById,removePocketMoneyById} from '../actions';

class Grocery extends Component {
    render() {
        console.log("this.props ", this.props);
        return (
            <div className="col-md-4">
                <h4 className="text-center">Grocery Items(click to add)</h4>
                <ul className="list-group">
                    {this.props.grocery.map((item) => {
                        return <li onClick={() =>{this.props.addGroceryById(item.id);this.props.removePocketMoneyById(item.id)}} className="list-group-item"
                                   key={item.id}><b>{item.name}</b> <label className="label label-info">
                            ${item.cost}</label> - <label className="label label-primary">{item.weight}mg</label> <label
                            className="label label-warning">{item.calories} kcal</label></li>
                    })}
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log(state);
    return {
        grocery: state.grocery
    }
}

export default connect(mapStateToProps, {addGroceryById,removePocketMoneyById})(Grocery);