import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, MessageCircle, Zap, ShieldCheck, Clock, Wrench, 
  Building2, MapPin, PhoneCall, Activity, Radio, Menu, X, ArrowRight, ArrowLeft
} from 'lucide-react';

export default function Services() {
  const phoneNumber = "0545 904 17 38"; 
  const cleanPhone = "+905459041738"; 
  const whatsappNumber = "905459041738";

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const services = [
    {
      icon: <Building2 className="w-8 h-8" />,
      image: "/hizmet-1.png",
      title: "Elektrik Taahhüt & Şantiye",
      desc: "Fabrika, ofis, plaza ve konut projelerinizin A'dan Z'ye tüm elektrik altyapısını kuruyoruz.",
      details: ["Kaba inşaat borulama ve kablo çekimi", "Busbar enerji dağıtım sistemleri", "Anahtar teslim fabrika altyapısı", "Aydınlatma otomasyonu kurulumu"]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      image: "/hizmet-2.png",
      title: "Pano İmalatı & Kompanzasyon",
      desc: "Tesisinizin kalbi olan enerji panolarını TSE standartlarında dizayn ediyor ve üretiyoruz.",
      details: ["Ana Dağıtım Panoları (ADP)", "Reaktif ceza önleyici kompanzasyon", "Şalter, kontaktör ve sigorta revizyonu", "Pano periyodik bakım hizmetleri"]
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      image: "/hizmet-3.png",
      title: "7/24 Acil Arıza & Bakım",
      desc: "Üretimin veya hayatın durmaması için mobil ekiplerimizle İstanbul'un her yerine anında müdahale.",
      details: ["Sigorta ve şalter atmaları", "Kısa devre ve kaçak akım tespiti", "Termal kamera ile ısınma kontrolü", "Yeraltı kablo arıza bulma"]
    },
    {
      icon: <Radio className="w-8 h-8" />,
      image: "/hizmet-4.png",
      title: "Zayıf Akım & Güvenlik",
      desc: "Sadece enerjiyi değil, tesisinizin iletişim ve güvenlik altyapısını da kuruyoruz.",
      details: ["Kamera (CCTV) sistemleri", "Yangın ihbar ve alarm sistemleri", "Data (İnternet/Ağ) kablolaması", "Kartlı geçiş ve turnike sistemleri"]
    },
    {
      icon: <Activity className="w-8 h-8" />,
      image: "/hizmet-5.png",
      title: "Topraklama & Ölçüm",
      desc: "İş güvenliği yönetmeliklerine uygun yasal ölçümleri ve topraklama tesisatlarını yapıyoruz.",
      details: ["Temel topraklama tesisatı", "Paratoner (Yıldırımsavar) kurulumu", "Megger ile izolasyon testi", "Yasal topraklama ölçüm raporlaması"]
    }
  ];

  return (
    <div className="min-h-screen bg-[#060913] text-slate-100 font-sans antialiased overflow-x-hidden">
      
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
                className="h-16 sm:h-20 w-auto object-contain scale-75 origin-left hover:opacity-90 transition"
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

      {/* SAYFA BAŞLIĞI */}
      <section className="py-20 px-4 text-center border-b border-slate-800 bg-slate-900/30">
        <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-4">Uzmanlık Alanlarımız</h1>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          Tesisinizin güvenliği ve verimliliği için ihtiyacınız olan tüm elektrik ve zayıf akım çözümlerini tek çatı altında sunuyoruz.
        </p>
      </section>

      {/* HİZMETLER LİSTESİ (DEV KARTLAR İÇİNDE ZIG-ZAG) */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="flex flex-col gap-16">
          
          {services.map((srv, idx) => {
            const isEven = idx % 2 === 0; 

            return (
              // DIŞ KART KAPSAYICISI (Yeni Eklendi)
              <div 
                key={idx} 
                className="bg-slate-900/40 border border-slate-800 p-8 lg:p-12 rounded-[2.5rem] shadow-2xl hover:border-amber-400/30 transition-colors duration-500"
              >
                {/* İÇ ZIG-ZAG DÜZENİ */}
                <div className={`flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-16 ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
                  
                  {/* METİN KISMI */}
                  <div className="flex-1 w-full space-y-6">
                    <div className="w-16 h-16 rounded-2xl bg-amber-400/10 flex items-center justify-center text-amber-400 mb-4">
                      {srv.icon}
                    </div>
                    <h3 className="text-3xl lg:text-4xl font-black text-white tracking-tight">{srv.title}</h3>
                    <p className="text-slate-400 text-lg leading-relaxed">{srv.desc}</p>
                    <ul className="space-y-4 pt-4">
                      {srv.details.map((detail, i) => (
                        <li key={i} className="flex items-center gap-3 text-base text-slate-300">
                          <div className="w-2 h-2 rounded-full bg-amber-400 flex-shrink-0"></div>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* GÖRSEL KISMI */}
                  <div className="flex-1 w-full">
                    <div className="relative w-full aspect-video lg:aspect-[4/3] bg-slate-950 border border-slate-800 rounded-[2.5rem] overflow-hidden group shadow-2xl hover:border-amber-400/50 transition-colors duration-500">
                      
                      <img 
                        src={srv.image} 
                        alt={srv.title} 
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                      />
                      
                      <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent transition-colors duration-500"></div>
                      
                    </div>
                  </div>

                </div>
              </div>
            );
          })}

          {/* HIZLI İLETİŞİM KARTI */}
          <div className="mt-8 bg-slate-900 border-2 border-amber-400/40 p-8 lg:p-14 rounded-[2.5rem] flex flex-col lg:flex-row items-center justify-between gap-8 text-white shadow-2xl shadow-amber-500/10">
            <div className="flex-1 text-center lg:text-left">
              <h3 className="text-3xl font-black mb-3 text-white">Farklı Bir Projeniz mi Var?</h3>
              <p className="text-slate-300 font-medium text-base leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Özel projeleriniz, fabrika kurulumları veya toplu konut tesisatları için mühendislerimizle hemen görüşün.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
              <a href={`tel:${cleanPhone}`} className="whitespace-nowrap bg-slate-800 border border-slate-700 text-white font-extrabold py-4 px-8 rounded-2xl flex items-center justify-center gap-2 hover:bg-slate-700 transition">
                <Phone className="w-5 h-5 text-amber-400" /> Bizi Arayın
              </a>
              <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noreferrer" className="whitespace-nowrap bg-emerald-500 text-slate-950 font-black py-4 px-8 rounded-2xl flex items-center justify-center gap-2 hover:bg-emerald-400 transition shadow-lg shadow-emerald-500/20">
                <MessageCircle className="w-5 h-5" /> WhatsApp
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* GERİ DÖNÜŞ BUTONU */}
      <section className="py-16 text-center border-t border-slate-800/50">
        <Link to="/" className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white font-bold px-8 py-4 rounded-xl transition">
          <ArrowLeft className="w-5 h-5" /> Anasayfaya Dön
        </Link>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#04060d] py-10 px-4 text-center text-xs text-slate-500 border-t border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} Oluşum Elektrik & Taahhüt. Tüm hakları saklıdır.</p>
          <div className="flex gap-6">
            <span>TSE Belgeli Kurumsal Elektrik Taahhüt Firması</span>
          </div>
        </div>
      </footer>

    </div>
  );
}