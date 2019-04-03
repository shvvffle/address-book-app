import React, { Component } from 'react';

class User extends Component {
  render() {
    const { picture, name, login, email } = this.props.details;
    const full_name = name.first + ' ' + name.last;
    return (
      <div className='user-info-card'>
        <img src={picture.thumbnail} alt={full_name} />
        <div className='user-info-details'>
          <p className='name'>{full_name}</p>
          <p className='username'>{login.username}</p>
          <p className='email'>{email}</p>
          <div className='user-info-actions'>
            <span>+</span>
          </div>
        </div>
      </div>
    );
  }
}

export default User;
