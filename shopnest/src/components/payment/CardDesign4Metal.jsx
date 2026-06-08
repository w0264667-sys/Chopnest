export default function CardDesign4Metal({ card, detectCardType, formatCardNumber }) {
  return (
    <div className="relative bg-gradient-to-br from-amber-300 via-yellow-400 to-amber-500 rounded-2xl p-5 text-gray-900 aspect-[1.6/1] flex flex-col justify-between shadow-2xl overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tr from-white/30 via-transparent to-transparent" />
      <div className="relative flex justify-between items-start"><div className="w-10 h-7 bg-gray-900/30 rounded-md border border-gray-900/20" /><span className="text-[10px] font-black uppercase tracking-widest text-gray-800/70">{detectCardType(card.card_number)}</span></div>
      <p className="relative font-mono tracking-[0.18em] text-lg font-bold">{card.card_number ? formatCardNumber(card.card_number) : '•••• •••• •••• ••••'}</p>
      <div className="relative flex justify-between"><div><p className="text-[9px] text-gray-700/60 uppercase tracking-widest mb-0.5">Titular</p><p className="text-sm font-bold">{card.cardholder_name || 'NOMBRE APELLIDO'}</p></div><div className="text-right"><p className="text-[9px] text-gray-700/60 uppercase tracking-widest mb-0.5">Vence</p><p className="text-sm font-bold">{card.expiry_date || 'MM/YY'}</p></div></div>
    </div>
  );
}