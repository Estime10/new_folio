export interface MenuItem {
  id: number;
  label: string;
  href: string;
  color: string;
}

export interface HeaderProps {
  accentColor: string;
}

export interface CentralImageProps {
  accentColor: string;
  showImage: boolean;
}

export interface NavigationProps {
  menuItems: {
    id: number;
    label: string;
    href: string;
    color: string;
  }[];
  accentColor: string;
  onMenuClick: (color: string, id: number) => void;
}

export interface ProfessionProps {
  accentColor: string;
}

export interface SocialIconsProps {
  accentColor: string;
}
