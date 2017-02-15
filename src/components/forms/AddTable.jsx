import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as actions from 'src/actions/actions'

export class AddTable extends Component {
  //class constructor
  constructor(props) {
    super(props);
    this.saveTable = this.saveTable.bind(this);
  }
  saveTable(Event) {
    Event.preventDefault();
    var {dispatch} = this.props;
    //validate all data we need is present
    var tbname = this.refs.tableName.value;
    var tbcapacity = this.refs.tableSeats.value;
    var tbProp =  this.refs.tableProperty.value;

    if(tbname.length == 0 || tbcapacity.length ==  0 || tbProp.length == 0) {

    } else
    {
      //call start addtable
      //curate data
      var tbObject = {
        propId:tbProp,
        tbname,
        tbcapacity
      }
      //uploadData
      dispatch(actions.startAddTable(tbObject))
    }
  }
  //when mounted load ..
  ComponentDidMount(){

  }
  //draw
  render() {
    var {property} =  this.props;
    var renderForm =  () => {
      if(property.propKey != undefined) {
        return(
          <div>
            <form ref='form' onSubmit={this.saveTable}>
              <input ref='tableName' type='text'/>
              <input ref='tableSeats' type='number'/>
              <input ref='tableProperty' type="hidden" defaultValue={property.propKey}/>
              <input type='submit' className='button' value='Add Table'/>
            </form>
          </div>
        )
      } else {
        return(
          <p>Please Property Details To Add A Table</p>
        )
      }
    }
    return(
      <div>
        {renderForm()}
    </div>)
  }
};

export default connect((state) => {
  return{
    auth: state.auth,
    property: state.property
  }
})(AddTable)
