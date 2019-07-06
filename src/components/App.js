import React from 'react'
import {Router,Route} from 'react-router-dom';
import History from '../components/history';


import Todocreate from '../todo-feature/todoCreate';
import Todoedit from '../todo-feature/todoEdit';
import Todolist from '../todo-feature/todoList';
import Tododelete from '../todo-feature/todoDelete';
import Header from './header';



class App extends React.Component{
    render() {
        return (
            <div>
                <Router history={History}>
                <div className='ui container'>
                    <Header/>
                    <Route path='/' exact component={Todolist}/>
                    <Route path='/new' exact component={Todocreate}/>
                    <Route path='/edit' exact component={Todoedit}/>
                    <Route path='/delete' exact component={Tododelete} />
                </div>
            </Router>
            </div>
            
        )
    }
    
}

export default App;
