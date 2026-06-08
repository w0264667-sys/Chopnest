export default function CardDesign1Classic({ card, detectCardType, formatCardNumber }) {
  return (
    <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-5 text-white aspect-[1.6/1] flex flex-col justify-between shadow-xl">
      <div className="flex justify-between items-start">
        <div className="w-10 h-7 bg-yellow-400/80 rounded-md" />
        <span className="text-xs opacity-60 uppercase tracking-widest">{detectCardType(card.card_number)}</span>
      </div>
      <p className="font-mono tracking-[0.2em] text-lg">{card.card_number ? formatCardNumber(card.card_number) : '•••• •••• •••• ••••'}</p>
      <div className="flex justify-between">
        <div><p className="text-[10px] opacity-50 uppercase tracking-widest">Titular</p><p className="text-sm font-medium">{card.cardholder_name || 'NOMBRE APELLIDO'}</p></div>
        <div><p className="text-[10px] opacity-50 uppercase tracking-widest">Vence</p><p className="text-sm font-medium">{card.expiry_date || 'MM/YY'}</p></div>
      </div>
    </div>
  );
}