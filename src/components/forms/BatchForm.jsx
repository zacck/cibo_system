import React,{Component} from 'react'
import {Field, reduxForm, FieldArray} from 'redux-form'
import {required} from 'validation'
import {renderField} from 'renderField'
import {connect} from 'react-redux'
import renderIngredients from 'renderIngredients'
import renderBatches from 'renderBatches'

export class BatchForm extends Component {
  render(){
    var {handleSubmit, ingredients, batches} = this.props;
    return(
      <div>
        <div>
          <p>Add Batch</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Category</label>
            <Field name="batchCategory" type="text" component={renderField} validate={[required]}/>
          </div>
          <div>
            <label>Description</label>
            <Field name="batchDescription" type="text" component={renderField} validate={[required]}/>
          </div>
          <div>
            <label>Units</label>
            <Field name="batchUnits" type="text" component={renderField} validate={[required]}/>
          </div>
          <div>
            <label>Size</label>
            <Field name="batchSize" type="text" component={renderField} validate={[required]}/>
          </div>
          <div>
            <FieldArray name="ingredients" ingredients={ingredients} component={renderIngredients}/>
          </div>
          <div>
            <FieldArray name="batches" batches={batches} component={renderBatches}/>
          </div>
          <div>
            <label>Calculated Batch Cost</label>
            <Field name="batchCalcCost" type="text" component={renderField} disabled="disabled"/>
          </div>
          <div className="text-center">
            <input type="submit" value="Add Batch" className="button"/>
          </div>
        </form>
      </div>
    )
  }
}

BatchForm = reduxForm({
  form:'batch'
})(BatchForm);


BatchForm = connect((state) => {
  return{
    ingredients: state.ingredients,
    batches: state.batches
  }
})(BatchForm)

export default BatchForm;
