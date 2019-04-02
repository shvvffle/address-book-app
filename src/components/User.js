import React, { Component } from 'react';

class User extends Component {
  render() {
    const { picture, name, login, email } = this.props.details;
    const full_name = name.first + ' ' + name.last;
    return (
      <div className='user-info-card'>
        <img src={picture.thumbnail} alt={full_name} />
        <p className='name'>{full_name}</p>
        <p className='username'>{login.username}</p>
        <p className='email'>{email}</p>
      </div>
    );
  }
}

export default User;
