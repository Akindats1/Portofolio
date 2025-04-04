import { Link } from 'react-scroll';

function Header() {
  return (
    <header className="fixed w-full bg-white shadow-sm z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link to="home" smooth={true} className="text-2xl font-bold text-primary cursor-pointer">
            AB
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link to="home" smooth={true} className="text-gray-600 hover:text-primary cursor-pointer">
              Home
            </Link>
            <Link to="about" smooth={true} className="text-gray-600 hover:text-primary cursor-pointer">
              About
            </Link>
            <Link to="experience" smooth={true} className="text-gray-600 hover:text-primary cursor-pointer">
              Experience
            </Link>
            <Link to="contact" smooth={true} className="text-gray-600 hover:text-primary cursor-pointer">
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;