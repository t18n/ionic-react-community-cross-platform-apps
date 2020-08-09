import {
  icAlien,
  icBell,
  icBookmark,
  icBulb,
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
import Landing from 'pages/Landing';
import { Messages } from 'pages/Messages';
import { Network } from 'pages/Network';
import { Notifications } from 'pages/Notifications';
import Tabs from 'pages/Tabs';

import { Home } from '../pages-old/Home/index';
import { Login } from '../pages-old/Login/index';
import { Idea } from '../pages/Idea/index';
import Profile from '../pages/Profile/index';
import Search from '../pages/Search/index';
import SignUp from '../pages/SignUp/index';

interface AppPage {
  url: string;
  title: string;
  icon: string;
  component: React.FunctionComponent<any> | any;
}

export const appPages: AppPage[] = [
  {
    title: 'Welcome',
    url: '/welcome',
    icon: icAlien,
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
    title: 'Home',
    url: '/home',
    icon: icHome,
    component: Home,
  },
  {
    title: 'Explore',
    url: '/explore',
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
