import { base44 } from '@/api/base44Client';
export async function sendWelcomeEmail(userEmail, userName) {
  const settings = await base44.entities.SiteSettings.list();
  const s = settings[0] || {};
  const siteName = s.site_name || 'ShopNest';
  const copyright = s.email_copyright || ('\u00a9 ' + new Date().getFullYear() + ' ' + siteName);
  let body = s.welcome_template
    ? s.welcome_template.replace(/{{user_name}}/g, userName||userEmail).replace(/{{site_name}}/g, siteName).replace(/{{shop_url}}/g, window.location.origin).replace(/{{year}}/g, new Date().getFullYear()).replace(/{{copyright}}/g, copyright)
    : '<div style="font-family:Inter,sans-serif;max-width:600px;margin:0 auto;"><div style="background:#22C55E;padding:32px;text-align:center;border-radius:16px 16px 0 0;"><h1 style="color:#fff;margin:0;">\u00a1Bienvenido a ' + siteName + '!</h1></div><div style="padding:32px;background:#fff;border-radius:0 0 16px 16px;"><p>Hola <strong>' + (userName||userEmail) + '</strong>,</p><p style="color:#6B7280;">Gracias por registrarte.</p><p style="color:#9CA3AF;font-size:12px;">' + copyright + '</p></div></div>';
  await base44.integrations.Core.SendEmail({ to: userEmail, subject: s.email_title_welcome || ('\u00a1Bienvenido a ' + siteName + '!'), body, from_name: siteName });
}
export async function sendOrderConfirmationEmail(userEmail, userName, order) {
  const settings = await base44.entities.SiteSettings.list();
  const s = settings[0] || {};
  const siteName = s.site_name || 'ShopNest';
  const copyright = s.email_copyright || ('\u00a9 ' + new Date().getFullYear() + ' ' + siteName);
  const itemsHtml = (order.items||[]).map(i => '<div style="display:flex;justify-content:space-between;padding:6px 0;border-bottom:1px solid #F3F4F6;"><span>' + i.name + ' x' + i.quantity + '</span><span>$' + (i.price*i.quantity).toFixed(2) + '</span></div>').join('');
  let body = s.order_template
    ? s.order_template.replace(/{{user_name}}/g,userName||userEmail).replace(/{{site_name}}/g,siteName).replace(/{{order_id}}/g,order.id?.slice(-8)?.toUpperCase()||'N/A').replace(/{{order_items}}/g,itemsHtml).replace(/{{total}}/g,(order.total||0).toFixed(2)).replace(/{{copyright}}/g,copyright)
    : '<div style="font-family:Inter,sans-serif;max-width:600px;margin:0 auto;"><div style="background:#22C55E;padding:32px;text-align:center;border-radius:16px 16px 0 0;"><h1 style="color:#fff;margin:0;">\u2705 Pedido Confirmado</h1></div><div style="padding:32px;background:#fff;"><p>Hola <strong>' + (userName||userEmail) + '</strong>, tu pedido ha sido confirmado.</p>' + itemsHtml + '<p style="color:#9CA3AF;font-size:12px;">' + copyright + '</p></div></div>';
  await base44.integrations.Core.SendEmail({ to: userEmail, subject: s.email_title_order || ('Pedido Confirmado #' + (order.id?.slice(-8)?.toUpperCase())), body, from_name: siteName });
}