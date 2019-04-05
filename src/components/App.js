import React from 'react';
import axios from 'axios';
import Loading from './Loading';
import User from './User';
import Search from './Search';

class App extends React.Component {
  state = {
    users: [],
    isLoading: true,
    requestSent: true
  };

  componentDidMount() {
    this.loadUsers();
  }

  loadUsers() {
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

  querySearchResult() {
    if (this.state.requestSent) {
      return;
    }

    this.setState({ requestSent: true });

    // enumerate a slow query
    setTimeout(this.loadUsers.bind(this), 2000);
  }

  handleOnScroll() {
    const wrapper = document.querySelector('.users-wrapper');
    const scrollTop = wrapper && wrapper.scrollTop;
    const scrollHeight = wrapper && wrapper.scrollHeight;
    const clientHeight = window.innerHeight;
    const scrolledToBottom =
      Math.ceil(scrollTop + clientHeight) >= scrollHeight;
    if (scrolledToBottom) {
      if (this.state.users.length === 1000) {
        // show end of catalogue
        console.log('oi');
      }
      this.querySearchResult();
    }
  }

  render() {
    if (this.state.isLoading) {
      return <Loading />;
    } else {
      return (
        <div className='wrapper'>
          <Search users={this.state.users} />
          <div
            className='users-wrapper'
            onScroll={this.handleOnScroll.bind(this)}
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
        </div>
      );
    }
  }
}

export default App;
