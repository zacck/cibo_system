import React, {Component} from 'react'
import {connect} from 'react-redux'
import MakeReservation from 'MakeReservation'
import Availability from 'Availability'
import CurrentBookings from 'CurrentBookings'


export class Reservations extends Component {
  constructor (props) {
    super(props);
  }

  render() {
    const { swaptabs } = this.props;
    return(
      <div className="row">
        <div className="columns small-12 large-6 medium-6">
          <MakeReservation/>
        </div>
        <div className="columns small-12 large-6 medium-6">
          <div className="row">
            <Availability/>
          </div>
          <div className="row">
            <CurrentBookings swaptabs={swaptabs}/>
          </div>
        </div>
      </div>
    )
  }
}

export default Reservations;
