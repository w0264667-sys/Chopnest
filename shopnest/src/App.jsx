import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';
import { AuthProvider, useAuth } from '@/lib/AuthContext';
import UserNotRegisteredError from '@/components/UserNotRegisteredError';
import ProtectedRoute from '@/components/ProtectedRoute';

import Onboarding from '@/pages/Onboarding';
import AdminLogin from '@/pages/AdminLogin';
import Login from '@/pages/Login';
import Register from '@/pages/Register';
import ForgotPassword from '@/pages/ForgotPassword';
import ResetPassword from '@/pages/ResetPassword';

import AboutUs from '@/pages/AboutUs';
import Home from '@/pages/Home';
import Search from '@/pages/Search';
import ProductDetail from '@/pages/ProductDetail';
import Cart from '@/pages/Cart';
import Checkout from '@/pages/Checkout';
import OrderSuccess from '@/pages/OrderSuccess';
import Favorites from '@/pages/Favorites';
import Vouchers from '@/pages/Vouchers';
import Profile from '@/pages/Profile';
import Orders from '@/pages/Orders';
import PaymentMethods from '@/pages/PaymentMethods';

import AdminLayout from '@/pages/admin/AdminLayout';
import Dashboard from '@/pages/admin/Dashboard';
import AdminProducts from '@/pages/admin/AdminProducts';
import AdminCategories from '@/pages/admin/AdminCategories';
import AdminVouchers from '@/pages/admin/AdminVouchers';
import AdminPayments from '@/pages/admin/AdminPayments';
import AdminShare from '@/pages/admin/AdminShare';
import AdminSettings from '@/pages/admin/AdminSettings';
import AdminEmailTemplates from '@/pages/admin/AdminEmailTemplates';
import AdminThemes from '@/pages/admin/AdminThemes';
import AdminBanners from '@/pages/admin/AdminBanners';
import AdminCardDesign from '@/pages/admin/AdminCardDesign';
import AdminNotifications from '@/pages/admin/AdminNotifications';
import AdminAIBot from '@/pages/admin/AdminAIBot';
import AdminReviewBot from '@/pages/admin/AdminReviewBot';
import AdminMassProducts from '@/pages/admin/AdminMassProducts';
import AdminMassReviews from '@/pages/admin/AdminMassReviews';
import AdminOrders from '@/pages/admin/AdminOrders';
import AdminExport from '@/pages/admin/AdminExport';
import AdminBotChannels from '@/pages/admin/AdminBotChannels';

const AuthenticatedApp = () => {
  const { isLoadingAuth, isLoadingPublicSettings, authError, navigateToLogin } = useAuth();
  if (isLoadingPublicSettings || isLoadingAuth) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-background">
        <div className="flex flex-col items-center gap-3">
          <div className="w-10 h-10 border-4 border-muted border-t-primary rounded-full animate-spin" />
          <p className="text-sm text-muted-foreground">Cargando...</p>
        </div>
      </div>
    );
  }
  if (authError) {
    if (authError.type === 'user_not_registered') return <UserNotRegisteredError />;
    else if (authError.type === 'auth_required') { navigateToLogin(); return null; }
  }
  return (
    <Routes>
      <Route path="/onboarding" element={<Onboarding />} />
      <Route path="/admin-login" element={<AdminLogin />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route element={<ProtectedRoute unauthenticatedElement={<Navigate to="/login" replace />} />}>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order-success" element={<OrderSuccess />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/vouchers" element={<Vouchers />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/payment-methods" element={<PaymentMethods />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="products" element={<AdminProducts />} />
          <Route path="categories" element={<AdminCategories />} />
          <Route path="vouchers" element={<AdminVouchers />} />
          <Route path="payments" element={<AdminPayments />} />
          <Route path="share" element={<AdminShare />} />
          <Route path="settings" element={<AdminSettings />} />
          <Route path="email-templates" element={<AdminEmailTemplates />} />
          <Route path="themes" element={<AdminThemes />} />
          <Route path="banners" element={<AdminBanners />} />
          <Route path="card-design" element={<AdminCardDesign />} />
          <Route path="notifications" element={<AdminNotifications />} />
          <Route path="ai-bot" element={<AdminAIBot />} />
          <Route path="review-bot" element={<AdminReviewBot />} />
          <Route path="mass-products" element={<AdminMassProducts />} />
          <Route path="mass-reviews" element={<AdminMassReviews />} />
          <Route path="orders" element={<AdminOrders />} />
          <Route path="export" element={<AdminExport />} />
          <Route path="bot-channels" element={<AdminBotChannels />} />
        </Route>
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

function App() {
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClientInstance}>
        <Router>
          <AuthenticatedApp />
        </Router>
        <Toaster />
      </QueryClientProvider>
    </AuthProvider>
  )
}
export default App