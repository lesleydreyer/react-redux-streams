

//-------------------------------------------
//THIS IS STREAM CREATE BEFORE STREAMFORM WAS CREATED
//-------------------------------------------


import React from 'react';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions';

class StreamEdit extends React.Component {
    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    }

    //props comes from app.js, the id comes down as props match params
    //and then can get a list of streams from redux
    //but then you combine these with mapStateToProps
    render() {
        console.log(this.props)
        if (!this.props.stream) {
            return <div>Loading...</div>;
        }
        return (
            <div>{this.props.stream.title}</div>
        );
    }
}

//since you need the state object from redux and also the components own props 
//passed down to it, you can pass 2 arguments - state and ownProps
const mapStateToProps = (state, ownProps) => {
    //console.log('ownProps', ownProps);
    //console.log('state', state);
    return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream })(StreamEdit);