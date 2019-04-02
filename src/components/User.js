import React, { Component } from 'react';

class User extends Component {
  render() {
    const { image, name, username, email } = this.props.details;
    return (
      <div className='user-info'>
        <p className='first-name'>{name.first}</p>
      </div>
    );
  }
}

export default User;
