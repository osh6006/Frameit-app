import { faker } from '@faker-js/faker';

export interface FakeFeed {
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

export interface FakeRecruit {
  id: string;
  title: string;
  image: string;
  address: string;
  date: string;
  time: string;
  tags: string[];
  isBookmarked: boolean;
  role: 'model' | 'author';
}

export const generateRecruits = (count: number = 10): FakeRecruit[] => {
  return Array.from({ length: count }, () => {
    const startTime = faker.date.between({
      from: '2024-02-09T09:00:00.000Z',
      to: '2024-02-09T18:00:00.000Z',
    });

    const endTime = new Date(
      startTime.getTime() + faker.number.int({ min: 60, max: 180 }) * 60000
    );

    const tagCount = faker.number.int({ min: 1, max: 3 });
    const tags = Array.from({ length: tagCount }, () =>
      faker.helpers.arrayElement([
        '포트폴리오',
        '화보',
        '프로필',
        '웨딩',
        '바디프로필',
        '프로필사진',
        '컨셉촬영',
        '광고촬영',
      ])
    );

    return {
      id: faker.string.uuid(),
      title: faker.lorem.sentence({
        min: 1,
        max: 1,
      }),
      image: faker.image.avatarGitHub(),
      address: faker.location.streetAddress(true),
      date: `${faker.date.soon().getMonth() + 1}/${faker.date.soon().getDate()}`,
      time: `${startTime.getHours().toString().padStart(2, '0')}:${startTime.getMinutes().toString().padStart(2, '0')} ~ ${endTime.getHours().toString().padStart(2, '0')}:${endTime.getMinutes().toString().padStart(2, '0')}`,
      tags: [...new Set(tags)],
      isBookmarked: faker.datatype.boolean(),
      role: faker.helpers.arrayElement(['model', 'author']),
    };
  });
};
