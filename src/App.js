import {Component} from 'react'
import {BrowserRouter as Router,Link,Route,Switch} from 'react-router-dom'
import {Provider} from 'react-redux'
import {createStore,applyMiddleware} from 'redux'
import UsersComponent from './contianers/register'
import UsersDetailsComponent from './contianers/home'
import promiseMiddleware from 'redux-promise'
import reducers from './reducers'

const createStoreWithMW=applyMiddleware(promiseMiddleware)(createStore)
export default class App extends Component{

    render(){
        return(
            <div>
                <Provider  store={createStoreWithMW(reducers)}>
                    <div className="container">
                        <Router>
                            <h1 className="bg-light text-center mb-4  p-2 ">
                                <Link to="/">Users Demo</Link>
                            </h1>
                    
                            <Switch>
                            <Route exact path="/users" component={UsersDetailsComponent}/>
                            <Route exact path="/register" component={UsersComponent}/>
                            <Route exact path="/" component={UsersDetailsComponent}/>
                            </Switch>
                        </Router>
                    </div>
                </Provider>
            </div>
           


        )
    }
}