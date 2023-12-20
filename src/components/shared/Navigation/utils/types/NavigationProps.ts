interface NavElement {
  title: string;
  path: string;
}

export interface NavigationProps {
  list: NavElement[];
  distance?: string;
  isLink?: boolean;
  color?: string;
}
