import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2 text-white">
              <div className="w-8 h-8 bg-primary flex items-center justify-center rounded">
                <span className="text-secondary font-bold text-lg">W</span>
              </div>
              <span className="text-xl font-bold">원공사</span>
            </Link>
            <p className="text-sm leading-relaxed">
              세계적인 레이저 솔루션 기업 한스레이저(Han's Laser)의 한국 공식 대리점입니다.
              레이저 절단기, 용접기, 마킹기 등 산업용 레이저 장비의 공급과 유지보수를 책임집니다.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-6">주요 메뉴</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/portfolio" className="hover:text-secondary transition-colors">시공 사례</Link></li>
              <li><Link to="/services" className="hover:text-secondary transition-colors">주요 업무</Link></li>
              <li><Link to="/about" className="hover:text-secondary transition-colors">회사 소개</Link></li>
              <li><Link to="/contact" className="hover:text-secondary transition-colors">견적 문의</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold mb-6">고객 센터</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <Phone size={18} className="text-secondary shrink-0" />
                <span>010-1234-5678</span>
              </li>
              <li className="flex items-start space-x-3">
                <Clock size={18} className="text-secondary shrink-0" />
                <span>평일 08:00 - 19:00<br />토요일 09:00 - 15:00 (일요일 휴무)</span>
              </li>
              <li className="flex items-start space-x-3">
                <Mail size={18} className="text-secondary shrink-0" />
                <span>contact@wongongsa.com</span>
              </li>
            </ul>
          </div>

          {/* Location */}
          <div>
            <h3 className="text-white font-bold mb-6">오시는 길</h3>
            <div className="flex items-start space-x-3 text-sm">
              <MapPin size={18} className="text-secondary shrink-0" />
              <span>서울특별시 강남구 테헤란로 123<br />원빌딩 4층</span>
            </div>
            <div className="mt-4 rounded-lg overflow-hidden h-32 bg-slate-800 flex items-center justify-center">
              <span className="text-xs italic opacity-50">지도 영역 (준비 중)</span>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
          <p>© 2026 원공사. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <span>사업자등록번호: 123-45-67890</span>
            <span>대표: 홍길동</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
