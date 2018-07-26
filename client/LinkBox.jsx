import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Box = styled.div`
  display: flex;
  flex-direction: column;
  width: 100;
  min-height: 100;
  background-color: white;
`;

const PopupLink = styled.a`
  text-decoration: none;
  font-size: 1em;
  &:hover {
    text-decoration: underline;
  }
`;

export default function LinkBox(props) {
  const { name } = props;
  const linkString = `Follow ${name}`;
  const linkAddress = './linkTest.html';

  return (
    <Box className="LinkBox">
      <PopupLink href={linkAddress}>
        Share review
      </PopupLink>
      <PopupLink href={linkAddress}>
        Embed review
      </PopupLink>
      <PopupLink href={linkAddress}>
        Compliment
      </PopupLink>
      <PopupLink href={linkAddress}>
        Send message
      </PopupLink>
      <PopupLink className="personalized" href={linkAddress}>
        {linkString}
      </PopupLink>
    </Box>
  );
}


LinkBox.propTypes = {
  name: PropTypes.string.isRequired,
};
