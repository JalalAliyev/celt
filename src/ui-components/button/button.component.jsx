import React from 'react';

import './button.style.scss';

const Button = (props) => {
  return (
    <div onClick={props.onClick} className={`button ${props.className}`}>
      {props.children}
    </div>
  );
};

export default React.memo(Button);
