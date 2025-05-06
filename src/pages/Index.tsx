
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProductsSection from '@/components/ProductsSection';
import IngredientsSection from '@/components/IngredientsSection';
import SustainabilitySection from '@/components/SustainabilitySection';
import BlogSection from '@/components/BlogSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <IngredientsSection />
      <SustainabilitySection />
      <BlogSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
