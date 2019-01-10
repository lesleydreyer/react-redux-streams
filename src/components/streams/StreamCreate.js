import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createStream } from '../../actions';

class StreamCreate extends React.Component {
    //renderInput(formProps) {
    //    return <input onChange={formProps.input.onChange} value={formProps.input.value} />
    //}
    //SIMPLIFY WITH SPREAD OPERATOR
    //renderInput({ formProps }) {
    //    return <input {...formProps.input} />
    //}
    //SIMPLIFY MORE WITH DESTRUCTURING
    renderError({ error, touched }) {
        if (touched && error) {
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            );
        }
    }
    renderInput = ({ input, label, meta }) => {//arrow func to bind this
        //console.log(meta);
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`
        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input} autoComplete="off" />
                {this.renderError(meta)}
            </div>
        )
    }

    onSubmit = (formValues) => { //arrow func to bind this
        //event.preventDefault(); reduxForm handles this for us in handleSubmit so we don't need it here
        this.props.createStream(formValues);//createStream is action creator in actions folder that makes a request to api server and create a new stream with RESTful conventions
    }

    render() {
        return (
            <form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)/*onSubmit name of prop we are passing down into form, handleSubmit is callback func provided to component by reduxForm, this.onSubmit is our callback method we defined above*/}>
                <Field name="title" component={this.renderInput} label="Enter Title" />
                <Field name="description" component={this.renderInput} label="Enter Description" />
                <button className="ui button primary">Submit</button>
            </form>
        )
    }
}


//reduxform provides a validate function that you can define so that the error property can match the name property and you can tie the error in with the correct field,
//you can add meta to the destructuring in renderInput and console.log(meta) and you'll see the error is in the list
const validate = (formValues) => {
    const errors = {};
    if (!formValues.title) {
        errors.title = 'You must enter a title';
    }
    if (!formValues.description) {
        errors.description = 'You must enter a description'
    }
    return errors;
};

//PRE-CONNECT
/*export default reduxForm({
    form: 'streamCreate',
    validate
})(StreamCreate);*/

//ONE WAY TO DO CONNECT
/*export default connect(reduxForm({
    form: 'streamCreate',
    validate
})(StreamCreate));*/

//CLEANER WAY TO DO CONNECT AND REDUX FORM
const formWrapped = reduxForm({
    form: 'streamCreate',
    validate
})(StreamCreate);

export default connect(null, { createStream })(formWrapped);