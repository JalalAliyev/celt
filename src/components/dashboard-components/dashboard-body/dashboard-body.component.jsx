import React from 'react';
import BodyElement from '../dash-body-element/dash-body-element.component';

import { AiFillStar, AiFillFilePdf } from 'react-icons/ai';
import { FaCalendarCheck, FaBookOpen } from 'react-icons/fa';
import { HiChartSquareBar } from 'react-icons/hi';
import { BsFillMicFill, BsPencilSquare } from 'react-icons/bs';
import { MdHeadsetMic } from 'react-icons/md';

import './dashboard-body.style.scss';

const DashboardBody = () => {
  return (
    <div className="dashboard-body">
      <BodyElement Icon={FaCalendarCheck} link="/student/check-in">
        My Check-In
      </BodyElement>
      <BodyElement Icon={HiChartSquareBar} link="/student/check-in">
        Take an Exam
      </BodyElement>
      <BodyElement Icon={HiChartSquareBar} link="/student/check-in">
        Exam Results
      </BodyElement>
      <BodyElement Icon={FaBookOpen} link="/student/check-in">
        Classes
      </BodyElement>
      <BodyElement Icon={HiChartSquareBar} link="/student/check-in">
        Homework
      </BodyElement>
      <BodyElement Icon={BsPencilSquare} link="/student/check-in">
        HW Results
      </BodyElement>
      <BodyElement Icon={AiFillFilePdf} link="/student/check-in">
        Resources
      </BodyElement>
      <BodyElement Icon={BsFillMicFill} link="/student/check-in">
        Speakings
      </BodyElement>
      <BodyElement Icon={AiFillStar} link="/student/check-in">
        Speaking Reviews
      </BodyElement>
      <BodyElement Icon={MdHeadsetMic} link="/student/check-in">
        Listenings
      </BodyElement>
      <BodyElement Icon={AiFillFilePdf} link="/student/check-in">
        Essays
      </BodyElement>
      <BodyElement Icon={AiFillStar} link="/student/check-in">
        Essay Reviews
      </BodyElement>
    </div>
  );
};

export default DashboardBody;
