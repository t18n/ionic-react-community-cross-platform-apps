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
import Tour from 'pages/Tour';
import { FC } from 'react';

interface AppPage {
  url: string;
  title: string;
  icon: string;
  component: FC<any>;
}

export const appPages: Record<string, AppPage> = {
  home: {
    title: t`page.title.explore`,
    url: '/',
    icon: icHome,
    component: Home,
  },
  welcome: {
    title: t`page.title.tour`,
    url: '/welcome',
    icon: icHome,
    component: Tour,
  },
  login: {
    title: t`page.title.login`,
    url: '/login',
    icon: icUser,
    component: Login,
  },
  signup: {
    title: t`page.title.signup`,
    url: '/signup',
    icon: icUserPlus,
    component: Signup,
  },
  media: {
    title: t`page.title.media`,
    url: '/media',
    icon: icCompass,
    component: Media,
  },
  medium: {
    title: t`page.title.medium`,
    url: '/medium/:slug',
    icon: icCompass,
    component: Medium,
  },
  search: {
    title: t`page.title.search`,
    url: '/search',
    icon: icSearch,
    component: Search,
  },
  messages: {
    title: t`page.title.messages`,
    url: '/messages',
    icon: icMessage,
    component: Messages,
  },
  messageDetails: {
    title: t`page.title.message`,
    url: '/messageDetails',
    icon: icMessage2,
    component: Messaging,
  },
  ideas: {
    title: t`page.title.ideas`,
    url: '/ideas',
    icon: icBulb,
    component: Idea,
  },
  notifications: {
    title: t`page.title.notifications`,
    url: '/notifications',
    icon: icBell,
    component: Notifications,
  },
  network: {
    title: t`page.title.network`,
    url: '/network',
    icon: icSocial,
    component: Network,
  },
  profile: {
    title: t`page.title.profile`,
    url: '/profile',
    icon: icUserCheck,
    component: Profile,
  },
};
