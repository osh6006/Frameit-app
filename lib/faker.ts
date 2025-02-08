import { faker } from '@faker-js/faker';

interface FakeFeed {
  id: string;
  image: string;
  role: 'author' | 'model';
  isPremium: boolean;
}

export function generateFeeds(count: number = 10): FakeFeed[] {
  return Array.from({ length: count }, () => ({
    id: faker.string.uuid(),
    image: faker.image.urlPicsumPhotos({ blur: 0 }),
    role: faker.helpers.arrayElement(['author', 'model'] as const),
    isPremium: faker.datatype.boolean(),
  }));
}
