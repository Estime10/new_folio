'use client';

import dynamic from 'next/dynamic';
import type {
  CentralImageProps,
  HeaderProps,
  NavigationProps,
  ProfessionProps,
  SocialIconsProps,
} from '../../../lib/types';

export const Header = dynamic<HeaderProps>(() => import('./Header'), { ssr: false });
export const CentralImage = dynamic<CentralImageProps>(() => import('./CentralImage'), {
  ssr: false,
});
export const Navigation = dynamic<NavigationProps>(() => import('./Navigation'), { ssr: false });
export const Profession = dynamic<ProfessionProps>(() => import('./Profession'), { ssr: false });
export const SocialIcons = dynamic<SocialIconsProps>(() => import('./SocialIcons'), { ssr: false });
