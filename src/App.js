import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Register from './register/Register'
import AdminHome from './admin-home'

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
                  element={<AdminHome />}
                />
            </Routes>
          </div>
        </Router>
      </div>
    )
  }
}

export default App