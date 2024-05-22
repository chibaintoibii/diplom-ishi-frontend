export interface MenuItem {
  title: string;
  link?: string;
  icon: any;
  handler?: any
}

export interface SelectOption {
  name: string;
  value: number | null;
}