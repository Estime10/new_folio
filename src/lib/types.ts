export interface MenuItem {
  id: number;
  label: string;
  href: string;
  color: string;
}

export interface HeaderProps {
  accentColor: string;
  onToggleMobileMenu: () => void;
}

export interface CentralImageProps {
  accentColor: string;
  showImage: boolean;
  isHome: boolean;
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
  isMobileMenuOpen: boolean;
  onToggleMobileMenu: () => void;
}

export interface ProfessionProps {
  accentColor: string;
}

export interface SocialIconsProps {
  accentColor: string;
}
