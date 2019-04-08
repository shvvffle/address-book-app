import React, { Component } from 'react';
import axios from 'axios';
import Loading from './Loading';
import User from './User';
import Search from './Search';
import { Link } from 'react-router-dom';

class App extends Component {
  state = {
    users: [],
    isLoading: true,
    requestSent: true,
    endUsersRequest: false
  };

  componentDidMount() {
    this.requestUsers();
  }

  requestUsers() {
    // request users in a batch of 50 each time
    const min_results = 50;
    axios
      .get('https://randomuser.me/api/?results=' + min_results + '')
      .then(response => {
        const users = response.data.results;
        const new_users = this.state.users.concat(users);
        this.setState({
          users: new_users,
          isLoading: false,
          requestSent: false
        });
      });
  }

  sendUsersRequest() {
    if (this.state.requestSent) {
      return;
    }

    this.setState({ requestSent: true });

    // enumerate a slow query
    setTimeout(this.requestUsers.bind(this), 2000);
  }

  handleScroll() {
    const wrapper = document.querySelector('.users-wrapper');
    const scrollTop = wrapper && wrapper.scrollTop;
    const scrollHeight = wrapper && wrapper.scrollHeight;
    const clientHeight = window.innerHeight;
    const scrolledToBottom =
      Math.ceil(scrollTop + clientHeight) >= scrollHeight;
    if (scrolledToBottom) {
      if (this.state.users.length === 1000) {
        // show end of catalogue
        this.setState({ endUsersRequest: true });
      } else {
        // request the next 50 batch of users
        this.sendUsersRequest();
      }
    }
  }

  render() {
    if (this.state.isLoading) {
      return <Loading />;
    } else {
      return (
        <div className='wrapper'>
          <Search users={this.state.users} />
          <Link to='/settings' className='settings-link'>
            Settings
          </Link>
          <div
            className='users-wrapper'
            onScroll={this.handleScroll.bind(this)}
          >
            <ul className='users'>
              {Object.keys(this.state.users).map(key => (
                <User key={key} index={key} details={this.state.users[key]} />
              ))}
            </ul>
          </div>
          <div
            className={
              this.state.requestSent
                ? 'loading-users show'
                : 'loading-users hidden'
            }
          >
            loading
          </div>
          <div
            className={
              this.state.endUsersRequest ? 'end-users show' : 'end-users hidden'
            }
          >
            end of users catalog
          </div>
        </div>
      );
    }
  }
}

export default App;
