export interface Lap {
  id: number;
  time: number;
  split: number;
}

export interface TimeDisplay {
  minutes: string;
  seconds: string;
  milliseconds: string;
}

export interface NavItem {
  label: string;
  href: string;
  icon: any;
}

export interface SectionProps {
  id: string;
  title: string;
  subtitle: string;
  content: string;
  bgColor: string;
}