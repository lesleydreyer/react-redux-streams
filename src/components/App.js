import React from 'react';
import { Router, Route } from 'react-router-dom';
import StreamCreate from './streams/StreamCreate';
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
import Header from './Header';
import history from '../history';

const App = () => {
    return (
        <div className="ui container">
            <Router history={history/*BrowserRouter will use history object we created instead of the one it normally automatically creates, changed to Router instead of BrowserRouter*/}>
                <div>
                    <Header />
                    <Route path="/" exact component={StreamList} />
                    <Route path="/streams/new" component={StreamCreate} />
                    <Route path="/streams/edit/:id" component={StreamEdit} />{/*the id goes to react router dom props match param */}
                    <Route path="/streams/delete/:id" component={StreamDelete} />
                    <Route path="/streams/show" component={StreamShow} />
                </div>
            </Router>
        </div>
    )
}

export default App;