import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './login/Login'
import Graph from './graphs/Graph'
import Register from './register/Register'
import "./App.css"
class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <div>
        <Router>
          <div>
            <Routes>
              <Route 
                  exact
                  path='/register'
                  element={<Register />}
              />
              <Route 
                  exact
                  path='/'
                  element={<Register />}
                />
               <Route 
                  exact
                  path='/login'
                  element={<Login />}
                />
                   <Route 
                  exact
                  path='/graphs'
                  element={<Graph />}
                />
            </Routes>
          </div>
        </Router>
      </div>
    )
  }
}

export default App