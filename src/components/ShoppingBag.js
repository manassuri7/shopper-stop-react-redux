import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addGroceryById,removeGroceryById,addPocketMoneyById} from '../actions';

class ShoppingBag extends Component {

    displayShoppingBag(){
        if(this.props.shoppingBag.length>0){
            return(
                <ul className="list-group">
                    {this.props.shoppingBag.map((item) => {
                        return <li onClick={() =>{ this.props.removeGroceryById(item.id),this.props.addPocketMoneyById(item.id)}} className="list-group-item"
                                   key={item.id}><b>{item.name}</b> <label className="label label-info">
                            ${item.cost}</label> - <label className="label label-primary">{item.weight}mg</label> <label
                            className="label label-warning">{item.calories} kcal</label></li>
                    })}
                </ul>
            )
        }else{
            return(
                <ul>
                    <li className="list-group-item">No items added to the bag!</li>
                </ul>
            )
        }

    }

    render() {
        console.log("Shopping bag props", this.props);
        return (
            <div className="col-md-4">
                <h4 className="text-center">ShoppingBag(click to remove)</h4>
                {this.displayShoppingBag()}
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log(state);
    return {
        shoppingBag: state.shoppingBag
    }
}

export default connect(mapStateToProps, {addGroceryById,removeGroceryById,addPocketMoneyById})(ShoppingBag);