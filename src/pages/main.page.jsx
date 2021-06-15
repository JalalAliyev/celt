import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import LoadingSpinner from '../ui-components/loading-spinner/loading-spinner.ui-component';
import Modal from '../ui-components/modal/modal.ui-component';
import NotMatch from './not-match/not-match.page';

const Dashboard = lazy(() => import('./dashboard/dashboard.page'));
const Result = lazy(() => import('./result/result.page'));
const SpeakTitle = lazy(() => import('./speak-title/speak-title.page'));
const Speaking = lazy(() => import('./speaking/speaking.page'));

const Main = () => {
  return (
    <div className="main">
      <Suspense
        fallback={
          <Modal className="loading-modal">
            <LoadingSpinner />
          </Modal>
        }>
        <Switch>
          <Route path="/student/dashboard" component={Dashboard} />
          <Route path="/student/exam-results" component={Result} />
          <Route path="/student/speaking" exact component={Speaking} />
          <Route path="/student/speaking/:speakingId" component={SpeakTitle} />
          <Route path="*" render={() => <NotMatch />} />
        </Switch>
      </Suspense>
    </div>
  );
};

export default Main;
