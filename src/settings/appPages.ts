import {
  icBell,
  icBookmark,
  icBulb,
  icCompass,
  icHome,
  icMenu,
  icMessage,
  icMessage2,
  icPlane,
  icSearch,
  icSocial,
  icUser,
  icUserCheck,
  icUserPlus,
} from 'components/atoms/Icon';
import { Explore } from 'pages/Explore';
import { Idea } from 'pages/Idea';
import { Login } from 'pages/Login';
import Media from 'pages/Media';
import Medium from 'pages/Medium';
import { Messages } from 'pages/Messages';
import { Network } from 'pages/Network';
import { Notifications } from 'pages/Notifications';
import Profile from 'pages/Profile';
import Search from 'pages/Search';
import { Signup } from 'pages/Signup';
import Tabs from 'pages/Tabs';
import Tour from 'pages/Tour';
import { FC } from 'react';

import { Home } from '../pages/Home/index';

interface AppPage {
  url: string;
  title: string;
  icon: string;
  component: FC<any>;
}

export const appPages: Record<string, AppPage> = {
  home: {
    title: 'Home',
    url: '/',
    icon: icHome,
    component: Home,
  },
  welcome: {
    title: 'Welcome',
    url: '/welcome',
    icon: icHome,
    component: Tour,
  },
  login: {
    title: 'Log in',
    url: '/login',
    icon: icUser,
    component: Login,
  },
  signup: {
    title: 'Sign up',
    url: '/signup',
    icon: icUserPlus,
    component: Signup,
  },
  media: {
    title: 'Media',
    url: '/media',
    icon: icCompass,
    component: Media,
  },
  medium: {
    title: 'Medium',
    url: '/medium',
    icon: icCompass,
    component: Medium,
  },
  title: {
    title: 'Explore',
    url: '/explore',
    icon: icCompass,
    component: Explore,
  },
  search: {
    title: 'Search',
    url: '/search',
    icon: icSearch,
    component: Search,
  },
  messages: {
    title: 'Messages',
    url: '/messages',
    icon: icMessage,
    component: Messages,
  },
  messageDetails: {
    title: 'Messages Detail',
    url: '/messageDetails',
    icon: icMessage2,
    component: Messages,
  },
  ideas: {
    title: 'Ideas',
    url: '/ideas',
    icon: icBulb,
    component: Idea,
  },
  notifications: {
    title: 'Notifications',
    url: '/notifications',
    icon: icBell,
    component: Notifications,
  },
  network: {
    title: 'Network',
    url: '/network',
    icon: icSocial,
    component: Network,
  },
  profile: {
    title: 'Profile',
    url: '/profile',
    icon: icUserCheck,
    component: Profile,
  },
};
