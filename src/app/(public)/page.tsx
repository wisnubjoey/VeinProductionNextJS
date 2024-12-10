import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import PackagesSection from '@/components/sections/PackagesSection';
import FeaturedPortfolio from '@/components/sections/FeaturedPortfolio';
import AboutSection from '@/components/sections/AboutSection';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        
        <HeroSection />
        <FeaturedPortfolio />
        <PackagesSection />
      </main>
      <Footer />
    </>
  );
}