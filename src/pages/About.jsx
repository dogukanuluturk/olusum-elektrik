import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, Zap, ShieldCheck, Target, Users, CheckCircle2, ArrowLeft, MapPin, Clock, PhoneCall, MessageCircle, ArrowRight, Menu, X
} from 'lucide-react';

export default function About() {
  const phoneNumber = "0545 904 17 38"; 
  const cleanPhone = "+905459041738"; 
  const whatsappNumber = "905459041738";

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#060913] text-slate-100 font-sans antialiased selection:bg-amber-400 selection:text-slate-950 overflow-x-hidden">
      
      {/* ÜST BİLGİ ŞERİDİ */}
      <div className="bg-slate-900 border-b border-slate-800 text-xs text-slate-400 py-2.5 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-amber-400" /> İstanbul Anadolu & Avrupa Yakası Servis Ağı</span>
            <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-amber-400" /> 7/24 Acil Müdahale & Taahhüt Ekibi</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-amber-400 font-semibold flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5" /> TSE Belgeli & Sözleşmeli Mühendislik Çözümleri
            </span>
          </div>
        </div>
      </div>

      {/* HEADER & MOBİL MENÜ */}
      <header className="sticky top-0 z-40 bg-[#060913]/90 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex justify-between items-center">
          
          {/* 1. SOL TERAZİ: LOGO (Sola yaslı, esnek alan) */}
          <div className="flex-1 flex items-center justify-start">
            <Link to="/">
              <img 
                src="/logo.png" 
                alt="Oluşum Elektrik Logo" 
                className="h-16 sm:h-20 w-auto object-contain scale-150 origin-left hover:opacity-90 transition"
              />
            </Link>
          </div>

          {/* 2. MERKEZ: MASAÜSTÜ MENÜ (Tam ortada kilitli) */}
          <nav className="hidden lg:flex flex-none items-center gap-5 lg:gap-8">
            <Link to="/" className="text-sm font-bold text-white hover:text-amber-400 transition">Anasayfa</Link>
            <Link to="/hakkimizda" className="text-sm font-bold text-slate-300 hover:text-amber-400 transition">Hakkımızda</Link>
            <Link to="/hizmetlerimiz" className="text-sm font-bold text-slate-300 hover:text-amber-400 transition">Hizmetlerimiz</Link>
          </nav>

          {/* 3. SAĞ TERAZİ: MASAÜSTÜ BUTONLAR (Sağa yaslı, esnek alan) */}
          <div className="flex-1 hidden lg:flex items-center justify-end gap-3">
            <a href={`tel:${cleanPhone}`} className="flex items-center gap-2 bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white font-semibold px-4 py-2.5 rounded-xl transition text-sm">
              <Phone className="w-4 h-4 text-amber-400" />
              <span>{phoneNumber}</span>
            </a>
            <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-5 py-2.5 rounded-xl transition shadow-lg shadow-emerald-500/20 text-sm">
              <MessageCircle className="w-4 h-4 fill-slate-950" />
              <span className="inline">WhatsApp</span>
            </a>
          </div>

          {/* MOBİL MENÜ BUTONU */}
          <div className="flex-1 flex justify-end lg:hidden">
            <button className="text-slate-300 hover:text-amber-400 transition p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden bg-slate-900 border-b border-slate-800 px-4 py-6 space-y-6 absolute w-full left-0 shadow-2xl">
            <nav className="flex flex-col gap-4">
              <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="text-base font-bold text-white flex items-center gap-2"><ArrowRight className="w-4 h-4 text-amber-400"/> Anasayfa</Link>
              <Link to="/hakkimizda" onClick={() => setIsMobileMenuOpen(false)} className="text-base font-bold text-slate-300 flex items-center gap-2"><ArrowRight className="w-4 h-4 text-amber-400"/> Hakkımızda</Link>
              <Link to="/hizmetlerimiz" onClick={() => setIsMobileMenuOpen(false)} className="text-base font-bold text-slate-300 flex items-center gap-2"><ArrowRight className="w-4 h-4 text-amber-400"/> Hizmetlerimiz</Link>
            </nav>
            <div className="flex flex-col gap-3 pt-4 border-t border-slate-800">
              <a href={`tel:${cleanPhone}`} className="flex justify-center items-center gap-2 bg-slate-800 border border-slate-700 text-white font-bold py-3 rounded-xl">
                <Phone className="w-5 h-5 text-amber-400" /> {phoneNumber}
              </a>
              <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noreferrer" className="flex justify-center items-center gap-2 bg-emerald-500 text-slate-950 font-bold py-3 rounded-xl">
                <MessageCircle className="w-5 h-5 fill-slate-950" /> WhatsApp'tan Yaz
              </a>
            </div>
          </div>
        )}
      </header>

      {/* HAKKIMIZDA HERO */}
      <section className="relative py-20 px-4 overflow-hidden border-b border-slate-800 bg-slate-900/30">
        <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 bg-amber-400/10 border border-amber-400/30 text-amber-400 text-sm font-bold px-5 py-2 rounded-full shadow-inner mb-4">
            <ShieldCheck className="w-5 h-5" /> Sektörde Güvenin Adresi
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight">
            Enerjiye Yön Veren <br />
            <span className="text-amber-400 drop-shadow-md">
              Ustalık ve Mühendislik
            </span>
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed max-w-2xl mx-auto">
            Oluşum Elektrik olarak, yılların getirdiği saha tecrübesini modern standartlarla birleştiriyor; endüstriyel tesislerden yaşam alanlarına kadar her noktaya güvenilir enerji çözümleri sunuyoruz.
          </p>
        </div>
      </section>

      {/* VİZYON & MİSYON (ZIG-ZAG VE KARTLI TASARIM) */}
      <section className="py-24 px-4 max-w-7xl mx-auto border-b border-slate-800">
        <div className="flex flex-col gap-16">
          
          {/* MİSYON KARTI */}
          <div className="bg-slate-900/40 border border-slate-800 p-8 lg:p-12 rounded-[2.5rem] shadow-2xl hover:border-amber-400/30 transition-colors duration-500">
            <div className="flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-16">
              
              {/* Metin */}
              <div className="flex-1 w-full space-y-6">
                <div className="w-16 h-16 rounded-2xl bg-amber-400/10 flex items-center justify-center text-amber-400 mb-4">
                  <Target className="w-8 h-8" />
                </div>
                <h2 className="text-3xl lg:text-4xl font-black text-white tracking-tight">Misyonumuz</h2>
                <p className="text-slate-400 text-lg leading-relaxed">
                  Müşterilerimizin elektrik ve otomasyon ihtiyaçlarını, uluslararası kalite standartlarına (TSE/CE) uygun, çevreye duyarlı, güvenli ve ekonomik çözümlerle karşılamak. Her projemizde sıfır iş kazası prensibiyle, malzeme kalitesinden ve usta işçilikten ödün vermeden zamanında teslimat yapmak.
                </p>
              </div>

              {/* Görsel */}
              <div className="flex-1 w-full">
                <div className="relative w-full aspect-video lg:aspect-[4/3] bg-slate-950 border border-slate-800 rounded-[2.5rem] overflow-hidden group shadow-2xl hover:border-amber-400/50 transition-colors duration-500">
                  <img 
                    src="/misyon.png" 
                    alt="Oluşum Elektrik Misyon" 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent transition-colors duration-500"></div>
                </div>
              </div>

            </div>
          </div>

          {/* VİZYON KARTI (ZIG-ZAG - TERS DÜZEN) */}
          <div className="bg-slate-900/40 border border-slate-800 p-8 lg:p-12 rounded-[2.5rem] shadow-2xl hover:border-amber-400/30 transition-colors duration-500">
            <div className="flex flex-col-reverse lg:flex-row-reverse items-center gap-10 lg:gap-16">
              
              {/* Metin */}
              <div className="flex-1 w-full space-y-6">
                <div className="w-16 h-16 rounded-2xl bg-amber-400/10 flex items-center justify-center text-amber-400 mb-4">
                  <Zap className="w-8 h-8" />
                </div>
                <h2 className="text-3xl lg:text-4xl font-black text-white tracking-tight">Vizyonumuz</h2>
                <p className="text-slate-400 text-lg leading-relaxed">
                  İstanbul başta olmak üzere tüm Türkiye'de elektrik taahhüt ve pano montajı denildiğinde akla gelen ilk, en güvenilir ve yenilikçi teknoloji firması olmak. Akıllı bina sistemleri ve enerji verimliliği alanlarında sektöre öncülük ederek kalıcı değerler yaratmak.
                </p>
              </div>

              {/* Görsel */}
              <div className="flex-1 w-full">
                <div className="relative w-full aspect-video lg:aspect-[4/3] bg-slate-950 border border-slate-800 rounded-[2.5rem] overflow-hidden group shadow-2xl hover:border-amber-400/50 transition-colors duration-500">
                  <img 
                    src="/vizyon.png" 
                    alt="Oluşum Elektrik Vizyon" 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent transition-colors duration-500"></div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* DEĞERLERİMİZ */}
      <section className="py-20 px-4 max-w-7xl mx-auto border-b border-slate-800">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-black text-white">Temel Değerlerimiz</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="text-center space-y-4">
            <div className="mx-auto w-16 h-16 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-amber-400">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <h3 className="font-bold text-white text-lg">Tavizsiz Güvenlik</h3>
            <p className="text-slate-400 text-sm">Tüm uygulamalarımızda yanmaz kablo ve A kalite şalt malzemeleri kullanarak can ve mal güvenliğini ön planda tutarız.</p>
          </div>
          <div className="text-center space-y-4">
            <div className="mx-auto w-16 h-16 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-amber-400">
              <Users className="w-8 h-8" />
            </div>
            <h3 className="font-bold text-white text-lg">Yetkili Kadro</h3>
            <p className="text-slate-400 text-sm">Sahadaki tüm ekiplerimiz mesleki yeterlilik belgelerine sahip, tecrübeli teknisyenlerden oluşmaktadır.</p>
          </div>
          <div className="text-center space-y-4">
            <div className="mx-auto w-16 h-16 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-amber-400">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-bold text-white text-lg">Sözleşmeli Garanti</h3>
            <p className="text-slate-400 text-sm">İşin başında anlaşılan maliyetler değişmez. Projelerimiz, teslim tarihi ve bütçe garantili resmi sözleşmelerle güvence altına alınır.</p>
          </div>
        </div>
      </section>

      {/* GERİ DÖNÜŞ */}
      <section className="py-16 text-center">
        <Link to="/" className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white font-bold px-8 py-4 rounded-xl transition">
          <ArrowLeft className="w-5 h-5" /> Anasayfaya Dön
        </Link>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#04060d] py-10 px-4 text-center text-xs text-slate-500">
        <p>© {new Date().getFullYear()} Oluşum Elektrik & Taahhüt. Tüm hakları saklıdır.</p>
      </footer>
    </div>
  );
}