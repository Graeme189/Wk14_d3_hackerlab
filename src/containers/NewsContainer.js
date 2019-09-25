import React, {Component} from 'react';
import StoryList from '../components/StoryList.js'
import Header from '../components/Header.js'
// import '../components/Header.css';

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
      .then(res => res.json())
      .then(storyIDs => {
        return storyIDs.slice(0, 19).map(storyID => {
          return fetch("https://hacker-news.firebaseio.com/v0/item/" + storyID + ".json")
            .then(res => res.json())
        })
      })
      .then(promises => Promise.all(promises)
        .then(stories => this.setState({stories: stories}))
      )
      .catch(err => console.error);
  }

  render() {
    return (
      <>
        <Header />
        <StoryList stories={this.state.stories}/>
      </>
    )
  }
}

export default NewsContainer;
