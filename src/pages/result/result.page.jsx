import React, { useCallback, useEffect, useState } from 'react';
import Pagination from '../../components/results/pagination/pagination.component';
import Search from '../../components/results/search/search.component';
import ResultTable from '../../components/results/table/table.component';
import { results } from '../../utils/results-list';

import './result.style.scss';

const Result = () => {
  const [currentResults, setCurrentResults] = useState(results);
  const [currentPerPageResults, setCurrentPerPageResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [resultsPerPage] = useState(8);

  useEffect(() => {
    const filteredResults = currentResults.filter((result, index) => index < 8);
    updateCurrentPerPageResults(filteredResults);
  }, [currentResults]);

  const paginate = useCallback(
    (pageNumber) => {
      const indexOfLastResult = pageNumber * resultsPerPage;
      const indexOfFirstResult = indexOfLastResult - resultsPerPage;
      const paginateResults = currentResults.slice(
        indexOfFirstResult,
        indexOfLastResult,
      );
      setCurrentPage(pageNumber);
      setCurrentPerPageResults(paginateResults);
    },
    [currentResults, resultsPerPage],
  );

  const updateCurrentPerPageResults = (updatedResults) => {
    setCurrentPerPageResults(updatedResults);
  };

  const updateCurrentResults = useCallback((updatedResults) => {
    setCurrentResults(updatedResults);
  }, []);

  return (
    <div className="result">
      <div className="result__header">
        <h4>Exam Results</h4>
        <Search results={results} updateResults={updateCurrentResults} />
      </div>
      <ResultTable results={currentPerPageResults} />
      <Pagination
        currentPage={currentPage}
        resultsPerPage={resultsPerPage}
        totalResults={currentResults.length}
        paginate={paginate}
      />
    </div>
  );
};

export default Result;
