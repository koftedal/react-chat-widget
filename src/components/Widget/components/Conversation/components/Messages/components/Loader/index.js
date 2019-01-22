import React from 'react'; 
import PropTypes from 'prop-types';

import './styles.scss';

const Loader = props => 
<div className={`loader ${props.typping && 'active'}`}>
  <div className="loader-container">
    <span className="loader-dots"></span>
    <span className="loader-dots"></span>
    <span className="loader-dots"></span>
  </div>
</div>;

Loader.propTypes = {
  typping: PropTypes.bool,
};

export default Loader; 
