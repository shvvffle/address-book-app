import React, { Component } from 'react';

class UserDetailModal extends Component {
  render() {
    const { picture, name, login, email } = this.props.details;
    const full_name = name.first + ' ' + name.last;
    return (
      <div className='user-info-modal hidden' id={'user_' + email}>
        <img src={picture.thumbnail} alt={full_name} />
        <div className='user-info-details'>
          <p className='name'>{full_name}</p>
          <p className='username'>{login.username}</p>
          <p className='email'>{email}</p>
        </div>
      </div>
    );
  }
}

// - a ‘location.street’ field,
// - a ‘location.city’ field,
// - a ‘location.state’ field,
// - a ‘location.postcode’ field,
// - a ‘phone’ field,
// - a ‘cell’ field,

export default UserDetailModal;
