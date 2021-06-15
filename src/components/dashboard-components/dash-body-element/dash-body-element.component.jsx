import React from 'react';
import { Link } from 'react-router-dom';
import Modal from '../../../ui-components/modal/modal.ui-component';

import './dash-body-element.style.scss'

const BodyElement = ({ Icon, link, children }) => {
  return (
    <div className="body-element">
      <Modal className="modal-body__elem">
        <div className="body-element__icon">
          <Icon />
        </div>
        <div className="body-element__link">
          <Link to={link}>{children}</Link>
        </div>
      </Modal>
    </div>
  );
};

export default BodyElement;
