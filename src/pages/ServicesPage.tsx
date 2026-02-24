import { motion } from 'motion/react';
import { Lightbulb, Zap, Search, Factory, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: <Factory className="w-8 h-8" />,
    title: '레이저 절단기 (Laser Cutting)',
    desc: '한스레이저의 독보적인 광학 기술이 집약된 파이버 레이저 절단기입니다. 탄소강, 스테인리스, 알루미늄 등 다양한 금속을 정밀하게 절단합니다.',
    details: ['고출력 파이버 레이저 소스 탑재', '대형 워크테이블 및 자동 교환 시스템', '정밀 서보 모터 제어로 오차 최소화']
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: '레이저 용접기 (Laser Welding)',
    desc: '전통적인 용접 방식보다 빠르고 깨끗한 결과물을 보장합니다. 자동화 로봇 팔과 결합하여 대량 생산 라인에 최적화된 솔루션을 제공합니다.',
    details: ['핸드헬드 타입 및 자동화 타입 보유', '이종 금속 접합 및 박판 용접 특화', '냉각 시스템 내장으로 장시간 가동 가능']
  },
  {
    icon: <Lightbulb className="w-8 h-8" />,
    title: '레이저 마킹기 (Laser Marking)',
    desc: '제품의 일련번호, 로고, QR코드 등을 영구적으로 각인합니다. 파이버, CO2, UV 등 소재에 맞는 다양한 광원을 지원합니다.',
    details: ['고속 스캐닝 헤드로 생산성 향상', '비접촉 방식으로 소재 손상 없음', '직관적인 소프트웨어로 도안 편집 용이']
  },
  {
    icon: <Search className="w-8 h-8" />,
    title: '유지보수 및 기술 지원',
    desc: '한스레이저 공식 대리점으로서 전문 엔지니어가 상주하며 신속한 A/S와 정기 점검 서비스를 제공합니다.',
    details: ['24시간 내 현장 대응 원칙', '정품 소모품 및 부품 상시 보유', '운용 인력 대상 전문 기술 교육']
  }
];

const steps = [
  { step: '01', title: '상담 및 접수', desc: '전화 또는 온라인을 통해 현장 상황과 필요 서비스를 상담합니다.' },
  { step: '02', title: '무료 현장 방문', desc: '전문가가 직접 현장을 방문하여 정확한 상태를 진단하고 실측합니다.' },
  { step: '03', title: '견적 및 계약', desc: '투명한 자재비와 인건비가 포함된 상세 견적서를 제출하고 계약을 진행합니다.' },
  { step: '04', title: '책임 시공', desc: '약속된 일정에 맞춰 국가 자격 보유 전문가가 안전하게 시공합니다.' },
  { step: '05', title: '검수 및 사후관리', desc: '시공 완료 후 고객님과 함께 검수하며, 1년간 무상 A/S를 보장합니다.' },
];

export default function ServicesPage() {
  return (
    <div className="pt-24 pb-24">
      {/* Hero */}
      <section className="bg-primary py-20 text-white mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-6">주요 업무</h1>
          <p className="text-slate-300 max-w-2xl mx-auto">
            원공사는 전기와 관련된 모든 문제를 해결합니다. 
            작은 수리부터 대규모 공사까지, 믿고 맡겨주세요.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-32">
          {services.map((service, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              key={idx}
              className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
            >
              <div className="text-secondary mb-6">{service.icon}</div>
              <h3 className="text-2xl font-bold text-primary mb-4">{service.title}</h3>
              <p className="text-slate-600 mb-8 leading-relaxed">{service.desc}</p>
              <ul className="space-y-3">
                {service.details.map((detail, i) => (
                  <li key={i} className="flex items-center text-sm text-slate-500">
                    <CheckCircle size={16} className="text-secondary mr-2" />
                    {detail}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Process Section */}
        <section className="bg-slate-50 rounded-[3rem] p-12 md:p-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary mb-4">작업 프로세스</h2>
            <p className="text-slate-600">원공사는 체계적이고 투명한 과정을 통해 고객님의 만족을 이끌어냅니다.</p>
          </div>

          <div className="relative">
            {/* Desktop Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-slate-200 -translate-y-1/2 z-0" />
            
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 relative z-10">
              {steps.map((item, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-primary text-secondary rounded-full flex items-center justify-center font-bold text-lg mb-4">
                    {item.step}
                  </div>
                  <h4 className="font-bold text-primary mb-2">{item.title}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <div className="mt-32 text-center">
          <div className="inline-block p-12 bg-primary rounded-3xl text-white max-w-4xl w-full">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">현장 상황에 맞는 맞춤형 견적이 필요하신가요?</h2>
            <p className="text-slate-300 mb-10">
              전문가가 직접 방문하여 정확한 진단과 합리적인 견적을 제안해 드립니다.
            </p>
            <Link
              to="/contact"
              className="bg-secondary text-primary px-8 py-4 rounded-full font-bold hover:bg-yellow-400 transition-all inline-flex items-center"
            >
              지금 바로 상담 신청하기 <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
