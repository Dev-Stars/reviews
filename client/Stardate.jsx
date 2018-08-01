
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const DateSpan = styled.span`
  margin-left: 10px;
`;
const RedStar = styled.img`
  width: 25px;
  height: 25px;
`;

export default class Stardate extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      redVote: [],
      greyVote: [1, 2, 3, 4, 5],
    };
  }

  componentDidMount() {
    const { stars, posted } = this.props;
    const redArray = [];
    const greyArray = [];
    for (let idx = 1; idx <= stars; idx += 1) {
      redArray.push(idx);
    }
    for (let idx = stars + 1; idx <= 5; idx += 1) {
      greyArray.push(idx);
    }
    this.setState({ redVote: redArray, greyVote: greyArray });
    this.formatDate(posted);
  }

  formatDate(date) {
    const year = date.slice(0, 4);
    const month = date.slice(6, 7);
    const day = date.slice(8, 10);
    const formattedDate = `${month}/${day}/${year}`;
    this.setState({ datePosted: formattedDate });
  }

  render() {
    const { redVote, greyVote, datePosted } = this.state;
    return (
      <div className="StarsRow">
        <span>
          {redVote.map(number => (
            <RedStar
              src="https://s3-us-west-1.amazonaws.com/yelpclonereviews/photos/star.png?versionId=null"
              alt="redStar"
              key={number.toString()}
            />
          ))}
        </span>
        <span>
          {greyVote.map(number => (
            <RedStar
              src="https://s3-us-west-1.amazonaws.com/yelpclonereviews/photos/greyStar.png?versionId=null"
              alt="greyStar"
              key={number.toString()}
            />
          ))}
        </span>
        <DateSpan>
          { datePosted }
        </DateSpan>
      </div>
    );
  }
}

Stardate.propTypes = {
  posted: PropTypes.string.isRequired,
  stars: PropTypes.number.isRequired,
};
