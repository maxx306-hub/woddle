import { MOCK_INFO_CARDS, MOCK_SLIDE_ITEMS } from './mock';
import { InfoCard, SlideItem } from './types';

function mockDelay<T>(data: T, delay: number): Promise<T> {
  return new Promise(resolve => {
    setTimeout(() => resolve(data), delay);
  });
}

// Function to fetch info cards from the backend
export async function fetchCards(): Promise<InfoCard[]> {
  // TODO: Implement API call to fetch info cards
  // 1. Use the fetch API to make a GET request to the relevant endpoint (e.g., `https://api.example.com/info-cards`).
  // 2. Check if the response is successful. If not, handle the error accordingly.
  // 3. Parse the response JSON into an array of InfoCard objects.
  // 4. Handle any errors that may occur during the request or parsing process.

  // For now, return mock data with a delay
  return mockDelay(MOCK_INFO_CARDS, 5000);
}

// Function to fetch slide items from the backend
export async function fetchSlideItems(): Promise<SlideItem[]> {
  // TODO: Implement API call to fetch slide items
  // 1. Use the fetch API to make a GET request to the relevant endpoint (e.g., `https://api.example.com/slide-items`).
  // 2. Check if the response is successful. If not, handle the error accordingly.
  // 3. Parse the response JSON into an array of SlideItem objects.
  // 4. Handle any errors that may occur during the request or parsing process.

  // For now, return mock data with a delay
  return mockDelay(MOCK_SLIDE_ITEMS, 1000);
}
