import React from 'react';
import axios from 'axios';

class App extends React.Component {
  state = {
    users: {}
  }
  componentDidMount(){
    axios.get('https://randomuser.me/api/').then(response => {
      const users = response.data.results;
      this.setState({ users });
      console.log(this.state);
    })
  }
  render() {
    return (
      <div className="App">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
      </div>
    );
  }
}

export default App;
