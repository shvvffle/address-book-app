import React, { Component } from 'react';
import axios from 'axios';

class Settings extends Component {
  state = {
    nationalities: ['ch', 'es', 'fr', 'gb'],
    checked: []
  };

  onClick = event => {
    event.preventDefault();
    const choices = this.state.checked;
    this.requestUsers(choices);
  };

  handleCheckbox = event => {
    const target = event.currentTarget;
    const nat = target.getAttribute('value');
    if (target.checked) {
      this.setState({ checked: this.state.checked.concat(nat) });
    } else {
      let checked = this.state.checked;
      const index = checked.indexOf(nat);
      if (index > -1) {
        checked.splice(index, 1);
      }
      this.setState({ checked });
    }
  };

  requestUsers(value) {
    if (value) {
      axios
        .get('https://randomuser.me/api/?nat=' + value + '')
        .then(response => {
          const users = response.data.results;
          this.setState({
            users: users,
            isLoading: false
          });
        });
    }
  }

  render() {
    return (
      <div className='wrapper'>
        <div className='nav'>
          <a href='/'>Back</a>
        </div>
        <div className='settings-wrapper'>
          <p>Settings</p>
          <div className='choices-wrapper'>
            {Object.keys(this.state.nationalities).map(key => (
              <label key={key}>
                <input
                  type='checkbox'
                  key={key}
                  value={this.state.nationalities[key]}
                  onChange={this.handleCheckbox}
                />
                {this.state.nationalities[key]}
              </label>
            ))}
          </div>
          <button type='submit' onClick={this.onClick}>
            Save
          </button>
        </div>
      </div>
    );
  }
}

export default Settings;
