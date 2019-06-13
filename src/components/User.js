import React, { Component } from 'react';
import UserDetailModal from './UserDetailModal';

class User extends Component {
  showUserDetail = event => {
    const user_email = event.currentTarget.getAttribute('data-value');
    const user_detail = document.getElementById('user_' + user_email);
    user_detail.classList.remove('hidden');
  };

  render() {
    const { picture, name, login, email } = this.props.details;
    const full_name = name.first + ' ' + name.last;
    return (
      <div className='user-info-card'>
        <img src={picture.large} alt={full_name} />
        <div className='user-info-details'>
          <p className='name js-full-name'>{full_name}</p>
          <p className='username'>{login.username}</p>
          <p className='email'>{email}</p>
          <div
            className='user-info-actions'
            onClick={this.showUserDetail}
            data-value={email}
          >
            <span>+</span>
          </div>
        </div>
        <UserDetailModal details={this.props.details} />
      </div>
    );
  }
}

export default User;
