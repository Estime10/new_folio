import Image from 'next/image';
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa6';
import { RxSlash } from 'react-icons/rx';
import { SiGmail } from 'react-icons/si';
import { TiThMenu } from 'react-icons/ti';

const menuItems = [
  { id: 1, label: 'About', href: '#about' },
  { id: 2, label: 'Projects', href: '#projects' },
  { id: 3, label: 'Contact', href: '#contact' },
];

export const HomeScreen = () => {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="fixed -top-10 lg:-top-24 left-0 right-0 px-4 flex justify-between items-center lg:px-10 lg:py-10">
        {/* Logo */}
        <div className="relative w-60 h-60 lg:w-80 lg:h-80 -left-14 lg:-left-22">
          <Image src="/images/logo_2.png" alt="Logo" className="object-contain" priority fill />
        </div>

        {/* Nom et Prénom (visible uniquement sur desktop) */}
        <div className="hidden lg:flex flex-col items-center">
          <h1 className="font-playfair text-5xl text-[#E40037] font-bold text-center uppercase">
            <span className="text-primary text-[#fff]">Estime</span>
          </h1>
          <h1 className="font-playfair text-5xl text-[#E40037] font-bold text-center mt-2 uppercase">
            Vangu
          </h1>
        </div>

        {/* Menu Icon (visible uniquement sur mobile) */}
        <div className="lg:hidden">
          <TiThMenu className="text-white text-4xl" />
        </div>
      </header>

      {/* Image Centrale */}
      <div className="h-screen flex items-center justify-center">
        {/* Contenu Mobile (visible uniquement sur mobile) */}
        <div className="lg:hidden absolute top-44 left-0 right-0 flex flex-col items-center z-10">
          <h1 className="font-playfair text-4xl text-[#E40037] font-bold text-center uppercase">
            <span className="text-primary text-[#fff]">Estime</span> Vangu
          </h1>
          <p className="text-[#E40037] text-4xl font-bold text-center mt-4 uppercase">
            <span className="font-bold text-white">Web</span>
            <RxSlash className="inline-block mx-0 text-[#E40037] w-8 h-8 -mt-1" />
            <span className="font-bold text-white">App</span> Developer
          </p>
        </div>

        <div className="relative w-[650px] h-[650px] lg:w-[800px] lg:h-[800px] mt-[420px] lg:mt-[300px]">
          <div className="absolute inset-0 bg-[#E40037] blur-3xl opacity-50 -z-10 rounded-full overflow-hidden"></div>
          <Image
            src="/images/me.png"
            alt="Image principale"
            fill
            className="object-cover rounded-lg shadow-xl"
            priority
          />
        </div>
      </div>

      {/* Professions (visible uniquement sur desktop) */}
      <div className="hidden lg:block fixed bottom-10 left-10 gap-4 text-center">
        <p className="text-[#E40037] text-4xl font-bold uppercase">
          <span className="font-bold text-white">Web</span>
          <RxSlash className="inline-block mx-0 text-[#E40037] w-10 h-10 -mt-1" />
          <span className="font-bold text-white">App</span>
        </p>
        <p className="text-[#E40037] text-4xl font-bold mt-2 uppercase">Developer</p>
      </div>

      {/* Menu Navigation (visible uniquement sur desktop) */}
      <div className="hidden lg:block fixed -right-10 top-[210px]">
        <nav className="flex flex-col justify-between h-[550px]">
          {menuItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className="text-white text-3xl hover:text-[#E40037] transition-colors transform rotate-90 origin-left font-bold uppercase w-32 h-10 flex items-center justify-center"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>

      {/* Icônes sociales (visible uniquement sur desktop) */}
      <div className="hidden lg:flex fixed bottom-10 right-10 gap-4">
        <div className="flex gap-4">
          <FaInstagram className="text-[#fff] text-6xl hover:text-[#E40037] transition-colors cursor-pointer" />
          <FaLinkedin className="text-[#fff] text-6xl hover:text-[#E40037] transition-colors cursor-pointer" />
          <SiGmail className="text-[#fff] text-6xl hover:text-[#E40037] transition-colors cursor-pointer" />
        </div>
      </div>
    </main>
  );
};
