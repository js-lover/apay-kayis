import Image from "next/image";
import Link from "next/link";
import { BASE_PATH } from "@/lib/constants";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center overflow-hidden bg-industry-dark">
        <div className="absolute inset-0 z-0 opacity-40">
          <Image
            src={`${BASE_PATH}/industrial_conveyor_belts_hero.png`}
            alt="Endüstriyel Kayışlar"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-industry-dark via-industry-dark/80 to-transparent z-10" />

        <div className="container mx-auto px-6 relative z-20">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white">
              Geleceği <span className="text-apay-red">Güçle</span> Hareket Ettiriyoruz
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed">
              Apay Kayış, 20 yılı aşkın tecrübesiyle endüstriyel güç aktarma sistemlerinde dünya standartlarında çözümler sunar. Zaman kayışlarından özel kaplamalı sistemlere kadar geniş ürün yelpazesi.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/urunler"
                className="bg-apay-red hover:bg-apay-red-dark text-white px-8 py-4 rounded-md font-bold text-center transition-all shadow-lg"
              >
                Ürün Kataloğunu İncele
              </Link>
              <Link
                href="/iletisim"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-industry-dark px-8 py-4 rounded-md font-bold text-center transition-all"
              >
                Bizimle İletişime Geçin
              </Link>
            </div>
          </div>
        </div>

        {/* Accent Bar */}
        <div className="absolute bottom-0 left-0 w-full h-2 bg-apay-red z-20" />
      </section>

      {/* Featured Categories */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Öne Çıkan Ürün Gruplarımız</h2>
            <div className="w-20 h-1.5 bg-apay-red mx-auto mb-6" />
            <p className="text-gray-600 max-w-2xl mx-auto">
              Endüstrinin her alanında ihtiyaç duyulan, yüksek mukavemetli ve uzun ömürlü kayış çözümleri.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Zaman Kayışları", desc: "Senkronize güç aktarımı için hassas dişli yapısı.", image: `${BASE_PATH}/timing_belts.png` },
              { title: "V-Kayışları", desc: "Yüksek güç ve hız kapasiteli klasik çözümler.", image: `${BASE_PATH}/v_belts.png` },
              { title: "Özel Kaplamalar", desc: "Taşıma ve konveyör sistemleri için özel yüzeyler.", image: `${BASE_PATH}/coated_belts.png` }
            ].map((cat, i) => (
              <Link key={i} href="/urunler" className="group relative h-80 overflow-hidden rounded-2xl shadow-lg flex flex-col justify-end p-8 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
                {/* Background Image */}
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-industry-dark via-industry-dark/40 to-transparent z-10" />

                {/* Content */}
                <div className="relative z-20">
                  <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-apay-red transition-colors">{cat.title}</h3>
                  <p className="text-gray-200 text-sm mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 line-clamp-2">
                    {cat.desc}
                  </p>
                  <div className="text-white font-bold flex items-center gap-2 text-sm">
                    Detaylı Bilgi <span className="text-apay-red group-hover:translate-x-2 transition-transform">&rarr;</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Contact CTA */}
      <section className="py-20 bg-apay-red text-white overflow-hidden relative">
        <div className="absolute right-0 top-0 opacity-10 translate-x-1/4 -translate-y-1/4">
          <svg width="400" height="400" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="40" stroke="white" strokeWidth="1" fill="none" />
            <circle cx="50" cy="50" r="30" stroke="white" strokeWidth="1" fill="none" />
            <circle cx="50" cy="50" r="20" stroke="white" strokeWidth="1" fill="none" />
          </svg>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Teknik Bir Çözüme mi İhtiyacınız Var?</h2>
          <p className="text-xl mb-10 opacity-90 max-w-3xl mx-auto">
            Mühendislik ekibimiz, projenize en uygun kayış yapısını belirlemek ve maliyetlerinizi optimize etmek için hazır.
          </p>
          <Link
            href="/iletisim"
            className="bg-white text-apay-red hover:bg-industry-light px-10 py-5 rounded-md font-bold text-lg transition-all inline-block shadow-xl"
          >
            Teknik Danışmanlık Alın
          </Link>
        </div>
      </section>
    </div>
  );
}
