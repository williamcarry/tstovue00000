<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import SiteHeader from './components/SiteHeader.vue'
import CategoryNavBar from './components/CategoryNavBar.vue'
import HeroBanner from './components/HeroBanner.vue'
import CategorySidebar from './components/CategorySidebar.vue'
import SiteFooter from './components/SiteFooter.vue'
import RightFloatNav from './components/RightFloatNav.vue'
import LoginPage from './pages/LoginPage.vue'
import RegisterPage from './pages/RegisterPage.vue'
import GettingStartedPage from './pages/GettingStartedPage.vue'
import HelpCenterPage from './pages/HelpCenterPage.vue'
import FAQDetailPage from './pages/FAQDetailPage.vue'
import ContactUsPage from './pages/ContactUsPage.vue'
import AboutSaleyeePage from './pages/AboutSaleyeePage.vue'
import VATPolicyPage from './pages/VATPolicyPage.vue'
import FeedbackPage from './pages/FeedbackPage.vue'
import DistributorsPage from './pages/DistributorsPage.vue'
import SupplierPage from './pages/SupplierPage.vue'
import PartnersPage from './pages/PartnersPage.vue'
import ItemDetailPage from './pages/ItemDetailPage.vue'
import UserCenterPage from './pages/UserCenterPage.vue'
import ProductManagementPage from './pages/ProductManagementPage.vue'
import ListingPushPage from './pages/ListingPushPage.vue'
import ListingProductsPage from './pages/ListingProductsPage.vue'
import BrandAuthPage from './pages/BrandAuthPage.vue'
import ProductNotificationPage from './pages/ProductNotificationPage.vue'
import CartPage from './pages/CartPage.vue'
import AllProductsPage from './pages/AllProductsPage.vue'
import HotSalesPage from './pages/HotSalesPage.vue'
import DiscountSalePage from './pages/DiscountSalePage.vue'
import NewPage from './pages/NewPage.vue'
import DirectDeliveryPage from './pages/DirectDeliveryPage.vue'
import MembershipPage from './pages/MembershipPage.vue'
import AllCategoriesPage from './pages/AllCategoriesPage.vue'
import OperationGuidePage from './pages/OperationGuidePage.vue'
import PlatformBoutique from './components/PlatformBoutique.vue'
import FestivalDecorations from './components/FestivalDecorations.vue'
import NewProductsBanner from './components/NewProductsBanner.vue'
import HomeRecommendations from './components/HomeRecommendations.vue'
import SeasonalProducts from './components/SeasonalProducts.vue'
import PlatformProducts from './components/PlatformProducts.vue'
import BestsellerProducts from './components/BestsellerProducts.vue'
import BrandProducts from './components/BrandProducts.vue'
import { t } from '@/i18n'

