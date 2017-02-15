import * as reducers from 'reducers'
import expect from 'expect'
var df = require('deep-freeze-strict')
describe('Reducers', () => {
  //check that reducers exist
  it('should exist', () => {
    expect(reducers).toExist();
  });


  //check if Auth Reducer works
  describe('AuthenticationReducer', () => {
    //check if the UID is set on login
    it('should set userdata onLogin',  () => {
      var user = {
        name: "Zacck "
      }
      //make an action
      var loginAction = {
        type: 'LOGIN',
        user
      };

      //call the reducer with the action
      //deep freeze state and action to ensure purity
      var result = reducers.authReducer(df(''), df(loginAction));

      //check that the result is what we expect
      expect(result).toEqual(loginAction.user)
    });

    //check if recorded information is cleared on logout
    it('should clear User info onLogout', () => {
      //sketch an action
      var logoutAction = {
        type: 'LOGOUT'
      };

      //call the reducer use deep freese
      var result = reducers.authReducer(df({uid: 12345}),df(logoutAction));

      //check the result for what we expect
      expect(result).toEqual({});
    });
  });

  //test propertyReducer
  describe('propertyReducer', () => {
    it('should set propertydata on addProperty', () => {
      var property = {
        name: "Best Western Cape Suites Hotel",
        address: "Roeland Street",
        coords:"lat, long",
        id:12345,
        avatar: 'image here'
      }
      //add property action
      var addProperty =  {
        type: 'ADD_PROPERTY',
        property
      };

      //call reducer and use deep freeze to check purity
      var result = reducers.propertyReducer(df({}), df(addProperty));

      //check that our action was consumed
      expect(result).toEqual(addProperty.property);
    });

    //test clear action
    it('should clear propertydata onclear', () => {
      //mock an action
      var clearProperty ={
        type: 'CLEAR_PROPERTY'
      };

      //call reducer
      var result = reducers.propertyReducer(df({}), df(clearProperty));

      //check result to see if our reducers worked
      expect(result).toEqual({});
    });

  })

  //test tablesReducer
  describe('tablesReducer', () => {
    it('should add a new table on addTable', () => {
      //mock the table
      var table = {
        tbname: 7,
        tbcapacity: 8
      };

      var addTableAction = {
        type: 'ADD_TABLE',
        table
      };

      //call reducer
      var result = reducers.tablesReducer(df([]), df(addTableAction));

      //assert that reducer added a table to state
      expect(result[0]).toEqual(addTableAction.table);


    });
    it('should update table on updateTable', () => {
      //mock the table
      var tables = [{
        tbname: 7,
        tbcapacity: 8,
        tbKey: 8
      }];

      var updates = {
        tbcapacity: 2
      };

      var updateTableAction = {
        type: 'UPDATE_TABLE',
        id: 8,
        updates
      };

      var result = reducers.tablesReducer(df(tables), df(updateTableAction));

      expect(result[0].tbcapacity).toEqual(updates.tbcapacity);
    });
    it('should delete table on deleteTable', () => {
      //mock the table
      var tables = [{
        tbname: 7,
        tbcapacity: 8,
        tbKey: 8
      },
      {
        tbname: 7,
        tbcapacity: 8,
        tbKey: 9
      }
      ];

      var deleteTableAction = {
        type: 'DELETE_TABLE',
        id: 8
      };

      var result = reducers.tablesReducer(df(tables), df(deleteTableAction));

      expect(result.length).toEqual(tables.length - 1);
    })
  })

  //test reservations reducer
  describe('reservationsReducer', () => {
    it('should set reservation data on addReservation', () => {
      expect(1).toEqual(2);
    });
    it('should remove reservation on removeReservation', () => {
      expect(1).toEqual(2);
    });
    it('should update reservation on updateReservation', () => {
      expect(1).toEqual(2);
    })
  });
})
