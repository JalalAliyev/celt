import React from 'react';
import { useSelector } from 'react-redux';
import Title from '../../components/speak-title/title/title.component';
import { speakTitle } from '../../utils/speak-title';
import Button from '../../ui-components/button/button.component';
import SpeakModul from '../../ui-components/speak-modul/speak-modul.component';

import './speak-title.style.scss';

const SpeakTitle = () => {
  const { isBackdrop, title } = useSelector((state) => state.interface);
  
  return (
    <div className="speak-title">
      <div className="speak-title__header">
        <h4>Speakings</h4>
      </div>
      <ul className="speak-title__body">
        {speakTitle.map((title) => (
          <Title key={title.id} name={title.name} id={title.id} />
        ))}
      </ul>
      {isBackdrop && (
        <SpeakModul>
          <div className="modul__title">
            <h4>Speaking</h4>
          </div>
          <div className="modul__body">
            <h5>Title: {title}</h5>
          </div>
          <div className="modul__footer">
            <Button className="button__close">Close</Button>
            <Button className="button__delete">Delete Recording</Button>
            <Button className="button__save">Save</Button>
          </div>
        </SpeakModul>
      )}
    </div>
  );
};

export default SpeakTitle;
