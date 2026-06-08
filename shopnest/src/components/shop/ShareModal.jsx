import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Copy, Mail, Facebook, Twitter, Send, MessageCircle } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';
import { useState } from 'react';
export default function ShareModal({ open, onClose, url, title }) {
  const [email, setEmail] = useState('');
  const shareUrl = url || window.location.href;
  const shareTitle = title || 'Mira este producto';
  const shareOptions = [
    { name: 'WhatsApp', icon: <MessageCircle className="w-5 h-5" />, color: 'bg-green-500', action: () => window.open('https://wa.me/?text=' + encodeURIComponent(shareTitle + ' ' + shareUrl), '_blank') },
    { name: 'Facebook', icon: <Facebook className="w-5 h-5" />, color: 'bg-blue-600', action: () => window.open('https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(shareUrl), '_blank') },
    { name: 'Twitter', icon: <Twitter className="w-5 h-5" />, color: 'bg-sky-500', action: () => window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent(shareTitle) + '&url=' + encodeURIComponent(shareUrl), '_blank') },
    { name: 'Telegram', icon: <Send className="w-5 h-5" />, color: 'bg-blue-400', action: () => window.open('https://t.me/share/url?url=' + encodeURIComponent(shareUrl), '_blank') },
  ];
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-sm rounded-2xl">
        <DialogHeader><DialogTitle>Compartir</DialogTitle></DialogHeader>
        <div className="flex gap-3 justify-center py-4">
          {shareOptions.map(opt => <button key={opt.name} onClick={opt.action} className={opt.color + ' text-white w-12 h-12 rounded-full flex items-center justify-center hover:opacity-90 transition-opacity'}>{opt.icon}</button>)}
        </div>
        <div className="flex gap-2">
          <Input placeholder="Enviar por email" value={email} onChange={e => setEmail(e.target.value)} type="email" />
          <Button size="icon" variant="outline" onClick={() => email && window.open('mailto:' + email + '?subject=' + encodeURIComponent(shareTitle) + '&body=' + encodeURIComponent(shareUrl))}><Mail className="w-4 h-4" /></Button>
        </div>
        <Button variant="outline" className="w-full" onClick={() => { navigator.clipboard.writeText(shareUrl); toast({ title: 'Enlace copiado' }); }}><Copy className="w-4 h-4 mr-2" /> Copiar enlace</Button>
      </DialogContent>
    </Dialog>
  );
}