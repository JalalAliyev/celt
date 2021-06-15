import React, { useState, useEffect, useCallback, useMemo } from 'react';

import './timer.style.scss';

const Timer = () => {
  const startDate = useMemo(() => new Date(), []);
  const [timer, setTimer] = useState('00:00:00');

  const getTimeRemaining = useCallback(() => {
    const total = Date.parse(new Date()) - Date.parse(startDate);
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 60000) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    return { total, seconds, minutes, hours };
  }, [startDate]);


  useEffect(() => {
    setInterval(() => {
      let { seconds, minutes, hours } = getTimeRemaining();
      setTimer(
        (hours > 9 ? hours : '0' + hours) +
          ':' +
          (minutes > 9 ? minutes : '0' + minutes) +
          ':' +
          (seconds > 9 ? seconds : '0' + seconds),
      );
    }, 1000);

    return () => clearInterval();
  }, [getTimeRemaining]);

  return <div className="timer">{timer}</div>;
};

export default React.memo(Timer);
