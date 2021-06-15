import React from 'react';

import './backdrop.style.scss';

const Backdrop = ({ onClose, className }) => {
  return <div onClick={onClose} className={`backdrop ${className}`}></div>;
};

export default React.memo(Backdrop);
