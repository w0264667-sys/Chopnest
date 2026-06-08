export default function CardDesign3Glass({ card, detectCardType, formatCardNumber }) {
  return (
    <div className="relative rounded-2xl aspect-[1.6/1] overflow-hidden shadow-2xl">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-teal-600" />
      <div className="absolute inset-[6px] bg-white/10 backdrop-blur-sm rounded-xl border border-white/30 p-4 flex flex-col justify-between">
        <div className="flex justify-between items-center"><div className="w-9 h-6 rounded-md border border-white/40 bg-white/20 flex items-center justify-center"><div className="w-4 h-3 bg-yellow-300/80 rounded-sm" /></div><span className="text-[10px] text-white/80 font-bold uppercase tracking-widest">{detectCardType(card.card_number)}</span></div>
        <p className="font-mono text-white text-base tracking-[0.18em]">{card.card_number ? formatCardNumber(card.card_number) : '•••• •••• •••• ••••'}</p>
        <div className="flex justify-between"><div><p className="text-[9px] text-white/50 uppercase tracking-widest">Nombre</p><p className="text-sm text-white font-semibold">{card.cardholder_name || 'NOMBRE APELLIDO'}</p></div><div className="text-right"><p className="text-[9px] text-white/50 uppercase tracking-widest">Exp.</p><p className="text-sm text-white font-semibold">{card.expiry_date || 'MM/YY'}</p></div></div>
      </div>
    </div>
  );
}