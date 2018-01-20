const Home = () => import('@/pages/subhome/home/index.vue')
const Index = () => import('@/pages/subhome/home/homePage/index.vue')
const Blog = () => import('@/pages/subhome/home/blog/index.vue')
const Center = () => import('@/pages/subhome/home/center/index.vue')

var HomePage = [
  {
    path: '/home',
    name: 'home',
    component: Home,
    redirect: '/home/index',
    children: [
      {
        path: '/home/index',
        name: 'homePage',
        component: Index
      }, {
        path: '/home/blog',
        name: 'blog',
        component: Blog
      }, {
        path: '/home/center',
        name: 'center',
        component: Center
      }
    ]
  }
]

export default HomePage
