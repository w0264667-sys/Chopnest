export default function ProductQRCode({ product, size = 120 }) {
  const url = encodeURIComponent(window.location.origin + '/product/' + product.id);
  const qrUrl = 'https://api.qrserver.com/v1/create-qr-code/?size=' + size + 'x' + size + '&data=' + url + '&margin=4&format=png';
  return (
    <div className="flex flex-col items-center gap-1">
      <img src={qrUrl} alt="QR Code" width={size} height={size} className="rounded-lg" style={{ imageRendering: 'pixelated' }} />
      <p className="text-[9px] text-muted-foreground font-mono text-center">Escanea para ver el producto</p>
    </div>
  );
}