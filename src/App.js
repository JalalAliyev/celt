import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Backdrop from './ui-components/backdrop/backdrop.component';
import Header from './components/header/header.component';
import Sidebar from './components/sidebar/sidebar.component';
import Main from './pages/main.page';
import SpeakModul from './ui-components/speak-modul/speak-modul.component';
import { changeSidebarVisibility } from './store/interface-slice';
import SidebarModal from './ui-components/sidebar-modal/sidebar-modal.ui-component';

import './App.scss';

const App = () => {
  const { isBackdrop, isSidebarVisible } = useSelector(
    (state) => state.interface,
  );
  const dispatch = useDispatch();

  return (
    <div className="app">
      {isBackdrop && <Backdrop />}
      {isBackdrop && <SpeakModul />}
      {isSidebarVisible && <SidebarModal />}
      {isSidebarVisible && (
        <Backdrop onClose={() => dispatch(changeSidebarVisibility())} />
      )}
      <Header />
      <Sidebar />
      <Main />
    </div>
  );
};

export default App;
