import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'

export class CurrentBill extends Component {
  constructor(props) {
    super(props);
    this.addItem = this.addItem.bind(this);
    this.clearBill  = this.clearBill.bind(this);
  };
  addItem(e){

  }

  clearBill(e) {
    e.preventDefault();
  }
  render() {
    var {currBill, bills} = this.props;
    var currBillItems = () => {
      if(currBill == '') {
        return(<p className="no-bill text-center"> Please Select a Bill for Details</p>)
      }
      //pick current bill from state
      var myBill = bills.find((billItem) => {
        return billItem.id == currBill
      })
      //check items
      if(myBill.items != undefined) {
        //list items
      } else {
        //if no items message
        return(
          <div>
            <p className="no-orders text-center"> Please take orders</p>
            <div className="text-center ">
              <form ref='form' onSubmit={this.addItem}>
                <div>
                  <label>Order Item</label>
                  <input type='text' ref='orderID'/>
                </div>
                <div>
                  <button className="button ">Add Item</button>
                </div>
              </form>
            </div>
            <div>
              <button className="button alert">Clear</button>
            </div>
          </div>
        )
      }
    }
    return(
      <div className="current-bill">
        <div className="text-center">
           <p>Items</p>
        </div>
        <div>
          {currBillItems()}
        </div>
      </div>
    )
  }
};

//define expected props
CurrentBill.propTypes  = {
  currBill: PropTypes.string,
  bills: PropTypes.array
};

//define default props
CurrentBill.defaultProps = {
  currBill: '',
  bills: []
}
export default connect((state) => {
  return {
    currBill: state.currBill,
    bills: state.bills
  }
})(CurrentBill);
