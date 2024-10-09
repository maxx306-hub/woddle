import { ImageSourcePropType } from 'react-native';

export interface InfoCard {
  title: string;
  mainText: string;
  time: string;
  background: string;
}

export enum ChildGender {
  male = 'male',
  female = 'female',
  other = 'other',
}

export interface SlideItem {
  image: ImageSourcePropType;
  name: string;
  birthday: Date;
  gender: ChildGender;
}