const heroHeight = ref(undefined)
const normalizedPath = window.location.pathname.replace(/\/+$/, '') || '/'
const isLogin = normalizedPath === '/login'
const isRegister = normalizedPath === '/register'
const isGettingStarted = normalizedPath === '/getting-started' || normalizedPath === '/getting-started.html'
const isHelpCenter = normalizedPath === '/help-center' || normalizedPath === '/help-center.html'
const isOperationGuide = normalizedPath === '/operation-guide' || normalizedPath === '/operation-guide.html'
const isFAQDetail = normalizedPath.match(/^\/faq\//) !== null
const isContactUs = normalizedPath === '/contact-us' || normalizedPath === '/contact-us.html'
const isAboutSaleyee = normalizedPath === '/about-saleyee' || normalizedPath === '/about-saleyee.html'
const isVATPolicy = normalizedPath === '/vat-policy' || normalizedPath === '/vat-policy.html'
const isFeedback = normalizedPath === '/feedback' || normalizedPath === '/feedback.html'
const isDistributors = normalizedPath === '/distributors' || normalizedPath === '/distributors.html'
const isSupplier = normalizedPath === '/supplier' || normalizedPath === '/supplier.html'
const isPartners = normalizedPath === '/partners' || normalizedPath === '/partners.html'
const isItemDetail = normalizedPath.match(/^\/item\//) !== null
const isUserCenter = normalizedPath === '/user-center' || normalizedPath === '/user-center.html'
const isProductManagement = normalizedPath === '/product-management' || normalizedPath === '/product-management.html'
const isListingPush = normalizedPath === '/listing-push' || normalizedPath === '/listing-push.html'
const isListingProducts = normalizedPath === '/listing-products' || normalizedPath === '/listing-products.html'
const isBrandAuth = normalizedPath === '/brand-auth' || normalizedPath === '/brand-auth.html'
const isProductNotification = normalizedPath === '/product-notification' || normalizedPath === '/product-notification.html'
const isCart = normalizedPath === '/cart' || normalizedPath === '/cart.html'
const isAllProducts = normalizedPath === '/allsearch' || normalizedPath === '/allsearch.html' || normalizedPath === '/all-products'
const isHotSales = normalizedPath === '/hot-sales' || normalizedPath === '/hot-sales.html'
const isDiscountSale = normalizedPath === '/discount-sale' || normalizedPath === '/discount-sale.html'
const isNewPage = normalizedPath === '/new' || normalizedPath === '/new.html'
const isDirectDelivery = normalizedPath === '/direct-delivery' || normalizedPath === '/direct-delivery.html'
const isMembership = normalizedPath === '/membership' || normalizedPath === '/membership.html'
const isAllCategories = normalizedPath === '/all-categories' || normalizedPath === '/all-categories.html'

const newImages = [
  'https://img-accelerate.saleyee.cn/Resources/GoodsImages/2023/202309/2a764166-da43-45a1-9fba-ceea6243b6b7.Jpeg',
  'https://img-accelerate.saleyee.cn/Resources/GoodsImages/2025/202501/8829a6ab-0a10-4349-a506-12835c30c872.Jpeg',
  'https://img-accelerate.saleyee.cn/Resources/GoodsImages/2025/202506/89c6cc05-8416-491e-8b0e-3fde8a318f0e.Jpeg',
  'https://img-accelerate.saleyee.cn/Resources/GoodsImages/2023/202309/3c1b039b-de57-4d8f-805a-4d15658b90c5.Jpeg',
  'https://img-accelerate.saleyee.cn/Resources/GoodsImages/2023/202310/3c1b039b-de57-4d8f-805a-4d15658b90c5.Jpeg',
  'https://img-accelerate.saleyee.cn/Resources/GoodsImages/2023/202309/79ebe6df-c2d3-4207-b146-513630fe163d.Jpeg',
]

const regionImages = [
  'https://img-accelerate.saleyee.cn/Resources/GoodsImages/2024/202410/890f8f68-c40a-40c5-a4f3-017cf297c900.Jpeg',
  'https://img-accelerate.saleyee.cn/Resources/GoodsImages/2025/202508/d41d793d-cf75-4653-8470-a715d6e9f12f.Jpeg',
  'https://img-accelerate.saleyee.cn/Resources/GoodsImages/2025/202508/7656a659-2d14-4c49-a355-c45b0ae7edf8.Jpeg',
  'https://img-accelerate.saleyee.cn/Resources/GoodsImages/2023/202308/9edd9fdd-b8ca-4750-8c74-6180331317f0.jpg',
  'https://img-accelerate.saleyee.cn/Resources/GoodsImages/2025/202506/89c6cc05-8416-491e-8b0e-3fde8a318f0e.Jpeg',
  'https://img-accelerate.saleyee.cn/Resources/GoodsImages/2023/202309/3c1b039b-de57-4d8f-805a-4d15658b90c5.Jpeg',
]

const fallbackImage = 'https://img-accelerate.saleyee.cn/Resources/GoodsImages/2023/202310/3c1b039b-de57-4d8f-805a-4d15658b90c5.Jpeg'
function onImgError(e) {
  const t = e.target
  if (t && t.src !== fallbackImage) t.src = fallbackImage
}

function updateHeroHeight() {
  const el = document.querySelector('.category-sidebar')
  if (el && window.innerWidth >= 768) {
    // use fixed height to match Saleyee homepage carousel
    heroHeight.value = 460
  } else {
    heroHeight.value = undefined
  }
}

onMounted(() => {
  updateHeroHeight()
  window.addEventListener('resize', updateHeroHeight)
})

onUnmounted(() => window.removeEventListener('resize', updateHeroHeight))
</script>

<template>
  <LoginPage v-if="isLogin" />
  <RegisterPage v-else-if="isRegister" />
  <GettingStartedPage v-else-if="isGettingStarted" />
  <HelpCenterPage v-else-if="isHelpCenter" />
  <OperationGuidePage v-else-if="isOperationGuide" />
  <FAQDetailPage v-else-if="isFAQDetail" />
  <ContactUsPage v-else-if="isContactUs" />
  <AboutSaleyeePage v-else-if="isAboutSaleyee" />
  <VATPolicyPage v-else-if="isVATPolicy" />
  <FeedbackPage v-else-if="isFeedback" />
  <DistributorsPage v-else-if="isDistributors" />
  <SupplierPage v-else-if="isSupplier" />
  <PartnersPage v-else-if="isPartners" />
  <ItemDetailPage v-else-if="isItemDetail" />
  <UserCenterPage v-else-if="isUserCenter" />
  <ProductManagementPage v-else-if="isProductManagement" />
  <ListingPushPage v-else-if="isListingPush" />
  <ListingProductsPage v-else-if="isListingProducts" />
  <BrandAuthPage v-else-if="isBrandAuth" />
  <ProductNotificationPage v-else-if="isProductNotification" />
  <CartPage v-else-if="isCart" />
  <AllProductsPage v-else-if="isAllProducts" />
  <AllCategoriesPage v-else-if="isAllCategories" />
  <NewPage v-else-if="isNewPage" />
  <DirectDeliveryPage v-else-if="isDirectDelivery" />
  <MembershipPage v-else-if="isMembership" />
  <DiscountSalePage v-else-if="isDiscountSale" />
  <HotSalesPage v-else-if="isHotSales" />
  <div v-else id="top" class="min-h-screen flex flex-col">
    <SiteHeader />
    <CategoryNavBar />
    <main class="flex-1" style="background-color: #F2F3F7;">
      <div class="mx-auto w-full max-w-[1500px] md:w-[80%] md:min-w-[1150px] px-4 md:px-0">
        <div class="flex gap-0">
          <div class="hidden md:block w-1/4 lg:w-auto" style="width: 210px; flex-shrink: 0">
            <CategorySidebar />
          </div>
          <div class="flex-1 w-full">
            <HeroBanner :heroHeight="heroHeight" />
          </div>
        </div>
      </div>

      <!-- 平台爆款 -->
      <div id="platform-boutique">
        <PlatformBoutique />
      </div>

      <!-- 节日装��� -->
      <div id="festival">
        <FestivalDecorations />
      </div>

      <!-- 新品推荐 -->
      <div id="new-products">
        <NewProductsBanner />
      </div>

      <!-- 居家推荐 -->
      <div id="home">
        <HomeRecommendations />
      </div>

      <!-- 节庆产品 -->
      <div id="seasonal">
        <SeasonalProducts />
      </div>

      <!-- 平台产品 -->
      <div id="platform-products">
        <PlatformProducts />
      </div>

      <!-- 家居爆款热销精选 -->
      <div id="bestsellers">
        <BestsellerProducts />
      </div>

      <!-- 品牌热品大牌联盟 -->
      <div id="brands">
        <BrandProducts />
      </div>
    </main>

    <RightFloatNav />
    <SiteFooter />
  </div>
</template>

<style scoped></style>
