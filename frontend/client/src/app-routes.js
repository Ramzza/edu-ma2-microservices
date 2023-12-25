import { withNavigationWatcher } from './contexts/navigation';
import {
  HomePage,
  TasksPage,
  ProfilePage,
  CalendarPage,
} from './pages';

const routes = [
  {
    path: '/tasks',
    component: TasksPage,
  },
  {
    path: '/profile',
    component: ProfilePage,
  },
  {
    path: '/home',
    component: HomePage,
  },
  {
    path: '/calendar',
    component: CalendarPage,
  },
];

export default routes.map((route) => ({
  ...route,
  component: withNavigationWatcher(route.component),
}));
