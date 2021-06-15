import React from 'react';

import './modal.style.scss';

const Modal = (props) => {
  return <div className={`modal ${props.className}`}>{props.children}</div>;
};

export default React.memo(Modal);
