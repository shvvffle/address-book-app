import React, { Component } from 'react';

class UserDetailModal extends Component {
  hideUserDetails = event => {
    const user_email = event.currentTarget.getAttribute('data-value');
    const user_detail = document.getElementById('user_' + user_email);
    user_detail.classList.add('hidden');
  };
  render() {
    const {
      picture,
      name,
      login,
      email,
      location,
      cell,
      phone
    } = this.props.details;
    const full_name = name.first + ' ' + name.last;
    return (
      <div className='user-info-modal hidden' id={'user_' + email}>
        <div className='user-info-modal-main'>
          <img src={picture.large} alt={full_name} />
          <div className='user-info-details'>
            <p className='name'>
              <span>name: </span>
              {full_name}
            </p>
            <p className='username'>
              <span>username:</span>
              {login.username}
            </p>
            <p className='email'>
              <span>email:</span>
              {email}
            </p>
            <div className='user-info-misc'>
              <p className='location'>
                <span>street:</span>
                {location.street}
              </p>
              <p className='location'>
                <span>city:</span>
                {location.postcode} {location.city}
              </p>
              <p className='location'>
                <span>state:</span>
                {location.state}
              </p>
              <p className='phone'>
                <span>phone number:</span>
                {phone}
              </p>
              <p className='cell'>
                <span>cell number:</span>
                {cell}
              </p>
            </div>
          </div>
          <div
            className='user-info-actions'
            onClick={this.hideUserDetails}
            data-value={email}
          >
            <span className='user-info-btn'>x</span>
          </div>
        </div>
      </div>
    );
  }
}

export default UserDetailModal;
