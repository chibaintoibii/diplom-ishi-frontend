export interface MenuItem {
  title: string;
  link?: string | undefined;
  icon: any;
  handler: any
}

export interface SelectOption {
  name: string;
  value: number | null;
}