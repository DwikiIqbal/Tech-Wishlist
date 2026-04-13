"use client"; // Wajib ada karena AOS butuh browser

import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import AOS from "aos";
import "aos/dist/aos.css"; // Import file CSS AOS

export default function Home() {
  useEffect(() => {
  AOS.init({
    duration: 1000,
    once: false,      // Set ke false jika ingin animasi muncul SETIAP kali di-scroll ke atas/bawah
    mirror: true,     // Agar saat di-scroll balik ke atas, animasinya jalan lagi
    offset: 120,      // Animasi baru jalan setelah elemen berjarak 120px dari bawah layar
    startEvent: "DOMContentLoaded", // Event untuk inisialisasi AOS
  });
  
  setTimeout(() => {
    AOS.refresh();
  }, 500);
}, []);
  return (
    <main className="min-h-screen">

      <div className="relative h-screen w-full bg-gray-900 overflow-hidden">
  {/* Gambar 1: Pojok Kiri Atas */}
  <img 
  src="/assets/blob-haikei.png" 
  className="absolute bottom-[100px] left-[150px] w-40 opacity-30 z-10" 
  data-aos="fade-up"
  data-aos-delay="500"
  data-aos-once="false" // Pastikan ini tertulis untuk animasi ulang
/>

  {/* Gambar 2: Pojok Kanan Bawah */}
  <img 
    src="/assets/blob-haikei(1).png" 
    className="absolute bottom-20 right-20 w-60 opacity-30"
    data-aos="fade-up-left"
    data-aos-delay="600"
  />

  {/* Konten Utama */}
  <div className="relative z-10 flex h-full items-center justify-center">
    <h1 className="text-white text-7xl font-bodoni">The Future of Tech</h1>
  </div>
</div>

{/* Section 1: Text Content */}
      <section className="snap-start relative w-full snap-start h-screen flex items-center justify-center gap-20 px-20">
        {/* Bagian gambar random melayang */}

        <img 
  src="/assets/blob-haikei.png" 
  className="absolute top-10 left-10 w-40 opacity-30 z-100000" // Tambahkan z-50
  data-aos="fade-down"
  data-aos-delay="500"
/>

        <img 
  src="/assets/blob-haikei(1).png" 
  className="absolute bottom-20 right-20 w-60 opacity-30 z-100000" // Tambahkan z-50
  data-aos="fade-up"
  data-aos-delay="500"
  data-aos-easing="ease-out-back"
/>

        <img 
  src="/assets/blob-haikei.png" 
  className="absolute bottom-100 left-150 w-40 opacity-30" // Tambahkan z-50
  data-aos="fade-up"
  data-aos-delay="500"
  data-aos-easing="ease-out-back"
/>

      <div className="flex flex-col items-start max-w-xl space-y-4 z-100">
        <h1 className="text-7xl font-bold mb-4 text-black">
          Tech Wishlist
        </h1>
        <p className="text-3xl font-light text-gray-700">
          Make our wishlist and compare with other devices
        </p>
        <p className="text-justify text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat repellat ipsam beatae commodi, 
          dolor consequatur inventore culpa aliquid deleniti voluptas unde excepturi quod explicabo 
          voluptate qui dignissimos quidem?
        </p>
        <div className="mt-10 gap-4 flex">
          <button className="bg-blue-600 text-white rounded-lg px-8 py-3 font-semibold transition-all">
            Sign Up
          </button>
          <button className="border-2 border-blue-600 text-blue-600 rounded-lg px-8 py-3 font-semibold transition-all">
            Login
          </button>
        </div>
      </div>

      <div className="flex items-center justify-center ">
        <img className=" w-[550px] h-auto object-contain" src="/assets/kg.png" alt="Hero" />
      </div>
      </section>
  
{/* Section 2: Image Content */}
        <section className="snap-start h-screen flex items-center justify-center gap-20 px-20">
        <div>
          <h1 className="text-5xl">Apa itu Tech Wishlist?</h1>
          <p className="mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies tincidunt, 
            nunc nisl aliquam nisl, eget ultricies nunc nisl eget nunc.
          </p>

          <div className="grid grid-cols-3 gap-20 mt-20 w-330">

            <div data-aos="fade-up" data-aos-delay="100" className="w-full h-full">
            <div className="w-full h-full p-8 rounded-3xl border border-gray-300 bg-[url('/assets/blob-haikei(1).png')] 
                  shadow-xl transition-all duration-300 ease-out
                  hover:-translate-y-3 hover:scale-[1.03] hover:shadow-2xl hover:border-blue-400">
              <h1 className="text-4xl ">Feature 1</h1>
              <p className="mt-5">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium ullam natus id beatae, tempore nobis? 
                Illum iusto, nihil id tenetur nisi quae beatae corrupti. Quasi perspiciatis eveniet inventore deleniti explicabo.
              </p>
              </div>
            </div>

             <div data-aos="fade-up" data-aos-delay="300" className="w-full h-full">
            <div className="w-full h-full p-8 rounded-3xl border border-gray-300 bg-white 
                  shadow-xl transition-all duration-300 ease-out
                  hover:-translate-y-3 hover:scale-[1.03] hover:shadow-2xl hover:border-yellow-400">  
              <h1 className="text-4xl">Feature 2</h1>
              <p className="mt-5">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium ullam natus id beatae, tempore nobis? 
                Illum iusto, nihil id tenetur nisi quae beatae corrupti. Quasi perspiciatis eveniet inventore deleniti explicabo.
              </p>
              </div>
            </div>

             <div data-aos="fade-up" data-aos-delay="500" className="w-full h-full">
            <div className="w-full h-full p-8 rounded-3xl border border-gray-300 bg-white 
                  shadow-xl transition-all duration-300 ease-out
                  hover:-translate-y-3 hover:scale-[1.03] hover:shadow-2xl hover:border-green-400"> 
              <h1 className="text-4xl">Feature 3</h1>
              <p className="mt-5">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium ullam natus id beatae, tempore nobis? 
                Illum iusto, nihil id tenetur nisi quae beatae corrupti. Quasi perspiciatis eveniet inventore deleniti explicabo.
              </p>
            </div>
            </div>

          </div>

        </div>
      </section>


{/* Section 3: Review device */}
       <section className="snap-start relative w-full snap-start h-screen flex-wrap flex items-center justify-center px-30">

        <div className="flex items-center justify-center flex-col gap-6 mb-20 mt-30">
          <h1 className="text-5xl font-bold flex justify-center">Catalog Device</h1>
          <p className="text-center text-lg text-gray-600">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi iste blanditiis laborum distinctio tempora. Eaque placeat a quis error incidunt atque iure alias sunt, aut dolore, perspiciatis ipsa, quisquam doloremque!
          </p>
        </div>

        <Swiper
          spaceBetween={0}
          centeredSlides={true}
          loop={true} // Agar slide kembali ke awal setelah slide terakhir
          autoplay={{
            delay: 4000, // Slide berganti setiap 4 detik
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true, // Titik-titik di bawah jadi lebih estetik
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="h-[500px] w-full rounded-3xl overflow-hidden mb-50"
        >
          {/* SLIDE 1 */}
          <SwiperSlide>
            <div className="relative w-full h-[500px] flex items-center justify-center bg-gray-900 rounded-3xl overflow-hidden">
              <div className="z-10 text-center text-white px-6">
                <h2 className="text-6xl font-bold font-bodoni" data-aos="fade-down">Future Tech</h2>
                <p className="mt-4 text-xl font-light">Explore the latest wishlist devices of 2026.</p>
                <button className="mt-10 bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-full transition-all">
                  Shop Now
                </button>
              </div>
              {/* Ganti dengan path gambar kamu */}
              <img src="/assets/hero1.jpg" className="absolute inset-0 w-full h-full object-cover opacity-60" alt="" />
            </div>
          </SwiperSlide>

          {/* SLIDE 2 */}
          <SwiperSlide>
            <div className="relative w-full h-[500px] flex items-center justify-center bg-blue-900 rounded-3xl overflow-hidden">
              <div className="z-10 text-center text-white px-6">
                <h2 className="text-6xl font-bold font-bodoni">Productivity Pro</h2>
                <p className="mt-4 text-xl font-light">The best setups for your home office.</p>
                <img src="/assets/kg.png" className="absolute inset-0 w-full h-full object-cover opacity-50" alt="" />
              </div>
              <img src="/assets/blob-haikei.png" className="absolute inset-0 w-full h-full object-cover opacity-50" alt="" />
            </div>
          </SwiperSlide>

        </Swiper>
      </section>
       
    </main>
  );
}