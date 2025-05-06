
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container-custom flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <h1 className="text-2xl font-bold text-afriroots-green">
            Afri<span className="text-afriroots-orange">Roots</span>
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 items-center">
          <NavLinks />
          <Button className="btn-primary">Shop Now</Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-afriroots-green"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white py-4 px-4 shadow-lg">
          <div className="flex flex-col space-y-4">
            <NavLinks mobile onClick={toggleMenu} />
            <Button className="btn-primary w-full">Shop Now</Button>
          </div>
        </nav>
      )}
    </header>
  );
};

const NavLinks = ({ mobile = false, onClick = () => {} }: { mobile?: boolean; onClick?: () => void }) => {
  const links = [
    { name: 'About', href: '#about' },
    { name: 'Products', href: '#products' },
    { name: 'Ingredients', href: '#ingredients' },
    { name: 'Sustainability', href: '#sustainability' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {links.map((link) => (
        <a
          key={link.name}
          href={link.href}
          onClick={onClick}
          className={`${
            mobile ? 'block py-2 border-b border-gray-100' : ''
          } text-gray-700 hover:text-afriroots-green transition-colors font-medium`}
        >
          {link.name}
        </a>
      ))}
    </>
  );
};

export default Navbar;
