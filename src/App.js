import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './login/Login'
import Register from './register/Register'
import AdminHome from './admin-home'
import PacientHome from './pacient-home'
import Devices from './devices-map/devices'
import PacientChat from './pacient-chat/pacient-chat'
import AdminChat from './admin-chat/admin-chat'
import ReviewForm from './pacient-forms/review-form'
import Form from './pacient-forms/form'

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
                <Route 
                  exact
                  path='/pacient'
                  element={<PacientHome />}
                />
               <Route 
                  exact
                  path='/login'
                  element={<Login />}
                />
                <Route 
                  exact
                  path='/devices'
                  element={<Devices />}
                />
                 <Route 
                  exact
                  path='/pacient/chat'
                  element={<PacientChat />}
                />
                 <Route 
                  exact
                  path='/messages'
                  element={<AdminChat />}
                />
                <Route 
                  exact
                  path='/pacient/review-form'
                  element={<ReviewForm />}
                />
                <Route 
                  exact
                  path='/pacient/form'
                  element={<Form />}
                />
            </Routes>
          </div>
        </Router>
      </div>
    )
  }
}

export default App