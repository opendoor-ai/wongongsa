import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Star, ShieldCheck, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function MainPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[750px] flex items-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            alt="Laser Machine Background"
            className="w-full h-full object-cover opacity-50"
            referrerPolicy="no-referrer"
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="border border-blue-400/40 p-8 md:p-16 rounded-sm relative">
            {/* Decorative corners for the blue box effect in screenshot */}
            <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-blue-400" />
            <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-blue-400" />
            <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-blue-400" />
            <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-blue-400" />

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl"
            >
              <span className="inline-block px-4 py-1 bg-secondary text-primary font-bold rounded-full text-xs md:text-sm mb-8">
                한스레이저(Han's Laser) 한국 공식 대리점
              </span>
              <h1 className="text-5xl md:text-8xl font-bold text-white leading-tight mb-8 tracking-tight">
                정밀한 기술의 완성,<br />
                <span className="text-secondary">원공사</span>가 책임집니다.
              </h1>
              
              <div className="border-l-4 border-blue-400/60 pl-6 mb-12">
                <p className="text-lg md:text-xl text-slate-200 leading-relaxed font-medium">
                  레이저절단기 · 레이저컷팅기 · 레이저용접기 · 레이저마킹기<br />
                  합리적인 비용과 확실한 사후 관리를 중시하는 고객님을 위한 최상의 선택. 1년 무상 A/S를 보장합니다.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-6">
                <Link
                  to="/contact"
                  className="bg-secondary text-primary px-10 py-5 rounded-lg font-bold text-xl flex items-center justify-center hover:bg-yellow-400 transition-all group shadow-xl"
                >
                  무료 방문 견적 신청하기
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/portfolio"
                  className="bg-white/5 backdrop-blur-sm text-white border border-white/30 px-10 py-5 rounded-lg font-bold text-xl flex items-center justify-center hover:bg-white/20 transition-all"
                >
                  시공 사례 보기
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center space-x-4 p-6 rounded-2xl bg-slate-50">
              <div className="w-12 h-12 bg-primary/10 flex items-center justify-center rounded-full text-primary">
                <Award size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg">국가 자격 보유</h3>
                <p className="text-sm text-slate-500">전문 면허를 보유한 베테랑 시공</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 p-6 rounded-2xl bg-slate-50">
              <div className="w-12 h-12 bg-primary/10 flex items-center justify-center rounded-full text-primary">
                <ShieldCheck size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg">1년 무상 A/S</h3>
                <p className="text-sm text-slate-500">시공 후 사후 관리까지 100% 책임</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 p-6 rounded-2xl bg-slate-50">
              <div className="w-12 h-12 bg-primary/10 flex items-center justify-center rounded-full text-primary">
                <CheckCircle2 size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg">합리적 비용</h3>
                <p className="text-sm text-slate-500">거품 없는 자재비와 투명한 견적</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-4">최근 시공 사례</h2>
              <p className="text-slate-600">원공사의 정교한 기술력이 담긴 현장을 확인하세요.</p>
            </div>
            <Link to="/portfolio" className="text-primary font-bold flex items-center hover:underline">
              전체 보기 <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: '파이버 레이저 절단기 G3015 설치', location: '경기 시흥시', img: 'https://images.unsplash.com/photo-1565106430482-8f6e74349ca1?auto=format&fit=crop&w=800&q=80' },
              { title: '정밀 레이저 마킹 시스템 구축', location: '인천 남동공단', img: 'https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&w=800&q=80' },
              { title: '자동화 레이저 용접 라인 시공', location: '충남 천안시', img: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=800&q=80' },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 group"
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs font-bold text-secondary uppercase tracking-wider">{item.location}</span>
                  <h3 className="text-xl font-bold text-primary mt-2 mb-4">{item.title}</h3>
                  <Link to={`/portfolio`} className="text-sm font-medium text-slate-400 group-hover:text-primary transition-colors flex items-center">
                    상세보기 <ArrowRight size={14} className="ml-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Summary */}
      <section className="py-24 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-6">전문적인 전기 솔루션</h2>
            <p className="text-slate-300">
              단순한 전구 교체부터 복잡한 산업용 전기 공사까지, 
              원공사는 모든 현장에서 최상의 품질을 보장합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: '레이저 절단기', desc: '고출력 파이버 레이저로 정밀하고 빠른 금속 절단 솔루션 제공' },
              { title: '레이저 컷팅기', desc: '다양한 소재에 최적화된 고속 컷팅 시스템 및 자동화 라인' },
              { title: '레이저 용접기', desc: '비접촉 방식의 정밀 용접으로 열 변형 최소화 및 고품질 접합' },
              { title: '레이저 마킹기', desc: '금속, 플라스틱 등 다양한 재질에 영구적이고 선명한 각인' },
            ].map((service, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors">
                <h3 className="text-xl font-bold text-secondary mb-4">{service.title}</h3>
                <p className="text-sm text-slate-300 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Link to="/services" className="inline-flex items-center text-secondary font-bold hover:underline">
              서비스 상세 안내 보기 <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-primary mb-16">고객이 신뢰하는 원공사</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { name: '김철수', role: '상가 건물주', content: '여러 업체에 견적을 받았지만 원공사가 가장 투명하고 상세했습니다. 시공 후 깔끔한 마무리와 친절한 설명에 감동했습니다.' },
              { name: '이영희', role: '시설 관리 팀장', content: '공장 누전 문제로 골머리를 앓았는데, 원공사 사장님이 오셔서 단번에 해결해주셨습니다. 역시 전문가는 다르더군요.' },
            ].map((t, idx) => (
              <div key={idx} className="bg-slate-50 p-8 rounded-3xl relative">
                <div className="flex text-secondary mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-slate-700 italic mb-6 leading-relaxed">"{t.content}"</p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="font-bold text-primary">{t.name}</p>
                    <p className="text-xs text-slate-500">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">
            지금 바로 무료 방문 견적을 신청하세요!
          </h2>
          <p className="text-primary/80 mb-10 text-lg max-w-2xl mx-auto">
            현장 상황에 맞는 최적의 솔루션을 제안해 드립니다. 
            고민하지 마시고 전문가와 상담하세요.
          </p>
          <Link
            to="/contact"
            className="bg-primary text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-slate-800 transition-all shadow-lg inline-block"
          >
            견적 문의하기
          </Link>
        </div>
      </section>
    </div>
  );
}
