import React, { Component } from 'react';
import axios from 'axios';

class Settings extends Component {
    
    state = {
        nationalities: [
            'ch',
            'es',
            'fr',
            'gb'
        ]
    }

    requestUsers(value) {
        axios
        .get('https://randomuser.me/api/?results=' + value + '')
        .then(response => {
            const users = response.data.results;
            this.setState({
            users: users,
            isLoading: false
            });
        });
    }

    render() {
        return (
            <div className='wrapper'>
                <div className='nav'>
                    <a href="/">Back</a>
                </div>
                <div className='settings-wrapper'>
                    <p>Settings</p>
                        <div className='choices-wrapper'>
                        {Object.keys(this.state.nationalities).map(key => (
                            <label key={key}>
                            <input
                                type="checkbox"
                                key={key}
                                value={this.state.nationalities[key]}
                            />
                            {this.state.nationalities[key]}
                            </label>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default Settings;

// https://randomuser.me/api/?nat=us,dk,fr,gb CH, ES, FR, GB.