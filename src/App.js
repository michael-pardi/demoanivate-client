import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import {Appbar} from './components/appbar/Appbar';
import {Homepage} from './components/homepage/Homepage';
import {Posts} from './components/posts/Posts';

function App() {
    return (
        <div>
            <Appbar/>
            <div>
                <Switch>
                    <Route path="/" component={Homepage} exact  >
                        <Homepage/>
                    </Route>
                    <Route path="/posts" component={Posts}>
                        <Posts/>
                    </Route>
                </Switch>
            </div>
        </div>
    );
}

export default App;
