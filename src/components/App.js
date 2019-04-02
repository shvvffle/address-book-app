import React from 'react';
import axios from 'axios';
import Loading from './Loading';
import User from './User';

class App extends React.Component {
  state = {
    users: {},
    isLoading: true
  };
  componentDidMount() {
    const max_results = 1000;
    const min_results = 50;
    axios
      .get('https://randomuser.me/api/?results=' + min_results + '')
      .then(response => {
        const users = response.data.results;
        this.setState({
          users,
          isLoading: false
        });
        console.log(this.state);
      });
  }
  render() {
    if (this.state.isLoading) {
      return <Loading />;
    } else {
      return (
        <div className='users-wrapper'>
          <ul className='users'>
            {Object.keys(this.state.users).map(key => (
              <User key={key} index={key} details={this.state.users[key]} />
            ))}
          </ul>
        </div>
      );
    }
  }
}

export default App;
