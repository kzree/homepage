import { Seo } from '@/types/seo';
import {
  IconBrandGolang,
  IconBrandReact,
  IconBrandTailwind,
  IconBrandTypescript,
  IconSql,
} from '@tabler/icons-react';

export const seo: Seo = {
  title: 'Hi, I am Erkki',
  description: 'This is my portfolio website. You can learn more about me and my skills',
};

export const majorSkills = {
  title: 'My favourite technologies to use',
  skills: [
    {
      icon: IconBrandGolang,
      title: 'GoLang',
      description:
        'My current favourite programming language and go to tool for building backend services and commandline tools. I have been using it since 2021 now and been loving it ever since.',
    },
    {
      icon: IconSql,
      title: 'PostgreSQL',
      description: 'Currently my go to choice for an easy to use but powerful database engine.',
    },
    {
      icon: IconBrandTypescript,
      title: 'TypeScript',
      description:
        'After learning JavaScript, I quickly moved over to TypeScript. My main draw to TypeScript was its type system as I am not a fan of languages that are not strongly typed. I have been using it in both frontend and backend projects.',
    },
    {
      icon: IconBrandReact,
      title: 'React',
      description:
        'At my first job I used React almost every day to build web applications and websites. Nowadays I use it along with NextJS due to its speed and flexibility.',
    },
    {
      icon: IconBrandTailwind,
      title: 'TailwindCSS',
      description:
        'I used to write all of my CSS using fancy tools like SCSS. But nowadays I prefer the speed of tailwind. Before configuring took a lot of time for new projects but thanks to tailwind this process has sped up a lot.',
    },
  ],
};

export const otherSkills = {
  title: 'Other technologies I know and use',
  columns: [
    {
      title: 'Frontend',
      items: ['CSS', 'SCSS', 'Angular 2', 'Svelte'],
    },
    {
      title: 'Backend',
      items: ['Java', 'Python', 'MySQL', 'MongoDB'],
    },
    {
      title: 'Other',
      items: ['Docker', 'AWS', 'Digital Ocean', 'Ansible', 'Gitlab CI', 'BB pipelines'],
    },
  ],
};
