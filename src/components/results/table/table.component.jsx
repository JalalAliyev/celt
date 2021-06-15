import React from 'react';
import { AiFillEye } from 'react-icons/ai';
import ResultMessage from '../message/message.component';

import './table.style.scss';

const ResultTable = ({ results }) => {
  if (results.length === 0) {
    return (
      <div className="result-div__not">
        <h3>Exam results not found!</h3>
      </div>
    );
  }

  return (
    <div className="result-table">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Date</th>
            <th>Result</th>
            <th>Points</th>
            <th>Classes</th>
            <th>Time</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {results.map((result) => (
            <tr key={result.id}>
              <td>{result.name}</td>
              <td>{result.date}</td>
              <td>
                <ResultMessage isPassed={result.result} />
              </td>
              <td>{result.points}</td>
              <td>{result.classes}</td>
              <td>{result.time}</td>
              <td>
                <div className="result-table__actions">
                  <AiFillEye />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default React.memo(ResultTable);
