const Home = () => import('@/views/subhome')
const Index = () => import('@/views/subhome/homePage')
const Blog = () => import('@/views/subhome/blog')
const Center = () => import('@/views/subhome/center')
const Project = () => import('@/views/subhome/project')

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
      }, {
        path: '/home/project',
        name: 'project',
        component: Project
      }
    ]
  }
]

export default HomePage
