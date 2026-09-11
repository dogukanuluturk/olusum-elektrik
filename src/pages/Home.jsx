import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, MessageCircle, Zap, ShieldCheck, Clock, Wrench, 
  Building2, MapPin, ArrowRight, ChevronDown, 
  Calculator, Check, PhoneCall, Shield, Mail,
  Menu, X
} from 'lucide-react';

export default function Home() {
  const phoneNumber = "0545 904 17 38"; 
  const cleanPhone = "+905459041738"; 
  const whatsappNumber = "905459041738";
  const companyEmail = "info@olusumelektrik.com";

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [buildingType, setBuildingType] = useState('Fabrika');
  const [serviceNeed, setServiceNeed] = useState('Pano Montajı');
  const [district, setDistrict] = useState('Kadıköy');
  const [urgency, setUrgency] = useState('7/24 Acil Müdahale (Bugün)');

  const [openFaq, setOpenFaq] = useState(null);
  const toggleFaq = (index) => setOpenFaq(openFaq === index ? null : index);

  const getCustomWhatsAppLink = () => {
    const text = `Merhaba Oluşum Elektrik,\n\n*Lokasyon:* ${district}\n*Yapı Türü:* ${buildingType}\n*Hizmet:* ${serviceNeed}\n*Durum:* ${urgency}\n\nBu konuyla ilgili fiyat teklifi ve keşif randevusu almak istiyorum.`;
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  const partnerBrands = [
    { name: "Schneider Electric", desc: "Şalt & Pano Sistemleri" },
    { name: "Siemens", desc: "Endüstriyel Koruma & Otomasyon" },
    { name: "Prysmian Group", desc: "Halogen Free Yanmaz Kablo" },
    { name: "ABB", desc: "Kompakt Şalterler & Kontaktörler" },
    { name: "Hes Kablo", desc: "TSE Standart Altyapı Kabloları" },
    { name: "Philips", desc: "Profesyonel LED & Tasarruf" }
  ];

  const faqs = [
    {
      q: "Elektrik tesisatı ve keşif bedeli alıyor musunuz?",
      a: "İstanbul geneli kurumsal projeler, fabrika ve bina tesisatları için yerinde ön keşif ve maliyet analizi hizmetimiz tamamen ücretsizdir."
    },
    {
      q: "Kompanzasyon panolarında reaktif ceza garantisi veriyor musunuz?",
      a: "Evet. Oluşum Elektrik olarak periyodik bakımını ve kurulumunu yaptığımız kompanzasyon sistemlerinde reaktif güç oranlarını yönetmelik sınırında tutarak ceza riskini sıfıra indiriyoruz."
    },
    {
      q: "Kullandığınız malzemeler standartlara uygun mu?",
      a: "Tüm projelerimizde yalnızca TSE, CE ve ISO sertifikalı Halogen Free (yangına dayanıklı, zehirli gaz çıkarmayan) kablolar ve A kalite şalt malzemeleri kullanılmaktadır."
    },
    {
      q: "Gece saatlerinde acil arıza desteğiniz var mı?",
      a: "İstanbul'un hem Anadolu hem de Avrupa yakasında 7/24 sahada olan mobil nöbetçi ekiplerimizle sigorta patlaması, ana hat kesintisi ve acil arızalara anında müdahale ediyoruz."
    }
  ];

  return (
    <div className="min-h-screen bg-[#060913] text-slate-100 font-sans antialiased selection:bg-amber-400 selection:text-slate-950 overflow-x-hidden">
      
      {/* 1. ÜST BİLGİ ŞERİDİ */}
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

      {/* 3. HERO & HESAPLAMA SİHİRBAZI */}
      <section className="relative pt-16 pb-24 px-4 overflow-hidden border-b border-slate-800">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-amber-500/10 blur-[140px] rounded-full pointer-events-none" />

        <div className="max-w-5xl mx-auto text-center space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 bg-slate-900 border border-amber-400/30 text-amber-400 text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full shadow-inner">
            <Shield className="w-4 h-4" /> Endüstriyel Tesisler, Ticari Yapılar ve Konut Çözümleri
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-tight">
            Güvenilir Elektrik Çözümleri ve <br />
            <span className="text-amber-400 drop-shadow-md">
              Profesyonel Mühendislik
            </span>
          </h1>

          <p className="text-slate-400 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
            Yüksek gerilim trafolarından ana dağıtım panolarına, fabrika otomasyonundan zayıf akım sistemlerine kadar A'dan Z'ye profesyonel elektrik mühendisliği ve taahhüt hizmetleri.
          </p>

          <div className="max-w-3xl mx-auto bg-slate-900/90 border border-slate-800 p-6 sm:p-8 rounded-3xl shadow-2xl backdrop-blur-xl mt-10 text-left">
            <div className="flex items-center gap-2 mb-6 border-b border-slate-800 pb-4">
              <Calculator className="text-amber-400 w-5 h-5" />
              <div>
                <h2 className="text-lg font-bold text-white">Proje Maliyet & Keşif Sihirbazı</h2>
                <p className="text-xs text-slate-400">Talebinizi seçin, uzman ekibimiz hemen fiyatlandırsın.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div>
                <label className="text-xs text-slate-300 block mb-1.5 font-medium">Hizmet Alanı / İlçe</label>
                <select 
                  value={district} 
                  onChange={(e) => setDistrict(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 text-slate-200 text-sm rounded-xl px-3.5 py-3 focus:outline-none focus:border-amber-400"
                >
                  <option>Adalar</option>
                  <option>Arnavutköy</option>
                  <option>Ataşehir</option>
                  <option>Avcılar</option>
                  <option>Bağcılar</option>
                  <option>Bahçelievler</option>
                  <option>Bakırköy</option>
                  <option>Başakşehir</option>
                  <option>Bayrampaşa</option>
                  <option>Beşiktaş</option>
                  <option>Beykoz</option>
                  <option>Beylikdüzü</option>
                  <option>Beyoğlu</option>
                  <option>Büyükçekmece</option>
                  <option>Çatalca</option>
                  <option>Çekmeköy</option>
                  <option>Esenler</option>
                  <option>Esenyurt</option>
                  <option>Eyüpsultan</option>
                  <option>Fatih</option>
                  <option>Gaziosmanpaşa</option>
                  <option>Güngören</option>
                  <option>Kadıköy</option>
                  <option>Kağıthane</option>
                  <option>Kartal</option>
                  <option>Küçükçekmece</option>
                  <option>Maltepe</option>
                  <option>Pendik</option>
                  <option>Sancaktepe</option>
                  <option>Sarıyer</option>
                  <option>Silivri</option>
                  <option>Sultanbeyli</option>
                  <option>Sultangazi</option>
                  <option>Şile</option>
                  <option>Şişli</option>
                  <option>Tuzla</option>
                  <option>Ümraniye</option>
                  <option>Üsküdar</option>
                  <option>Zeytinburnu</option>
                </select>
              </div>

              <div>
                <label className="text-xs text-slate-300 block mb-1.5 font-medium">Yapı / Proje Türü</label>
                <select 
                  value={buildingType} 
                  onChange={(e) => setBuildingType(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 text-slate-200 text-sm rounded-xl px-3.5 py-3 focus:outline-none focus:border-amber-400"
                >
                  <option>Sanayi Alanı</option>
                  <option>Fabrika</option>
                  <option>Atölye</option>
                  <option>İnşaat Şantiyesi</option>
                  <option>Ofis / Plaza</option>
                  <option>Mağaza / Dükkan</option>
                  <option>Villa / Müstakil Ev</option>
                  <option>Apartman / Daire</option>
                </select>
              </div>

              <div>
                <label className="text-xs text-slate-300 block mb-1.5 font-medium">İhtiyaç Duyulan İşlem</label>
                <select 
                  value={serviceNeed} 
                  onChange={(e) => setServiceNeed(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 text-slate-200 text-sm rounded-xl px-3.5 py-3 focus:outline-none focus:border-amber-400"
                >
                  <option>Pano Montajı</option>
                  <option>Kompanzasyon Takibi</option>
                  <option>Sıfırdan Komple Tesisat</option>
                  <option>Topraklama Ölçümü</option>
                  <option>Paratoner Kurulumu</option>
                  <option>Zayıf Akım (Kamera, İnternet)</option>
                  <option>LED Aydınlatma Dönüşümü</option>
                </select>
              </div>

              <div>
                <label className="text-xs text-slate-300 block mb-1.5 font-medium">Hizmet Aciliyeti</label>
                <select 
                  value={urgency} 
                  onChange={(e) => setUrgency(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 text-slate-200 text-sm rounded-xl px-3.5 py-3 focus:outline-none focus:border-amber-400"
                >
                  <option>7/24 Acil Müdahale (Bugün)</option>
                  <option>Bu Hafta İçi Keşif İstiyorum</option>
                  <option>İleri Tarihli Proje / Fiyat Teklifi</option>
                </select>
              </div>
            </div>

            <a 
              href={getCustomWhatsAppLink()} 
              target="_blank" 
              rel="noreferrer"
              className="w-full flex items-center justify-center gap-3 bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold py-4 rounded-xl transition shadow-xl shadow-amber-400/20 text-base"
            >
              <MessageCircle className="w-5 h-5 fill-slate-950" />
              Talebi Gönder ve Hızlı Fiyat Al <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* 4. MARKALAR */}
      <section className="bg-slate-950 py-12 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-xs font-bold uppercase tracking-widest text-slate-400 mb-8">
            Kullandığımız 1. Sınıf TSE & CE Onaylı Ekipman Markaları
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {partnerBrands.map((b, i) => (
              <div key={i} className="bg-slate-900/60 border border-slate-800/80 p-4 rounded-2xl text-center">
                <div className="font-extrabold text-white text-sm">{b.name}</div>
                <div className="text-[11px] text-amber-400/80 mt-1">{b.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. 4 ADIMLI MÜHENDİSLİK SÜRECİ */}
      <section className="py-20 px-4 max-w-7xl mx-auto border-b border-slate-800">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400">Çalışma Metodolojimiz</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Mühendislik Standartlarında Süreç</h2>
          <p className="text-slate-400 text-sm">Tüm projeleriniz alanında uzman mühendislerimiz ve sertifikalı ustalarımızla yürütülür.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-slate-900/40 border border-slate-800 p-6 rounded-3xl relative space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-400 text-slate-950 font-black flex items-center justify-center text-lg">1</div>
            <h3 className="font-bold text-white text-lg">Ücretsiz Keşif</h3>
            <p className="text-slate-400 text-xs leading-relaxed">Sahada güç talebi, hat güvenliği ve fiziki gereksinimler yerinde tespit edilir.</p>
          </div>
          <div className="bg-slate-900/40 border border-slate-800 p-6 rounded-3xl relative space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-400 text-slate-950 font-black flex items-center justify-center text-lg">2</div>
            <h3 className="font-bold text-white text-lg">Projelendirme</h3>
            <p className="text-slate-400 text-xs leading-relaxed">TSE ve yönetmelik standartlarında malzeme listesi ve şema hazırlanır.</p>
          </div>
          <div className="bg-slate-900/40 border border-slate-800 p-6 rounded-3xl relative space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-400 text-slate-950 font-black flex items-center justify-center text-lg">3</div>
            <h3 className="font-bold text-white text-lg">Uzman Uygulama</h3>
            <p className="text-slate-400 text-xs leading-relaxed">Sözleşmeye sadık kalınarak, yanmaz kablo ve sertifikalı panolarla kurulum tamamlanır.</p>
          </div>
          <div className="bg-slate-900/40 border border-slate-800 p-6 rounded-3xl relative space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-400 text-slate-950 font-black flex items-center justify-center text-lg">4</div>
            <h3 className="font-bold text-white text-lg">Test & Teslimat</h3>
            <p className="text-slate-400 text-xs leading-relaxed">Kaçak akım, topraklama testleri sonrası sistem resmi garanti ile teslim edilir.</p>
          </div>
        </div>
      </section>

      {/* 6. HİZMET ALANLARI */}
      <section id="hizmetler" className="py-24 px-4 max-w-7xl mx-auto border-b border-slate-800">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400">Faaliyet Alanları</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Kapsamlı Elektrik Çözümlerimiz</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-slate-900/60 border border-slate-800 hover:border-amber-400/40 p-8 rounded-3xl transition duration-300 space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-amber-400/10 flex items-center justify-center text-amber-400">
              <Building2 className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-white">Elektrik Taahhüt & Şantiye</h3>
            <p className="text-slate-400 text-sm leading-relaxed">Kaba inşaat borulama, busbar kanalları, sanayi hatları ve anahtar teslim fabrika elektrik altyapısı.</p>
            <ul className="text-xs text-slate-300 space-y-2 pt-2">
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-amber-400" /> Kablo Kanalları & Busbar</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-amber-400" /> Ana Dağıtım Altyapısı</li>
            </ul>
          </div>
          <div className="bg-slate-900/60 border border-slate-800 hover:border-amber-400/40 p-8 rounded-3xl transition duration-300 space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-amber-400/10 flex items-center justify-center text-amber-400">
              <Zap className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-white">Pano & Kompanzasyon</h3>
            <p className="text-slate-400 text-sm leading-relaxed">Reaktif ceza önleyici kompanzasyon bakımları, bina ana panoları (ADP) ve otomasyon sistemleri.</p>
            <ul className="text-xs text-slate-300 space-y-2 pt-2">
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-amber-400" /> Reaktif Güç ve Ceza Takibi</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-amber-400" /> Şalter & Kontaktör Yenileme</li>
            </ul>
          </div>
          <div className="bg-slate-900/60 border border-slate-800 hover:border-amber-400/40 p-8 rounded-3xl transition duration-300 space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-amber-400/10 flex items-center justify-center text-amber-400">
              <Wrench className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-white">7/24 Acil Arıza & Bakım</h3>
            <p className="text-slate-400 text-sm leading-relaxed">Sigorta atması, kaçak akım arızaları, kısa devre tespiti ve periyodik topraklama kontrolleri.</p>
            <ul className="text-xs text-slate-300 space-y-2 pt-2">
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-amber-400" /> Termal Kamera ile Kaçak Tespiti</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-amber-400" /> 7/24 Nöbetçi Mobil Servis</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 7. SSS (AKORDEON) */}
      <section className="py-20 px-4 max-w-4xl mx-auto border-b border-slate-800">
        <div className="text-center space-y-3 mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400">Aklınıza Takılanlar</span>
          <h2 className="text-3xl font-extrabold text-white">Sıkça Sorulan Sorular</h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} onClick={() => toggleFaq(index)} className="bg-slate-900/50 border border-slate-800 rounded-2xl p-5 cursor-pointer transition hover:border-slate-700">
              <div className="flex justify-between items-center gap-4">
                <h3 className="font-bold text-white text-base">{faq.q}</h3>
                <ChevronDown className={`w-5 h-5 text-amber-400 transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`} />
              </div>
              {openFaq === index && (
                <p className="text-slate-400 text-sm mt-3 pt-3 border-t border-slate-800 leading-relaxed">{faq.a}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 8. İSTANBUL HİZMET AĞI */}
      <section className="py-16 px-4 bg-slate-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-black text-white">Geniş Servis Ağımız</h2>
            <p className="text-slate-400 text-sm mt-2">İstanbul'un her noktasına 7/24 uzman kadromuzla hızlı müdahale ediyoruz.</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            
            {/* ANADOLU YAKASI (14 İlçe) */}
            <div className="bg-slate-900/40 border border-slate-800 p-6 rounded-2xl h-full flex flex-col">
              <h3 className="text-amber-400 font-bold mb-5 flex items-center gap-2 border-b border-slate-800 pb-3">
                <MapPin className="w-5 h-5" /> Anadolu Yakası
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-4 gap-x-2 text-[13px] text-slate-300">
                <span>Adalar</span><span>Ataşehir</span><span>Beykoz</span>
                <span>Çekmeköy</span><span>Kadıköy</span><span>Kartal</span>
                <span>Maltepe</span><span>Pendik</span><span>Sancaktepe</span>
                <span>Sultanbeyli</span><span>Şile</span><span>Tuzla</span>
                <span>Ümraniye</span><span>Üsküdar</span>
              </div>
            </div>

            {/* AVRUPA YAKASI (25 İlçe) */}
            <div className="bg-slate-900/40 border border-slate-800 p-6 rounded-2xl h-full flex flex-col">
              <h3 className="text-amber-400 font-bold mb-5 flex items-center gap-2 border-b border-slate-800 pb-3">
                <MapPin className="w-5 h-5" /> Avrupa Yakası
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-4 gap-x-2 text-[13px] text-slate-300">
                <span>Arnavutköy</span><span>Avcılar</span><span>Bağcılar</span>
                <span>Bahçelievler</span><span>Bakırköy</span><span>Başakşehir</span>
                <span>Bayrampaşa</span><span>Beşiktaş</span><span>Beylikdüzü</span>
                <span>Beyoğlu</span><span>Büyükçekmece</span><span>Çatalca</span>
                <span>Esenler</span><span>Esenyurt</span><span>Eyüpsultan</span>
                <span>Fatih</span><span>Gaziosmanpaşa</span><span>Güngören</span>
                <span>Kağıthane</span><span>Küçükçekmece</span><span>Sarıyer</span>
                <span>Silivri</span><span>Sultangazi</span><span>Şişli</span>
                <span>Zeytinburnu</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 9. İLETİŞİM & HARİTA - TAŞMA SORUNU ÇÖZÜLDÜ */}
      <section className="py-24 px-4 max-w-7xl mx-auto border-b border-slate-800">
        
        {/* Üst Başlık Kısmı */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-8">
          <div>
            <span style={{ fontSize: '11px', fontWeight: '800', letterSpacing: '0.15em', color: '#94a3b8', textTransform: 'uppercase' }}>
              BİZE ULAŞIN
            </span>
            <h2 style={{ fontSize: '46px', fontWeight: '900', color: '#ffffff', letterSpacing: '-0.03em', margin: '4px 0 0 0' }}>
              İletişim
            </h2>
          </div>
          <p style={{ fontSize: '14px', color: '#94a3b8', margin: 0, maxWidth: '440px' }} className="md:text-right">
            Hizmetlerimiz hakkında detaylı bilgi almak veya acil teknik destek talebinde bulunmak için bize ulaşın.
          </p>
        </div>

        {/* Grid Kısmı: Mobilde 1 Sütun, Bilgisayarda 2 Sütun */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start w-full">
          
          {/* SOL: Harita ve Adres */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '100%' }}>
            <div style={{ width: '100%', height: '380px', borderRadius: '24px', overflow: 'hidden', border: '1px solid #1e293b', background: '#0f172a', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)' }}>
              <iframe
                title="Oluşum Elektrik Konum"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3009.1352458421834!2d29.117183!3d41.025556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac8dc8e35a1a3%3A0xb35a09e07f6f59b!2sBuyaka%20AVM!5e0!3m2!1str!2str!4v1700000000000!5m2!1str!2str"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <div style={{ background: '#0b1120', border: '1px solid #1e293b', borderRadius: '18px', padding: '16px 20px', display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ padding: '10px', background: 'rgba(245, 158, 11, 0.1)', borderRadius: '12px', color: '#fbbf24', flexShrink: 0 }}>
                <MapPin style={{ width: '22px', height: '22px' }} />
              </div>
              <div>
                <span style={{ fontSize: '10px', fontWeight: '800', letterSpacing: '0.12em', color: '#94a3b8', display: 'block', textTransform: 'uppercase' }}>
                  İSTANBUL MERKEZ
                </span>
                <p style={{ fontSize: '13px', color: '#cbd5e1', fontWeight: '500', margin: '4px 0 0 0', lineHeight: '1.5' }}>
                  Fatih Sultan Mehmet Mah. Poligon Cad. No:8C Buyaka 2 Sitesi Kule 3 K:3 D:23 Ümraniye / İstanbul
                </p>
              </div>
            </div>
          </div>

          {/* SAĞ: İletişim Bilgileri ve Aksiyon Butonları */}
          <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            
            <div style={{ background: 'linear-gradient(to right, #f59e0b, #fbbf24)', borderRadius: '24px', padding: '24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', boxShadow: '0 10px 25px -5px rgba(245, 158, 11, 0.2)' }}>
              <div>
                <h3 style={{ color: '#020617', fontWeight: '900', fontSize: '20px', margin: 0 }}>7/24 Acil Elektrikçi</h3>
                <p style={{ color: '#0f172a', fontSize: '14px', fontWeight: '600', margin: '4px 0 0 0' }}>Anında mobil nöbetçi ekip yönlendirmesi.</p>
              </div>
              <PhoneCall style={{ width: '40px', height: '40px', color: '#020617', opacity: 0.8 }} />
            </div>

            <div style={{ background: '#0b1120', border: '1px solid #1e293b', borderRadius: '24px', padding: '24px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
              
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                <div style={{ padding: '12px', background: '#1e293b', borderRadius: '14px', color: '#fbbf24' }}>
                  <Phone style={{ width: '20px', height: '20px' }} />
                </div>
                <div>
                  <span style={{ fontSize: '10px', fontWeight: '800', letterSpacing: '0.12em', color: '#94a3b8', display: 'block', textTransform: 'uppercase', marginBottom: '4px' }}>Müşteri Hizmetleri & Keşif</span>
                  <a href={`tel:${cleanPhone}`} style={{ fontSize: '18px', fontWeight: '800', color: '#ffffff', textDecoration: 'none' }}>{phoneNumber}</a>
                </div>
              </div>

              <div style={{ width: '100%', height: '1px', background: '#1e293b' }}></div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                <div style={{ padding: '12px', background: '#1e293b', borderRadius: '14px', color: '#fbbf24' }}>
                  <Mail style={{ width: '20px', height: '20px' }} />
                </div>
                <div>
                  <span style={{ fontSize: '10px', fontWeight: '800', letterSpacing: '0.12em', color: '#94a3b8', display: 'block', textTransform: 'uppercase', marginBottom: '4px' }}>E-Posta Adresimiz</span>
                  <a href={`mailto:${companyEmail}`} style={{ fontSize: '15px', fontWeight: '500', color: '#cbd5e1', textDecoration: 'none' }}>{companyEmail}</a>
                </div>
              </div>

              <div style={{ width: '100%', height: '1px', background: '#1e293b' }}></div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                <div style={{ padding: '12px', background: '#1e293b', borderRadius: '14px', color: '#fbbf24' }}>
                  <Clock style={{ width: '20px', height: '20px' }} />
                </div>
                <div>
                  <span style={{ fontSize: '10px', fontWeight: '800', letterSpacing: '0.12em', color: '#94a3b8', display: 'block', textTransform: 'uppercase', marginBottom: '4px' }}>Çalışma Saatleri</span>
                  <p style={{ fontSize: '15px', fontWeight: '500', color: '#cbd5e1', margin: 0 }}>Pzt - Cmt: 08:00 - 17:00</p>
                  <p style={{ fontSize: '13px', fontWeight: '600', color: '#fbbf24', margin: '4px 0 0 0' }}>Pazar: Nöbetçi Ekip (Sadece Arıza)</p>
                </div>
              </div>

            </div>

            {/* Butonlar: Mobilde alt alta, PC'de yan yana */}
            <div className="flex flex-col sm:flex-row gap-4 w-full">
              <a 
                href={`tel:${cleanPhone}`} 
                style={{ flex: 1, background: '#1e293b', color: '#ffffff', fontWeight: '800', padding: '16px', borderRadius: '16px', border: '1px solid #334155', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', textDecoration: 'none', transition: 'background 0.2s' }}
              >
                <Phone style={{ width: '18px', height: '18px' }} /> Aramayı Başlat
              </a>
              <a 
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank" 
                rel="noreferrer"
                style={{ flex: 1, background: '#10b981', color: '#020617', fontWeight: '900', padding: '16px', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', textDecoration: 'none', transition: 'background 0.2s', boxShadow: '0 10px 15px -3px rgba(16, 185, 129, 0.2)' }}
              >
                <MessageCircle style={{ width: '18px', height: '18px' }} /> WhatsApp'tan Yaz
              </a>
            </div>

          </div>

        </div>
      </section>

      {/* 10. FOOTER */}
      <footer className="bg-[#04060d] py-10 px-4 text-center text-xs text-slate-500">
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