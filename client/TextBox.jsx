import React from 'react';
import PropTypes from 'prop-types';
import Stardate from './Stardate.jsx';

export default function TextBox(props) {
  const { message, stars, posted } = props;
  return (
    <div>
      <div>
        <Stardate stars={stars} posted={posted} />
      </div>
      <div className="Message">
        { message }
      </div>
    </div>
  );
}

TextBox.propTypes = {
  message: PropTypes.string.isRequired,
  posted: PropTypes.string.isRequired,
};
