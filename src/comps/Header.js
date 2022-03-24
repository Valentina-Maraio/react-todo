import React from 'react';
import Button from './Button';

//import PropTypes from 'prop-types';

const Header = ({ title, onAdd, propShowAdd }) => {
  return (
    <div className="header">
        <h1 style={headingStyle}>{title}</h1>
        <Button
          color={propShowAdd ? 'red' : 'green'}
          text={propShowAdd ? 'Close' : 'Add'}
          onClick={onAdd}
        />
    </div>
  )
}

Header.defaultProps = {
    title: "Task Tracker"
}

const headingStyle = {
    color: 'orange',
    backgroundColor: 'green',
}
/*Header.propTypes = {
    title: PropTypes.string.isRequired,
}*/

export default Header