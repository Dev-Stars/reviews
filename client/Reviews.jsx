import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import UserInfo from './UserInfo.jsx';
import TextBox from './TextBox.jsx';

const Break = styled.hr`
  width: 500px;
  background-color: grey;
  height: 1px;
  border-top: .5px grey
  margin-bottom: 15px;
  margin-top: 0px;
`;

const Wrapper = styled.section`
  width: 600px;
  display: flex;
  flex-direction: column;
  padding-top: 0px;
  margin-top: 0px;
  margin-bottom: 0px;
`;

const UserWrapper = styled.span`
  width: 250px;
  padding-top: 0px;
  height: 300px;
  margin-bottom:0px;
`;

const TextWrapper = styled.span`
  width: 350px;
  padding-top: 0px;
  padding-bottom: 10px;
  margin-bottom: 0px;
`;

const ReviewsCol = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 0px;
  margin-top: 0px;
`;

const EachReview = styled.div`
  display: flex;
  align-items: flex-start;
  padding-top: 0px;
  margin-top: 0px;
`;

export default class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { reviews } = this.props;
    return (
      <Wrapper>
        {reviews.map(review => (
          <ReviewsCol key={review.id.toString()}>
            <EachReview>
              <UserWrapper>
                <UserInfo
                  className="UserReview"
                  review={[review]}
                />
              </UserWrapper>
              <TextWrapper>
                <TextBox
                  className="TextBox"
                  posted={review.posted}
                  stars={review.stars}
                  message={review.message}
                />
              </TextWrapper>
            </EachReview>
            <div>
              <Break></Break>
            </div>
          </ReviewsCol>
        ))}
      </Wrapper>
    );
  }
}

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.object).isRequired,
};
