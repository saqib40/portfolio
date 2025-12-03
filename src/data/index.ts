export type IconNameType = 'pull-request' | 'video' | 'github';

interface ILink {
  name: string;
  href: string;
  icon?: IconNameType;
  iconClass?: string;
  hidden?: true;
}

export const links: Array<ILink> = [
  {
    name: 'Classic and deep learning models for earthquake prediction',
    href: 'https://github.com/saqib40/Earthquake-Prediction/tree/containerizing',
    icon: 'github',
  },
  {
    name: 'Web RTC without stun server',
    href: 'https://github.com/saqib40/Maina',
    icon: 'github',
  },
  {
    name: 'Optimising inefficinet CI pipelines',
    href: 'https://github.com/saqib40/doraemon',
    icon: 'github',
  },
  {
    name: 'Readme Formatter for beautiful markdown',
    href: 'https://github.com/saqib40/readme-formatter',
    icon: 'github',
  },
  {
    name: 'Old take-u-forward with github links attached',
    href: 'https://github.com/saqib40/old-tuf',
    icon: 'github',
  }
];

interface WorkExperience {
  startDate: string;
  endDate: string;
  company: string;
  position: string;
}

export const experiences: WorkExperience[] = [
  {
    startDate: 'July 2025',
    endDate: 'Present',
    company: 'Waters Corporation',
    position: 'Software Engineer Intern',
  }
];
