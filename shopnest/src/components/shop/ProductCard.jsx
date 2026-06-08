import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import { base44 } from '@/api/base44Client';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
export default function ProductCard({ product, index = 0 }) {
  const queryClient = useQueryClient();
  const { data: favorites = [] } = useQuery({ queryKey: ['favorites'], queryFn: () => base44.entities.Favorite.list(), staleTime: 30000 });
  const isFav = favorites.some(f => f.product_id === product.id);
  const toggleFav = useMutation({
    mutationFn: async () => {
      if (isFav) { const fav = favorites.find(f => f.product_id === product.id); if (fav) await base44.entities.Favorite.delete(fav.id); }
      else { const user = await base44.auth.me(); await base44.entities.Favorite.create({ product_id: product.id, user_email: user.email }); }
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['favorites'] }),
  });
  const hasDiscount = product.sale_price && product.sale_price < product.price;
  const discountPct = hasDiscount ? Math.round((1 - product.sale_price / product.price) * 100) : 0;
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.05, duration: 0.3 }}>
      <Link to={'/product/' + product.id} className="block group">
        <div className="relative bg-card rounded-2xl overflow-hidden border border-border/50">
          <div className="aspect-[3/4] bg-secondary/50 overflow-hidden">
            {product.images?.[0] ? <img src={product.images[0]} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" /> : <div className="w-full h-full flex items-center justify-center text-4xl">&#128230;</div>}
          </div>
          {hasDiscount && <span className="absolute top-2 left-2 bg-primary text-primary-foreground text-[10px] font-bold px-2 py-0.5 rounded-full">-{discountPct}%</span>}
          <button onClick={e => { e.preventDefault(); e.stopPropagation(); toggleFav.mutate(); }} className="absolute top-2 right-2 w-8 h-8 bg-card/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-sm">
            <Heart className={`w-4 h-4 ${isFav ? 'fill-red-500 text-red-500' : 'text-muted-foreground'}`} />
          </button>
        </div>
        <div className="pt-2 px-1">
          <p className="text-sm font-medium truncate">{product.name}</p>
          <div className="flex items-center gap-2 mt-0.5">
            <span className="text-sm font-bold">${(product.sale_price || product.price).toFixed(2)}</span>
            {hasDiscount && <span className="text-xs text-muted-foreground line-through">${product.price.toFixed(2)}</span>}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}