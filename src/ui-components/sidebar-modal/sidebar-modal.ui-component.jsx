import React from 'react';
import ReactDOM from 'react-dom';
import Sidebar from '../../components/sidebar/sidebar.component';

import './sidebar-modal.style.scss';

const SidebarModal = () => {
  const content = (
    <div className="sidebar-modal">
      <Sidebar style={{ display: 'flex' }} />
    </div>
  );
  return ReactDOM.createPortal(
    content,
    document.getElementById('sidebar-root'),
  );
};

export default React.memo(SidebarModal);
