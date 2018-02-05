const Home = () => import('@/views/subhome/index.vue')
const Index = () => import('@/views/subhome/homePage/index.vue')
const Blog = () => import('@/views/subhome/blog/index.vue')
const Center = () => import('@/views/subhome/center/index.vue')

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
