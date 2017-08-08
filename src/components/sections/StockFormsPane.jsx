import React, {Component} from 'react'
import {connect} from 'react-redux'
import IngridientForm from 'IngridientForm'
import BatchForm from 'BatchForm'
import RecipeForm from 'RecipeForm'
import MenuForm from 'MenuForm'
import {startAddIngredient} from 'ingredientActions'
import {startAddBatch} from 'batchActions'
import {startAddRecipe} from 'recipeActions'
export class StockFormsPane extends Component{
  constructor(props) {
    super(props)
  }
  handleIngridient = (values) => {
    const {dispatch} = this.props;
    dispatch(startAddIngredient(values));
  }
  handleBatch = (values) => {
    const {dispatch} = this.props;
    //console.log(values)
    dispatch(startAddBatch(values));
  }
  handleRecipe = (values) => {
    const {dispatch} = this.props;
    //console.log(values)
    dispatch(startAddRecipe)
  }
  render() {
    const {stockForm}  = this.props;
    var whichForm =  () => {
      switch (stockForm) {
        case 'ingridients':
          return (
            <IngridientForm onSubmit={this.handleIngridient}/>
          );
        case 'batches':
          return (
            <BatchForm onSubmit={this.handleBatch}/>
          );
        case 'recipes':
          return(
            <RecipeForm onSubmit={this.handleRecipe}/>
          );
        case 'beverages':
          return (
            <p>Beverages Form</p>
          );
        case 'menus':
          return (
            <MenuForm/>
          );
        case 'archive':
          return (
            <p>archive form</p>
          );
        case 'cocktails':
          return (
            <p>Cocktails Form</p>
          );
        default:
          return (
            <p>Please Select a form from the buttons</p>
          );
      }
    }

    return (<div>
      {whichForm()}
    </div>);
  }
};


export default connect((state) =>  {
  return {
    stockForm : state.stockForm
  }
}) (StockFormsPane);
