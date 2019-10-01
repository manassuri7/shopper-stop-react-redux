import React, {Component} from 'react';
import {connect} from 'react-redux';

class PocketMoney extends Component {

    render() {
        console.log('Pocket money ',this.props);
        return (
            <div>
                <h2 className="text-center">You have $<span className="label label-success"> {this.props.pocketMoney}</span> amount to spend on Grocery today!</h2>
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log(state);
    return {
        pocketMoney: state.pocketMoney
    }
}

export default connect(mapStateToProps, null)(PocketMoney);