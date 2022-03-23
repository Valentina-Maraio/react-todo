import React from 'react';
import Button from './Button';

//import PropTypes from 'prop-types';

const Header = ({ title, onAdd, showAdd }) => {
  return (
    <div className="header">
        <h1 style={headingStyle}>{title}</h1>
        <Button
          color={showAdd ? 'red' : 'green'}
          text={showAdd ? 'Close' : 'Add'}
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