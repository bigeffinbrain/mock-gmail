import { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'


import './App.css';
import Email from './components/home.js'
import SendEmail from './components/sendEmail'


class App extends Component {
  constructor() {
    super()
    this.state = {
      emails: []
    }
  }

  componentDidMount() {
    fetch("http://localhost:3001/emails", {
      method: 'get'
    })
      .then(emails => emails.json)
      .then(data => {
        this.setState({ emails: data })
        console.log(this.state)
      })
      .catch(error => console.log(error))
  }

  render() {
    return (
      <>
        <header>


          <a href="/">
            <button id="gmail-button">gmail.com</button>
          </a>

          <input id="search-bar" type="text" placeholder="Search..." />
          <a href="http://localhost:3001/search">
            <button id="search-buttton">Search</button>
          </a>

          <a href="/newmail">
            <button id="new-email-create">New Email</button>
          </a>


        </header>
        <body>
          <Router>
            <Switch>


              <Route exact path="/">
                {
                  this.state.emails.length > 0 ?
                    this.state.emails.map((email, index) => <Email
                      key={index}
                      sender={email.sender}
                      subject={email.subject}
                      date={email.date}
                      message={email.message}
                    />)
                    :
                    <p>Your inbox is empty.</p>
                }
              </Route>

              <Route path="/newmail">
                <SendEmail />
              </Route>


            </Switch>
          </Router>
        </body>
      </>
    )
  }
}


export default App;
