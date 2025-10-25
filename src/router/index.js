import { createRouter, createWebHistory } from 'vue-router'

// Lazy-load page components to keep bundle small
const AllProductsPage = () => import('@/pages/AllProductsPage.vue')
const ItemDetailPage = () => import('@/pages/ItemDetailPage.vue')
const HelpCenterPage = () => import('@/pages/HelpCenterPage.vue')
const OperationGuidePage = () => import('@/pages/OperationGuidePage.vue')
const FaqDetailPage = () => import('@/pages/FAQDetailPage.vue')
const FeedbackPage = () => import('@/pages/FeedbackPage.vue')

const routes = [
  { path: '/', name: 'home', component: AllProductsPage },
  { path: '/all-products', name: 'all-products', component: AllProductsPage },
  { path: '/help-center', name: 'help-center', component: HelpCenterPage },
  { path: '/operation-guide', name: 'operation-guide', component: OperationGuidePage },
  { path: '/faq/:id', name: 'faq-detail', component: FaqDetailPage, props: true },
  { path: '/item/:id', name: 'item-detail', component: ItemDetailPage, props: true },
  { path: '/feedback', name: 'feedback', component: FeedbackPage },
  // fallback — route to home
  { path: '/:pathMatch(.*)*', redirect: '/' },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
