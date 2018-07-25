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

export default function LinkBox(props) {
  const { name } = props;
  const linkString = `Follow ${name}`;
  const linkAddress = './linkTest.html';

  return (
    <Box className="LinkBox">
      <a href={linkAddress}>
        Share review
      </a>
      <a href={linkAddress}>
        Embed review
      </a>
      <a href={linkAddress}>
        Compliment
      </a>
      <a href={linkAddress}>
        Send message
      </a>
      <a className="personalized" href={linkAddress}>
        {linkString}
      </a>
    </Box>
  );
}


LinkBox.propTypes = {
  name: PropTypes.string.isRequired,
};
