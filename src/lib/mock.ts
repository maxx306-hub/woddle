import { ChildGender, InfoCard, SlideItem } from './types';

export const MOCK_INFO_CARDS: InfoCard[] = [
  {
    title: 'Weight',
    mainText: '15 lbs \n3 oz',
    time: '1:00 PM Dec 05 2023',
    background: '#FFF5DC',
  },
  {
    title: 'Diaper',
    mainText: 'Pee Medium',
    time: '2h 55m ago',
    background: '#EFF1FF',
  },
  {
    title: 'Feeding',
    mainText: 'Formula 5oz',
    time: '2h 30m ago',
    background: '#FFEEE7',
  },
  {
    title: 'Sleep',
    mainText: '2h 20m',
    time: '5 hours ago',
    background: '#F8EEFF',
  },
] as const;

export const MOCK_SLIDE_ITEMS: SlideItem[] = [
  {
    image: require('../../assets/images/people1.png'),
    name: 'John Doe',
    birthday: new Date(2022, 1, 1),
    gender: ChildGender.male,
  },
  {
    image: require('../../assets/images/people2.png'),
    name: 'Jane Smith',
    birthday: new Date(2023, 5, 15),
    gender: ChildGender.female,
  },
] as const;
