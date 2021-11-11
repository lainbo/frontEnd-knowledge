import { createRouter, createWebHashHistory } from 'vue-router'

const Layout = () => import('@/views/Layout/index.vue')
const WelcomePage = () => import('@/views/Home/WelcomePage.vue')
const KnowLedgeList = () => import('@/views/Knowledge/KnowLedgeList.vue')
const LeetCodeList = () => import('@/views/LeetCode/LeetCodeList.vue')
const LeetCodeDetails = () => import('@/views/LeetCode/LeetCodeDetails.vue')

const routes = [
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    redirect: { name: 'WelcomePage' },
    meta: { title: '首页' },
    children: [
      {
        path: 'welcome',
        name: 'WelcomePage',
        component: WelcomePage,
        meta: { title: '温故而知新' }
      },
      {
        path: 'knowledge',
        name: 'KnowLedgeList',
        component: KnowLedgeList,
        meta: { title: '前端知识整理' }
      },
      {
        path: 'leetcode-list',
        name: 'LeetCodeList',
        component: LeetCodeList,
        meta: { title: 'LeetCode列表' }
      },
      {
        path: 'leetcode-details',
        name: 'LeetCodeDetails',
        component: LeetCodeDetails,
        meta: { title: 'LeetCode详情' }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
