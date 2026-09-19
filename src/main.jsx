import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

function Arrow({ diagonal = false, ...props }) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>{diagonal ? <path d="M6 18 18 6M6 6h12v12"/> : <path d="M4 12h16m-6-6 6 6-6 6"/>}</svg>;
}
function Brand({ small = false }) {
  return <span className={`brand ${small ? 'brand-small' : ''}`}><span className="brand-icon"><svg viewBox="0 0 48 48" aria-hidden="true"><path d="M10 33V15h6l8 10 8-10h6v18h-6V24l-8 9-8-9v9z" fill="currentColor"/></svg></span><span>mega<span className="brand-dot">.</span></span></span>;
}
function App() {
  return <div className="shell">
    <header className="header"><Brand/><span className="header-label"><span className="tiny-grid">▦</span> Central de plataformas</span><span className="workspace"><span/> Workspace Mega</span></header>
    <main>
      <section className="intro" aria-labelledby="title"><div className="eyebrow"><span/> SEU PONTO DE PARTIDA</div><h1>Tudo conectado.<br/>Seu dia <span>simplificado.</span></h1><p>Suas plataformas, em um só lugar.<br className="mobile-break"/> Escolha onde quer trabalhar hoje.</p><div className="orbit" aria-hidden="true"><div className="orbit-ring ring-one"/><div className="orbit-ring ring-two"/><div className="orbit-line"/><span className="orbit-core"><svg viewBox="0 0 48 48"><path d="M10 33V15h6l8 10 8-10h6v18h-6V24l-8 9-8-9v9z" fill="currentColor"/></svg></span><span className="orbit-node node-one"/><span className="orbit-node node-two"/><span className="orbit-plus">+</span></div></section>
      <section className="platforms" aria-labelledby="platform-title"><div className="section-heading"><h2 id="platform-title">Suas plataformas <span>02</span></h2><span>Acesso rápido</span></div>
        <div className="platform-list">
        <a className="platform-card" href="https://crm-mega-one.vercel.app/login" target="_blank" rel="noopener noreferrer" aria-label="Acessar CRM Mega (abre em nova aba)"><div className="card-top"><span className="crm-icon"><svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true"><rect x="5" y="6" width="22" height="20" rx="4"/><path d="M5 13h22M13 13v13M18 18h4m-4 4h4"/></svg></span><span className="category">RELACIONAMENTO</span><Arrow diagonal className="card-arrow"/></div><div className="card-body"><h3>CRM Mega</h3><p>Acesse seu CRM e continue de onde parou.</p><span className="domain">crm-mega-one.vercel.app</span></div><div className="card-bottom"><span>Acessar plataforma</span><Arrow/></div></a>
        <a className="platform-card" href="https://relatoriosmega.vercel.app/login" target="_blank" rel="noopener noreferrer" aria-label="Acessar Relatórios Mega (abre em nova aba)"><div className="card-top"><span className="crm-icon"><svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true"><rect x="5" y="6" width="22" height="20" rx="4"/><path d="M11 21v-5m5 5V11m5 10v-8"/></svg></span><span className="category">RELATÓRIOS</span><Arrow diagonal className="card-arrow"/></div><div className="card-body"><h3>Relatórios Mega</h3><p>Acesse seus relatórios e acompanhe os resultados.</p><span className="domain">relatoriosmega.vercel.app</span></div><div className="card-bottom"><span>Acessar plataforma</span><Arrow/></div></a>
        </div>
      </section>
      <div className="access-note"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><rect x="4" y="5" width="16" height="14" rx="3"/><path d="M4 9h16m-5 4 2 2-2 2m-6-4-2 2 2 2"/></svg><p>Cada plataforma abre em uma nova aba.<span> Use suas credenciais habituais para entrar.</span></p></div>
    </main>
    <footer><Brand small/><span>Seu trabalho começa aqui.</span><span className="footer-right">CENTRAL DE ACESSO <span>© {new Date().getFullYear()} Mega</span></span></footer>
  </div>;
}
createRoot(document.getElementById('root')).render(<React.StrictMode><App/></React.StrictMode>);
