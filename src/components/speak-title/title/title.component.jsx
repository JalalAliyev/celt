import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { HiOutlineDotsVertical } from 'react-icons/hi';
import Backdrop from '../../../ui-components/backdrop/backdrop.component';
import { changeBackdrop } from '../../../store/interface-slice';
import './title.style.scss';

const Title = ({ id, name }) => {
  const [isRecord, setIsRecord] = useState(false);
  const dispatch = useDispatch();

  const changeRecordHandler = () => setIsRecord(!isRecord);

  const callModul = () => {
    changeRecordHandler();
    dispatch(changeBackdrop(name));
  };

  return (
    <li className='title' key={id}>
      {name}
      <div
        onClick={changeRecordHandler}
        className={`speak-title__body-icon ${isRecord && 'disabled'}`}>
        <HiOutlineDotsVertical />
      </div>
      {isRecord && (
        <div onClick={callModul} className="record-speaking">
          <p>Record Speaking</p>
        </div>
      )}
      {isRecord && (
        <Backdrop onClose={changeRecordHandler} className="backdrop-hidden" />
      )}
    </li>
  );
};

export default React.memo(Title);
