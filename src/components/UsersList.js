import React, { Component } from 'react';
import User from './User';

class UsersList extends Component {
  render() {
    return (
      <ul className='users'>
        {Object.keys(this.props.list).map(key => (
          <User key={key} index={key} details={this.props.list[key]} />
        ))}
      </ul>
    );
  }
}

export default UsersList;
