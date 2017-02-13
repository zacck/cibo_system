import React,{Component} from 'react'
import {connect} from 'react-redux'
import firebase,{firebaseRef} from 'src/firebase/index'
import {hashHistory} from 'react-router'

export class PermComponent extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    //get user object from state
    var {auth} = this.props;
    //check that user doesnt exist
    firebaseRef.child(`users/${auth.uid}`).once('value').then((userShot) => {
      if(userShot.val() == null) {
        var userFanOut = {}
        userFanOut[`/users/${auth.uid}`] = auth;
        return firebaseRef.update(userFanOut).then(() => {
          console.log('regod!');
          hashHistory.push('/app');
        })
      }
      else {
        hashHistory.push('/app');
      }
    })
    //onboard
    return(<div></div>)
  }
}
export default connect((state) => {
  return {
    auth: state.auth
  }
})(PermComponent);
