export default function CardDesign2Gradient({ card, detectCardType, formatCardNumber }) {
  return (
    <div className="relative bg-gradient-to-br from-violet-600 via-purple-600 to-pink-500 rounded-2xl p-5 text-white aspect-[1.6/1] flex flex-col justify-between shadow-2xl overflow-hidden">
      <div className="absolute -top-8 -right-8 w-40 h-40 bg-white/10 rounded-full" /><div className="absolute -bottom-10 -left-10 w-48 h-48 bg-white/10 rounded-full" />
      <div className="relative flex justify-between items-start"><div className="flex gap-1"><div className="w-8 h-8 bg-white/20 rounded-full" /><div className="w-8 h-8 bg-white/30 rounded-full -ml-3" /></div><span className="text-xs font-bold uppercase tracking-widest bg-white/20 px-2 py-0.5 rounded-full">{detectCardType(card.card_number)}</span></div>
      <p className="relative font-mono tracking-[0.2em] text-lg">{card.card_number ? formatCardNumber(card.card_number) : '•••• •••• •••• ••••'}</p>
      <div className="relative flex justify-between"><div><p className="text-[9px] opacity-60 uppercase tracking-widest mb-0.5">Titular</p><p className="text-sm font-semibold">{card.cardholder_name || 'NOMBRE APELLIDO'}</p></div><div className="text-right"><p className="text-[9px] opacity-60 uppercase tracking-widest mb-0.5">Vence</p><p className="text-sm font-semibold">{card.expiry_date || 'MM/YY'}</p></div></div>
    </div>
  );
}