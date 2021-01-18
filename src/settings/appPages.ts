import { t } from '@lingui/macro';
import {
  icBell,
  icBulb,
  icCompass,
  icHome,
  icMessage,
  icMessage2,
  icSearch,
  icSocial,
  icUser,
  icUserCheck,
  icUserPlus,
} from 'components/atoms/Icon';
import { Home } from 'pages/Home';
import { Idea } from 'pages/Idea';
import { Login } from 'pages/Login';
import Media from 'pages/Media';
import Medium from 'pages/Medium';
import { Messages } from 'pages/Messages';
import Messaging from 'pages/Messaging';
import { Network } from 'pages/Network';
import { Notifications } from 'pages/Notifications';
import Profile from 'pages/Profile';
import Search from 'pages/Search';
import { Signup } from 'pages/Signup';
import { FC } from 'react';

interface AppPage {
  url: string;
  title: string;
  icon: string;
  component: FC<any>;
  showInSidebar: boolean;
}

export const appPages: Record<string, AppPage> = {
  home: {
    title: t`page.title.explore`,
    url: '/',
    icon: icHome,
    component: Home,
    showInSidebar: false,
  },
  login: {
    title: t`page.title.login`,
    url: '/login',
    icon: icUser,
    component: Login,
    showInSidebar: false,
  },
  signup: {
    title: t`page.title.signup`,
    url: '/signup',
    icon: icUserPlus,
    component: Signup,
    showInSidebar: false,
  },
  media: {
    title: t`page.title.media`,
    url: '/media',
    icon: icCompass,
    component: Media,
    showInSidebar: true,
  },
  medium: {
    title: t`page.title.medium`,
    url: '/media/:slug',
    icon: icCompass,
    component: Medium,
    showInSidebar: false,
  },
  search: {
    title: t`page.title.search`,
    url: '/search',
    icon: icSearch,
    component: Search,
    showInSidebar: true,
  },
  messages: {
    title: t`page.title.messages`,
    url: '/messages',
    icon: icMessage,
    component: Messages,
    showInSidebar: true,
  },
  messageDetails: {
    title: t`page.title.message`,
    url: '/messageDetails',
    icon: icMessage2,
    component: Messaging,
    showInSidebar: false,
  },
  ideas: {
    title: t`page.title.ideas`,
    url: '/ideas/:slug',
    icon: icBulb,
    component: Idea,
    showInSidebar: true,
  },
  notifications: {
    title: t`page.title.notifications`,
    url: '/notifications',
    icon: icBell,
    component: Notifications,
    showInSidebar: true,
  },
  network: {
    title: t`page.title.network`,
    url: '/network',
    icon: icSocial,
    component: Network,
    showInSidebar: true,
  },
  profile: {
    title: t`page.title.profile`,
    url: '/profile/:slug',
    icon: icUserCheck,
    component: Profile,
    showInSidebar: false,
  },
};
