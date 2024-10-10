import { useQuery } from '@tanstack/react-query';
import { InfoCard as InfoCardType, SlideItem } from '../lib/types.ts';
import { fetchCards, fetchSlideItems } from '../lib/api.ts';

export const useInfoCards = () => {
  return useQuery<InfoCardType[], Error>({
    queryKey: ['infoCards'],
    queryFn: fetchCards,
  });
};

export const useSlideItems = () => {
  return useQuery<SlideItem[], Error>({
    queryKey: ['slideItems'],
    queryFn: fetchSlideItems,
  });
};
