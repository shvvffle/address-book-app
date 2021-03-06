import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getRandomUsers } from '../utils';

class Settings extends Component {
  state = {
    nationalities: ['ch', 'es', 'fr', 'gb'],
    checked: []
  };

  onClick = event => {
    event.preventDefault();
    const choices = this.state.checked;
    getRandomUsers(choices);
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

  render() {
    return (
      <div className='wrapper'>
        <div className='nav'>
          <Link to='/'>Back</Link>
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
