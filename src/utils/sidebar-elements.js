import {
  AiOutlineHome,
  AiFillStar,
  AiFillCheckCircle,
  AiFillFilePdf,
} from 'react-icons/ai';
import { FaCalendarCheck } from 'react-icons/fa';
import { HiChartSquareBar } from 'react-icons/hi';
import { BsSun, BsFillMicFill } from 'react-icons/bs';
import { MdHeadsetMic } from 'react-icons/md';
import { GiHandBag } from 'react-icons/gi';

export const sidebarElement = [
  {
    id: '0',
    href: '/student/dashboard',
    Icon: AiOutlineHome,
    parag: 'Dashboard',
  },
  {
    id: '2',
    href: '/student/check-in',
    Icon: FaCalendarCheck,
    parag: 'Check-In',
  },
  { id: '3', href: '/student/exams', Icon: HiChartSquareBar, parag: 'Exams' },
  {
    id: '4',
    href: '/student/exam-results',
    Icon: HiChartSquareBar,
    parag: 'Exam Results',
  },
  { id: '5', href: '/student/classes', Icon: BsSun, parag: 'Classes' },
  {
    id: '6',
    href: '/student/homework',
    Icon: HiChartSquareBar,
    parag: 'Homework',
  },
  {
    id: '7',
    href: '/student/hw-results',
    Icon: HiChartSquareBar,
    parag: 'HW Results',
  },
  {
    id: '8',
    href: '/student/certificate',
    Icon: AiFillCheckCircle,
    parag: 'Certificate',
  },
  { id: '9', href: '/student/resources', Icon: GiHandBag, parag: 'Resources' },
  {
    id: '10',
    href: '/student/speaking',
    Icon: BsFillMicFill,
    parag: 'Speaking',
  },
  {
    id: '11',
    href: '/student/speaking-reviews',
    Icon: AiFillStar,
    parag: 'Speaking Reviews',
  },
  {
    id: '12',
    href: '/student/listenings',
    Icon: MdHeadsetMic,
    parag: 'Listenings',
  },
  { id: '13', href: '/student/essays', Icon: AiFillFilePdf, parag: 'Essays' },
  {
    id: '14',
    href: '/student/essays-reviews',
    Icon: AiFillStar,
    parag: 'Essays Reviews',
  },
];
