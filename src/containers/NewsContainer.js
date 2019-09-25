import React, {Component} from 'react';
import StoryDetail from '../components/StoryDetail.js'
import Header from '../components/Header.js'

class NewsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stories: []
    }
  }

  componentDidMount() {
    const url = "https://hacker-news.firebaseio.com/v0/topstories.json";
    fetch(url)
    // to access the API we have to install an allow-control-allow-origin plugin
    .then(res => res.json())
    .then(stories => this.setState({stories: stories}))
    .catch(err => console.error);
  }

  render() {
    return (
      <>
        <h1>NewsContainer</h1>
      </>
    )
  }
}

export default NewsContainer;
