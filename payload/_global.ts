import favicon from '../asset/favicon.ico';
import previewImage from '../asset/preview.png';
import { IGlobal } from '../component/common/IGlobal';

const title = 'Resume: Dongjun Yun';
const description = "This is Back-end Developer Dongjun's Resume. Thank you";

export const _global: IGlobal.Payload = {
  favicon,
  headTitle: title,
  seo: {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: previewImage,
          width: 800,
          height: 600,
          alt: 'OpenGraph Image Sample.png',
        },
      ],
      type: 'profile',
      profile: {
        firstName: 'Lorem',
        lastName: 'ipsum',
        username: 'lorem',
        gender: 'female',
      },
    },
  },
};
