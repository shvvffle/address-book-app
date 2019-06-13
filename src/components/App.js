import React, { Component } from 'react';
import Loading from './Loading';
import UsersList from './UsersList';
import Search from './Search';
import { Link } from 'react-router-dom';
import { getRandomUsers } from '../utils';

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
    getRandomUsers().then(response => {
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
    const max_users = 1000;
    const wrapper = document.querySelector('.wrapper');
    const scrollTop = wrapper && wrapper.scrollTop;
    const scrollHeight = wrapper && wrapper.scrollHeight;
    const clientHeight = window.innerHeight;
    const scrolledToBottom =
      Math.ceil(scrollTop + clientHeight) >= scrollHeight;
    if (scrolledToBottom) {
      if (this.state.users.length === max_users) {
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
    }
    return (
      <div className='wrapper' onScroll={this.handleScroll.bind(this)}>
        <Search users={this.state.users} />
        <Link to='/settings' className='settings-link'>
          Settings
        </Link>
        <div className='users-wrapper'>
          <UsersList list={this.state.users} />
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

export default App;
