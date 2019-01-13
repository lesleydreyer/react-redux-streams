import React from 'react';
import flv from 'flv.js';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions';
class StreamShow extends React.Component {
    constructor(props) {
        super(props);
        this.videoRef = React.createRef();
    }
    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.fetchStream(id);
        this.buildPlayer();
    }

    componentDidUpdate() {
        this.buildPlayer();
        //the player is built in component did mount, but if the stream isn't fetched it isn't built in the buildPlayer so you build the player here too so the player is built once you have the stream fecthed
    }

    componentWillUnmount() {
        this.player.destroy();
    }

    buildPlayer() {
        if (this.player || !this.props.stream) {
            return;
        }

        const { id } = this.props.match.params;

        this.player = flv.createPlayer({
            type: 'flv',
            url: `http://localhost:8000/live/${id}.flv`
        });
        this.player.attachMediaElement(this.videoRef.current);
        this.player.load();
    }


    render() {
        if (!this.props.stream) {
            return <div>Loading...</div>
        }

        const { title, description } = this.props.stream;

        return (
            <div>
                <video ref={this.videoRef} controls style={{ width: '100%' }/*outer { js expression, inner{ define object */} />
                <h1>{title}</h1>
                <h5>{description}</h5>
            </div>
        );
    };
}

const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchStream })(StreamShow);