import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/src/lib/utils';

const navItems = [
  { name: '홈', path: '/' },
  { name: '시공사례', path: '/portfolio' },
  { name: '주요업무', path: '/services' },
  { name: '회사소개', path: '/about' },
  { name: '견적문의', path: '/contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <a 
        href="https://opendoor.ai.kr/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="block bg-secondary text-primary py-2 text-center text-xs md:text-sm font-bold hover:bg-yellow-400 transition-colors"
      >
        [공지] 오픈도어 AI 솔루션 정식 런칭! 지금 바로 확인하기 →
      </a>
      <header
        className={cn(
          'transition-all duration-300',
          scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary flex items-center justify-center rounded-lg">
              <span className="text-secondary font-bold text-xl">W</span>
            </div>
            <span className={cn("text-2xl font-bold tracking-tight", scrolled ? "text-primary" : "text-white")}>
              원공사 <span className="text-sm font-normal opacity-70 ml-1">한스레이저 대리점</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-secondary',
                  location.pathname === item.path
                    ? 'text-secondary'
                    : scrolled ? 'text-slate-600' : 'text-white/80'
                )}
              >
                {item.name}
              </Link>
            ))}
            <a
              href="tel:010-1234-5678"
              className="flex items-center space-x-2 bg-secondary text-primary px-4 py-2 rounded-full font-bold hover:bg-yellow-400 transition-colors"
            >
              <Phone size={16} />
              <span>010-1234-5678</span>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className={scrolled ? 'text-primary' : 'text-white'} />
            ) : (
              <Menu className={scrolled ? 'text-primary' : 'text-white'} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    'block px-3 py-4 text-base font-medium rounded-md',
                    location.pathname === item.path
                      ? 'bg-slate-50 text-secondary'
                      : 'text-slate-600 hover:bg-slate-50 hover:text-primary'
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <a
                href="tel:010-1234-5678"
                className="flex items-center justify-center space-x-2 bg-primary text-white px-4 py-4 rounded-md font-bold mt-4"
              >
                <Phone size={18} />
                <span>전화 상담 연결</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  </div>
  );
}
