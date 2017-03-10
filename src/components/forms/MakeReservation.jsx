import React, {Component} from 'react'
import {connect} from 'react-redux'
import {startAddReservation} from 'src/actions/reservationActions'

export class MakeReservation extends Component {
  constructor(props) {
    super(props);
    this.submitReservation = this.submitReservation.bind(this);
  }
  submitReservation(Event) {
    //prevent page refresh
    Event.preventDefault();
    //get data from state.
    var {property, auth, dispatch} =  this.props;
    var guestName = this.refs.resOwner.value;
    var guestContact = this.refs.resContact.value;
    var guestTime = this.refs.resTime.value;
    var resTable = this.refs.resTable.value;
    var resOwner = auth.uid;
    var resProperty = property.propKey;

    //construct the object we need to submit
    if(property.propKey != undefined && auth.uid != undefined) {

      //validate and submit
      if(guestName.length == '' || guestContact.length == 0 || guestTime.length == 0) {
        console.log('invalid data');
      }
      else
      {

          var reservation =  {
            name: guestName,
            tbKey: resTable,
            contact: guestContact,
            time: guestTime,
            propKey: resProperty,
            resMaker: resOwner
          }

          //lets then dispatch start add reservation
          dispatch(startAddReservation(reservation));
        }
    }
  }
  render() {
    //TODO use select for tables
    var {tables} = this.props;
    return(
      <div>
        <p>Make Reservation</p>
        <form ref="form" onSubmit={this.submitReservation}>
          <div>
            <label>Guest Name*</label>
            <input ref="resOwner" type="text"/>
          </div>
          <div>
            <label>Time*</label>
            <input ref="resTime" type="datetime-local"/>
          </div>
          <div>
            <label>Dietary Concerns</label>
            <textarea ref="resDiet" rows="5"></textarea>
          </div>
          <div>
            <label>Choose Table</label>
            <select ref="resTable">{tables.map((table) =>{
                return(<option key={table.tbKey} value={table.tbKey}>{table.tbname}</option>)
              })}</select>
          </div>
          <div>
            <label>Number of Guests*</label>
            <input type="text" ref="resAmount"/>
          </div>
          <div>
            <label>Contact</label>
            <input type="text" ref="resContact"/>
          </div>
          <div>
            <p>All fields marked by * are required please</p>
          </div>
          <div>
            <input type="submit" className="button hollow"/>
          </div>
        </form>
      </div>
    )
  }
};
export default connect((state) => {
  //collect property and user from state
  return {
    auth: state.auth,
    property: state.property,
    tables: state.tables
  }
}) (MakeReservation);
