import React from 'react';
import $ from 'jquery';
import TopBar from './TopBar.jsx';
import Reviews from './Reviews.jsx';

export default class ReviewModule extends React.Component {
  constructor(props) {
    super(props);
    const { id } = this.props;
    this.state = {
      businessID: id,
      toDisplay: [],
      name: 'InitialLoc',
      redVote: [],
      greyVote: [1, 2, 3, 4, 5],
      reviews: [
        {
          locname: 'Intial',
          stars: 3,
          id: 1,
          posted: '2018-12-25',
          username: 'Tim, the user',
          userloc: 'San Francisco, CA',
          numfriends: 15,
          photoLoc: './photos/p1.jpg',
          numreviews: 5,
          message: 'Here is a review.  The text is long!',
        },
      ],
      avgStars: 0,
    };
    this.avgStars = this.avgStars.bind(this);
    this.handleStarHover = this.handleStarHover.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.handleDropDown = this.handleDropDown.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount() {
    const { businessID } = this.state;
    this.fetchReviews(businessID);
  }

  fetchReviews(restaurantID) {
    $.ajax({
      type: 'GET',
      url: `http://localhost:3004/locations/${restaurantID}/reviews`,
      contentType: 'application/json',
      success: (response) => {
        this.setState({ reviews: response }, () => {
          const { reviews } = this.state;
          const currentName = reviews[0].locname;
          this.setState({ name: currentName }, () => {
            this.setState({ toDisplay: response });
          });
        });
        this.avgStars(response);
      },
    });
  }

  handleSearch(e) {
    const { reviews, toDisplay } = this.state;
    let filteredReviews = reviews.filter(review => review.message.includes(e));
    this.setState({ toDisplay: filteredReviews });
  }

  handleMouseLeave() {
    this.setState({
      redVote: [],
      greyVote: [1, 2, 3, 4, 5],
    });
  }

  handleStarHover(e) {
    e.preventDefault();
    const starNum = parseInt(e.target.id, 10);
    const redArray = [];
    const greyArray = [];
    for (let idx = 1; idx <= starNum; idx += 1) {
      redArray.push(idx);
    }
    for (let idx = starNum + 1; idx <= 5; idx += 1) {
      greyArray.push(idx);
    }
    this.setState({ redVote: redArray, greyVote: greyArray });
  }

  handleDropDown(e) {
    let sorted;
    const { reviews } = this.state;
    const sortType = e.target.value;
    const lowFirst = function compareLowest(a, b) {
      return a.stars - b.stars;
    };
    const highFirst = function compareHighest(a, b) {
      return b.stars - a.stars;
    };
    const earlyFirst = function compareEarliest(a, b) {
      const dateA = Date.parse(a.posted);
      const dateB = Date.parse(b.posted);
      if (dateA < dateB) {
        return -1;
      }
      if (dateA > dateB) {
        return 1;
      }
      return 0;
    };
    const lateFirst = function compareEarliest(a, b) {
      const dateA = Date.parse(a.posted);
      const dateB = Date.parse(b.posted);
      if (dateA < dateB) {
        return 1;
      }
      if (dateA > dateB) {
        return -1;
      }
      return 0;
    };
    if (sortType === 'Lowest') {
      sorted = reviews.sort(lowFirst);
    } else if (sortType === 'Highest') {
      sorted = reviews.sort(highFirst);
    } else if (sortType === 'Oldest') {
      sorted = reviews.sort(earlyFirst);
    } else if (sortType === 'Newest') {
      sorted = reviews.sort(lateFirst);
    } else {
      this.setState({ reviews: sorted });
    }
    this.setState({ reviews: sorted });
  }

  avgStars(reviewsArray) {
    let sum = 0;
    if (reviewsArray.length > 0) {
      sum = reviewsArray.reduce((acc, curr) => (acc + curr.stars), 0);
      const avg = sum / reviewsArray.length;
      this.setState({ avgStars: avg });
      return;
    }
    this.setState({ avgStars: 0 });
  }

  render() {
    const {
      avgStars, reviews, redVote, greyVote, name, toDisplay,
    } = this.state;
    return (
      <div className="mainView flex-container">
        <TopBar
          className="topBar"
          avg={avgStars}
          name={name}
          handleHover={this.handleStarHover}
          starVote={redVote}
          greyVote={greyVote}
          handleMouseLeave={this.handleMouseLeave}
          handleDropDown={this.handleDropDown}
          handleSearch={this.handleSearch}
        />
        <Reviews reviews={toDisplay} />
      </div>
    );
  }
}
