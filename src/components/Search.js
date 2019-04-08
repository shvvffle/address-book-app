import React, { Component } from 'react';

class Search extends Component {
  filterSearch = event => {
    const search_value = event.currentTarget.value.toLowerCase();
    const users = document.querySelectorAll('.js-full-name');
    const user_wrapper = document.querySelectorAll('.user-info-card');
    user_wrapper.forEach(function(user, index) {
      if (users[index].innerText.toLowerCase().indexOf(search_value) >= 0) {
        user_wrapper[index].style['display'] = 'block';
      } else {
        user_wrapper[index].style['display'] = 'none';
      }
    });
  };
  render() {
    return (
      <div className='search-wrapper'>
        <input
          type='text'
          className='search'
          placeholder='Search for a user'
          onChange={this.filterSearch}
        />
      </div>
    );
  }
}

export default Search;
