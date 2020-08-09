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
import Landing from 'pages/Landing';
import Login from 'pages/Login';
import Media from 'pages/Media';
import Medium from 'pages/Medium';
import { Messages } from 'pages/Messages';
import { Network } from 'pages/Network';
import { Notifications } from 'pages/Notifications';
import Profile from 'pages/Profile';
import Search from 'pages/Search';
import SignUp from 'pages/SignUp';
import Tabs from 'pages/Tabs';
import { FC } from 'react';

interface AppPage {
  url: string;
  title: string;
  icon: string;
  component: FC<any>;
}

export const appPages: AppPage[] = [
  {
    title: 'Welcome',
    url: '/welcome',
    icon: icHome,
    component: Landing,
  },
  {
    title: 'Login',
    url: '/login',
    icon: icUser,
    component: Login,
  },
  {
    title: 'Sign Up',
    url: '/signup',
    icon: icUserPlus,
    component: SignUp,
  },

  {
    title: 'Media',
    url: '/media',
    icon: icCompass,
    component: Media,
  },
  {
    title: 'Medium ',
    url: '/medium',
    icon: icCompass,
    component: Medium,
  },
  {
    title: 'Explore',
    url: '/explore',
    icon: icCompass,
    component: Explore,
  },
  {
    title: 'Search',
    url: '/search',
    icon: icSearch,
    component: Search,
  },
  {
    title: 'Messages',
    url: '/messages',
    icon: icMessage,
    component: Messages,
  },
  {
    title: 'Messages Detail',
    url: '/messageDetails',
    icon: icMessage2,
    component: Messages,
  },
  {
    title: 'Ideas',
    url: '/ideas',
    icon: icBulb,
    component: Idea,
  },
  {
    title: 'Notifications',
    url: '/notifications',
    icon: icBell,
    component: Notifications,
  },
  {
    title: 'Network',
    url: '/network',
    icon: icSocial,
    component: Network,
  },
  {
    title: 'Profile',
    url: '/profile',
    icon: icUserCheck,
    component: Profile,
  },
  {
    title: 'Library',
    url: '/library',
    icon: icBookmark,
    component: Tabs,
  },
  {
    title: 'Progress',
    url: '/progress',
    icon: icPlane,
    component: Tabs,
  },
  {
    title: 'Tabs',
    url: '/tabs',
    icon: icMenu,
    component: Tabs,
  },
];
