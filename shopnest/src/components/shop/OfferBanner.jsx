import { motion } from 'framer-motion';
export default function OfferBanner({ title, discount, image }) {
  return (
    <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="relative bg-primary rounded-2xl overflow-hidden p-5 min-h-[140px] flex items-center">
      <div className="relative z-10 flex-1">
        <p className="text-primary-foreground/80 text-xs font-medium uppercase tracking-wide">Oferta Especial</p>
        <p className="text-primary-foreground text-xl font-bold mt-1">{discount || 'Hasta 50%'}</p>
        <p className="text-primary-foreground/90 text-sm mt-1">{title || 'Descuento en productos seleccionados'}</p>
      </div>
      {image && <div className="absolute right-0 top-0 bottom-0 w-1/3 overflow-hidden"><img src={image} alt="" className="w-full h-full object-cover opacity-30" /></div>}
      <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-white/10 rounded-full" />
    </motion.div>
  );
}