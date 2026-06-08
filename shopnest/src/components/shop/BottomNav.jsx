import { Link, useLocation } from 'react-router-dom';
import { Home, Search, Heart, ShoppingBag, User } from 'lucide-react';
import { useCart } from '@/lib/cartStore';
const navItems = [
  { icon: Home, label: 'Inicio', path: '/' },
  { icon: Search, label: 'Buscar', path: '/search' },
  { icon: ShoppingBag, label: 'Carrito', path: '/cart' },
  { icon: Heart, label: 'Favoritos', path: '/favorites' },
  { icon: User, label: 'Perfil', path: '/profile' },
];
export default function BottomNav() {
  const location = useLocation();
  const { itemCount } = useCart();
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-xl border-t border-border">
      <div className="max-w-lg mx-auto flex items-center justify-around px-2 py-1">
        {navItems.map(({ icon: Icon, label, path }) => {
          const isActive = location.pathname === path;
          const isCart = path === '/cart';
          return (
            <Link key={path} to={path} className={`relative flex flex-col items-center flex-1 py-2 gap-0.5 transition-colors ${isActive ? 'text-primary' : 'text-muted-foreground'}`}>
              {isActive && <span className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-primary rounded-full" />}
              <div className="relative">
                <Icon className="w-5 h-5" fill={isActive && path === '/favorites' ? 'currentColor' : 'none'} strokeWidth={isActive ? 2.5 : 1.8} />
                {isCart && itemCount > 0 && <span className="absolute -top-1.5 -right-1.5 bg-destructive text-white text-[9px] font-black w-4 h-4 rounded-full flex items-center justify-center">{itemCount > 9 ? '9+' : itemCount}</span>}
              </div>
              <span className={`text-[10px] font-medium ${isActive ? 'text-primary' : 'text-muted-foreground/70'}`}>{label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}