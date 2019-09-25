import React, {Component} from 'react';
import StoryList from '../components/StoryList.js'
import Header from '../components/Header.js'
import ScoreSlider from '../components/ScoreSlider.js'
// import '../components/Header.css';

class NewsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stories: [],
      scoreLimit: 100
    }
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const url = "https://hacker-news.firebaseio.com/v0/topstories.json";
    fetch(url)
      .then(res => res.json())
      .then(storyIDs => {
        return storyIDs.map(storyID => {
          return fetch("https://hacker-news.firebaseio.com/v0/item/" + storyID + ".json")
            .then(res => res.json())
        })
      })
      .then(promises => Promise.all(promises)
        .then(res => res.filter(story => story.score > this.state.scoreLimit))
        .then(stories => this.setState({stories: stories}))
      )
      .catch(err => console.error);
  }

  handleChange(value){
    this.setState({scoreLimit: value});
  }

  render() {
    return (
      <>
        <Header />
        <ScoreSlider handleChange={this.handleChange} scoreLimit={this.scoreLimit}/>
        <StoryList stories={this.state.stories}/>
      </>
    )
  }
}

export default NewsContainer;
