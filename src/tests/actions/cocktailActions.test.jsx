import expect from 'expect'
import * as actions from 'cocktailActions'
import firebase,{firebaseRef} from 'src/firebase'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

const createMockStore = configureMockStore([thunk]);

describe.only('cocktailActions', () => {

  describe('sync', () => {

    it('should generate addCocktail Action', () => {

      //mock a cocktail
      const cocktail  =  {
        name: 'Tea',
        contents: [
          {id: 23, amount: '2 spoons'},
          {id: 56, amount: '1 pinch'}
        ]
      };

      //mock the action
      const action =  {
        type: 'ADD_COCKTAIL',
        cocktail
      };

      //call the actions
      const res =  actions.addCocktail(cocktail);

      expect(res).toEqual(action);
    });

    it('should generate updateCocktail Action', () => {
      //mock a cocktail
      const cocktail  =  {
        id: 2,
        name: 'Tea',
        contents: [
          {id: 23, amount: '2 spoons'},
          {id: 56, amount: '1 pinch'}
        ]
      };


      const updates =  {name: 'Strong tea'};

      const action = {
        type: 'UPDATE_COCKTAIL',
        id: cocktail.id,
        updates
      };

      const res =  actions.updateCocktail(cocktail.id, updates);

      expect(res).toEqual(action);

    })

  });
});
