import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import LinkBox from './LinkBox.jsx';

const UserBlock = styled.div`
  display: flex;
  flex-direction: column;
  height: 250px;
`;
const UserTop = styled.div`
  display: flex;
  flex-direction: inline;
  height: 100px;
`;

const UserPhotos = styled.img`
  width: 70px;
  height: 70px;
  margin-right: 10px;
`;

const UserBottom = styled.div`
  display: flex;
  flex-direction: column;
  border: black 1px;
  width: 200px;
  height: 200px;
  margin-bottom: 0px;
`;

export default class UserInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showLink: false,
    };
    this.handleUserHover = this.handleUserHover.bind(this);
    this.handleUserExit = this.handleUserExit.bind(this);
  }

  handleUserHover(e) {
    e.preventDefault();
    this.setState({ showLink: e.target.id });
  }

  handleUserExit(e) {
    e.preventDefault();
    this.setState({ showLink: null });
  }

  render() {
    const { review } = this.props;
    const {
      userloc, numfriends, photoloc, numreviews, name, id,
    } = review[0];
    const { showLink } = this.state;
    return (
      <UserBlock className="UserInfo">
        <UserTop>
          <span>
            <UserPhotos src={photoloc} alt="user's icon" />
          </span>
          <span>
            <div>
              { name }
            </div>
            <div>
              { userloc }
            </div>
            <div>
              { `${numfriends} `}
               friends
            </div>
            <div>
              { `${numreviews} `}
              reviews
            </div>
          </span>
        </UserTop>
        <UserBottom
          className="LinkBox"
          onMouseEnter={this.handleUserHover}
          onFocus={this.handleUserHover}
          id={id}
          name={name}
          onMouseLeave={this.handleUserExit}
        >

          {showLink
            && <LinkBox id={id} showLink={showLink} name={name} />
        }
        </UserBottom>
      </UserBlock>
    );
  }
}

UserInfo.propTypes = {
  review: PropTypes.arrayOf(PropTypes.object).isRequired,
};
