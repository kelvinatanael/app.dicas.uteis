
import HomePage from '../pages/Home.vue';
import TipsIntern from '../pages/TipsIntern.vue';
import Tips from '../pages/Tips.vue';
import FiltersTips from '../pages/FiltersTips.vue';
import NewPost from '../pages/NewPost.vue';
import RegisterTip from '../pages/RegisterTip.vue';
import Contact from '../pages/Contact.vue';
import Login from '../pages/Login.vue';
import Register from '../pages/Register.vue';
import ProfilePage from '../pages/Profile.vue';
import EditUserPage from '../pages/EditUser.vue';
import ChangePassword from '../pages/ChangePassword.vue';
import WishlistPage from '../pages/Wishlist.vue';
import ProfilePosts from '../pages/ProfilePosts.vue';

import NotFoundPage from '../pages/404.vue';

var routes = [
  {
    path: '/',
    component: HomePage,
    name: 'home'
  },
  {
    path: '/tips-intern/:tipId/posts/:postId',
    component: TipsIntern,
    name: 'tips-intern'
  },
  {
    path: '/tips/:tipId',
    component: Tips,
    name: 'tips'
  },
  {
    path: '/filters-tips/',
    component: FiltersTips,
    name: 'filters-tips'
  },
  {
    path: '/new-post/',
    component: NewPost,
    name: 'new-post'
  },
  {
    path: '/register-tip/',
    component: RegisterTip,
    name: 'register-tip'
  },
  {
    path: '/contact/',
    component: Contact,
    name: 'contact'
  },
  {
    path: '/login/',
    component: Login,
    name: 'login'
  },
  {
    path: '/register/',
    component: Register,
    name: 'register',
  },
  {
    path: '/change-password/',
    component: ChangePassword,
    name: 'changePassword'
  },
  {
    path: '/profile/',
    component: ProfilePage,
    name: 'pageProfile'
  },
  {
    path: '/edit-user/',
    component: EditUserPage,
    name: 'editUser'
  },
  {
    path: '/wishlist/',
    component: WishlistPage,
    name: 'wishlist'
  },
  {
    path: '/profile-posts/:userId/',
    component: ProfilePosts,
    name: 'profilePosts'
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];

export default routes;
