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
}

export interface NavigationProps {
  menuItems: MenuItem[];
  accentColor: string;
  onMenuClick: (color: string) => void;
}

export interface ProfessionProps {
  accentColor: string;
}

export interface SocialIconsProps {
  accentColor: string;
}
