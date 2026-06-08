import { Link } from 'react-router-dom';
export default function PageNotFound() {
  return <div className="min-h-screen flex flex-col items-center justify-center gap-4"><p className="text-6xl">&#128269;</p><h1 className="text-2xl font-bold">P&aacute;gina no encontrada</h1><Link to="/" className="text-primary underline">Volver al inicio</Link></div>;
}