import { motion } from 'motion/react';
import { Award, Users, ShieldCheck, History, CheckCircle2 } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="pt-24 pb-24">
      {/* Hero */}
      <section className="bg-primary py-20 text-white mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-6">회사 소개</h1>
          <p className="text-slate-300 max-w-2xl mx-auto">
            원공사는 20년 경력의 노하우와 국가 공인 자격을 바탕으로 
            고객님의 안전과 만족을 최우선으로 생각합니다.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Intro Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <div>
            <h2 className="text-3xl font-bold text-primary mb-8 leading-tight">
              "세계 최고의 레이저 기술을 한국에 전합니다."
            </h2>
            <div className="space-y-6 text-slate-600 leading-relaxed">
              <p>
                안녕하십니까, 원공사 대표 홍길동입니다. 
                저희 원공사는 세계적인 레이저 솔루션 기업인 **한스레이저(Han's Laser)**의 한국 공식 대리점입니다.
              </p>
              <p>
                현대 산업 현장에서 레이저 기술은 정밀도와 생산성을 결정짓는 핵심 요소입니다. 
                원공사는 단순히 장비를 판매하는 것에 그치지 않고, 고객사의 생산 라인에 최적화된 레이저 시스템을 설계하고 제안합니다.
              </p>
              <p>
                한스레이저의 검증된 기술력과 원공사의 신속한 기술 지원이 만나 고객사의 경쟁력을 한 단계 더 높여드릴 것을 약속드립니다. 
                레이저 절단, 용접, 마킹 등 모든 레이저 공정의 파트너가 되겠습니다.
              </p>
            </div>
            <div className="mt-10 pt-10 border-t border-slate-100">
              <p className="font-bold text-primary text-lg">원공사 대표 홍길동 배상</p>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden shadow-xl">
              <img
                src="https://picsum.photos/seed/team/800/800"
                alt="Representative"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-secondary p-8 rounded-2xl shadow-lg hidden md:block">
              <p className="text-primary font-bold text-4xl mb-1">20+</p>
              <p className="text-primary/70 text-sm font-medium">Years of Experience</p>
            </div>
          </div>
        </div>

        {/* Values */}
        <section className="mb-32">
          <h2 className="text-3xl font-bold text-center text-primary mb-16">원공사의 3대 약속</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Award className="w-10 h-10" />, title: '전문성', desc: '국가 기술 자격을 보유한 전문가가 모든 공사를 직접 감독하고 시공합니다.' },
              { icon: <ShieldCheck className="w-10 h-10" />, title: '안전성', desc: '규격 자재 사용과 안전 수칙 준수를 통해 화재 및 사고 위험을 원천 차단합니다.' },
              { icon: <Users className="w-10 h-10" />, title: '신뢰성', desc: '투명한 견적 산출과 1년 무상 A/S 보장으로 고객과의 신뢰를 지켜나갑니다.' },
            ].map((v, idx) => (
              <div key={idx} className="bg-slate-50 p-10 rounded-3xl text-center flex flex-col items-center">
                <div className="text-primary mb-6">{v.icon}</div>
                <h3 className="text-xl font-bold text-primary mb-4">{v.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* History & License */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <section>
            <h2 className="text-2xl font-bold text-primary mb-8 flex items-center">
              <History className="mr-2 text-secondary" /> 주요 연혁
            </h2>
            <div className="space-y-8 relative before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-200">
              {[
                { year: '2024', event: '서울시 우수 전기 시공 업체 선정' },
                { year: '2020', event: '산업용 동력 전기 전문 시공팀 신설' },
                { year: '2015', event: 'LED 조명 교체 사업부 확장' },
                { year: '2006', event: '원공사 설립 (전기 공사 면허 취득)' },
              ].map((h, idx) => (
                <div key={idx} className="relative pl-10">
                  <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-primary border-4 border-white shadow-sm" />
                  <span className="text-secondary font-bold text-lg">{h.year}</span>
                  <p className="text-slate-600 mt-1">{h.event}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-8 flex items-center">
              <CheckCircle2 className="mr-2 text-secondary" /> 보유 자격 및 면허
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                '전기공사업 면허 보유',
                '전기기사/산업기사 자격',
                '소방설비기사 자격',
                '실내건축 면허 협력업체',
                '안전관리자 교육 이수',
                '영업배상책임보험 가입'
              ].map((l, idx) => (
                <div key={idx} className="flex items-center p-4 bg-white border border-slate-100 rounded-xl shadow-sm">
                  <CheckCircle2 size={18} className="text-secondary mr-3 shrink-0" />
                  <span className="text-sm font-medium text-slate-700">{l}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 p-6 bg-secondary/10 rounded-2xl border border-secondary/20">
              <p className="text-sm text-primary/80 leading-relaxed">
                * 원공사는 모든 시공에 대해 관련 법규를 준수하며, 
                정식 등록된 면허 업체로서 법적 보호와 기술력을 보장합니다.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
