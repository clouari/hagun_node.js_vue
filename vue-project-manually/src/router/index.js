import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DataBinding from '../views/DataBinding.vue'
import DataBindingInputText from '../views/DataBindingInputText.vue'
import DataBindingButton from '../views/DataBindingButton'
import DataBindingList from '../views/DataBindingList'
import RenderingIf from '../views/RenderingIf'
import EventClick from '../views/EventClick'
import TheCw from '../views/TheCw'
import TheWatch from '../views/TheWatch'

// path 와 name, component 지정
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting //라우트 레벨에서 코드를 분할하는 방법
    // this generates a separate chunk (about.[hash].js) for this route // 이 라우트에 대한 chunk 파일이 분리되어 생성된다.
    // which is lazy-loaded when the route is visited. // 이 라우트에 방문 했을 때 lazy-loaded(지연로드) 된다.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },

  // DataBinding import 과정
  {
    path: '/databinding',
    name: 'DataBinding',
    component: DataBinding
  },
  {
    path: '/databindinginputtext',
    name: 'DataBindingInputText',
    component: DataBindingInputText
  },
  {
    path: '/databindingbutton',
    name: 'DataBindingButton',
    component: DataBindingButton
  },
  {
    path: '/databindinglist',
    name: 'DataBindList',
    component: DataBindingList
  },
  {
    path: '/renderingif',
    name: 'RenderingIf',
    component: RenderingIf
  },
  {
    path: '/eventclick',
    name: 'EventClick',
    component: EventClick
  },
  {
    path: '/thecw',
    name: 'TheCw',
    component: TheCw
  },
  {
    path: '/thewatch',
    name: 'TheWatch',
    component: TheWatch
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
