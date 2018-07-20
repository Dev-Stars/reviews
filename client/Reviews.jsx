import React from 'react';
import UserInfo from './UserInfo.jsx';
import TextBox from './TextBox.jsx';

export default class Reviews extends React.Component {
  constructor() {
    super();

    this.state = {

    };
  }

  render() {
    //const { unhappy } = this.state;  example destructuring
    return (
      <div>
        <span> UserInfo will go here.</span>
        <span> TextBox will go here.</span>
      </div>
    );
  }
}
