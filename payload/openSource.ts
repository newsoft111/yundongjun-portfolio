import { IOpenSource } from '../component/openSource/IOpenSource';

const openSource: IOpenSource.Payload = {
  disable: false,
  list: [
    {
      id: 0,
      title: 'Linux Kernal',
      descriptions: [
        {
          content: 'Regular contributor to kernel patches.',
        },
        {
          content: 'Active member of kernel security audit team.',
        },
      ],
    },
    {
      id: 1,
      title: 'GNOME',
      descriptions: [
        {
          content: 'Contributor to UX improvements for system utilities.',
        },
        {
          content: 'https://github.com/GNOME',
          href: 'https://github.com/GNOME',
        },
      ],
    },
    {
      id: 2,
      title: 'node',
      descriptions: [
        { content: 'Node.js JavaScript runtime' },
        { content: 'Contributor' },
        {
          content: 'https://github.com/nodejs/node',
          href: 'https://github.com/nodejs/node',
        },
        {
          content: 'Github Stars: ',
          postImage: 'https://img.shields.io/github/stars/nodejs/node.svg?style=popout',
        },
      ],
    },
    {
      id: 3,
      title: 'NestJS',
      descriptions: [
        {
          content: 'A progressive Node.js framework',
        },
        {
          content:
            'for building efficient, scalable, and enterprise-grade server-side applications',
        },
        {
          content: 'Contributor',
        },
        {
          content: 'https://github.com/nestjs/nest',
          href: 'https://github.com/nestjs/nest',
        },
        {
          content: 'Monthly Download: ',
          postImage: 'https://img.shields.io/npm/dm/@nestjs/core.svg',
        },
        {
          content: 'Github Stars: ',
          postImage: 'https://img.shields.io/github/stars/nestjs/nest.svg?style=popout',
        },
      ],
    },
  ],
};

export default openSource;
