import React, { Component } from "react";
import { browserHistory } from 'react-router';
import iframe from 'react-iframe'
export default class Home extends Component {
  componentDidMount() {
    browserHistory.push('/');
  }
  render() {
    return (
      <div id="home">
        This is the home page.
        <div>
          <iframe
            width="560"
            height="315"
             src="https://www.youtube.com/embed/-AuIe5j5Iw0"
             frameborder="0"
             allow="autoplay; encrypted-media"
             allowfullscreen>
         </iframe>
        </div>
      </div>

    );
  }
}
