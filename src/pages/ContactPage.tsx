import { motion, AnimatePresence } from 'motion/react';
import { Phone, Mail, MapPin, Clock, MessageSquare, Send, ChevronDown, ChevronUp } from 'lucide-react';
import React, { useState } from 'react';
import { cn } from '@/src/lib/utils';

const faqs = [
  { q: '방문 견적은 정말 무료인가요?', a: '네, 그렇습니다. 서울 및 경기 일부 지역은 전문가가 직접 방문하여 현장을 확인하고 견적을 내드리는 서비스가 무료로 제공됩니다.' },
  { q: '시공 후 A/S 기간은 어떻게 되나요?', a: '원공사에서 시공한 모든 항목에 대해 시공 완료일로부터 1년간 무상 A/S를 보장합니다. (단, 사용자 부주의로 인한 파손은 제외)' },
  { q: '야간이나 주말에도 시공이 가능한가요?', a: '상가나 오피스 등 업무 시간에 공사가 어려운 경우, 사전 협의를 통해 야간 및 주말 시공이 가능합니다.' },
  { q: '카드 결제나 세금계산서 발행이 되나요?', a: '네, 모든 결제는 카드 결제가 가능하며 법인 및 개인 사업자분들을 위한 세금계산서 발행도 즉시 처리해 드립니다.' },
];

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setFormStatus('success');
    }, 1500);
  };

  return (
    <div className="pt-24 pb-24">
      {/* Hero */}
      <section className="bg-primary py-20 text-white mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-6">견적 문의</h1>
          <p className="text-slate-300 max-w-2xl mx-auto">
            궁금하신 점이나 견적 요청사항을 남겨주세요. 
            빠른 시일 내에 전문가가 답변해 드리겠습니다.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-32">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-primary mb-8">연락처 정보</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-primary shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-1">전화번호</p>
                    <p className="text-lg font-bold text-primary">010-1234-5678</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-primary shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-1">이메일</p>
                    <p className="text-lg font-bold text-primary">contact@wongongsa.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-primary shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-1">주소</p>
                    <p className="text-slate-700">서울특별시 강남구 테헤란로 123 원빌딩 4층</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-primary shrink-0">
                    <Clock size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-1">상담 시간</p>
                    <p className="text-slate-700">평일 08:00 - 19:00 / 토요일 09:00 - 15:00</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 bg-secondary/10 rounded-3xl border border-secondary/20">
              <h3 className="font-bold text-primary mb-4 flex items-center">
                <MessageSquare size={18} className="mr-2" /> 카카오톡 상담
              </h3>
              <p className="text-sm text-slate-600 mb-6">
                전화가 부담스러우신가요? 카카오톡으로 사진과 함께 문의하시면 더 정확한 상담이 가능합니다.
              </p>
              <button className="w-full bg-[#FEE500] text-[#3C1E1E] py-3 rounded-xl font-bold hover:bg-[#FADA0A] transition-colors flex items-center justify-center">
                카카오톡 채널 연결
              </button>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-100">
              <h2 className="text-2xl font-bold text-primary mb-8">상담 신청서</h2>
              
              {formStatus === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Send size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-4">신청이 완료되었습니다!</h3>
                  <p className="text-slate-600 mb-8">
                    담당자가 확인 후 24시간 이내에 연락드리겠습니다.<br />
                    급하신 문의는 전화(010-1234-5678)로 부탁드립니다.
                  </p>
                  <button 
                    onClick={() => setFormStatus('idle')}
                    className="text-primary font-bold hover:underline"
                  >
                    새로운 문의 작성하기
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">성함 / 업체명</label>
                      <input 
                        required
                        type="text" 
                        placeholder="홍길동"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">연락처</label>
                      <input 
                        required
                        type="tel" 
                        placeholder="010-0000-0000"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">현장 유형</label>
                    <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary">
                      <option>아파트 / 빌라 / 주택</option>
                      <option>상가 / 사무실 / 카페</option>
                      <option>공장 / 창고 / 산업시설</option>
                      <option>기타</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">문의 내용</label>
                    <textarea 
                      required
                      rows={5}
                      placeholder="시공이 필요한 내용이나 궁금하신 점을 상세히 적어주세요."
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    ></textarea>
                  </div>

                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="privacy" required className="w-4 h-4 text-primary rounded border-slate-300 focus:ring-primary" />
                    <label htmlFor="privacy" className="text-xs text-slate-500">
                      개인정보 수집 및 이용에 동의합니다. (상담 목적 외 사용되지 않습니다.)
                    </label>
                  </div>

                  <button 
                    disabled={formStatus === 'submitting'}
                    type="submit"
                    className={cn(
                      "w-full py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center",
                      formStatus === 'submitting' 
                        ? "bg-slate-200 text-slate-400 cursor-not-allowed" 
                        : "bg-primary text-white hover:bg-slate-800 shadow-lg"
                    )}
                  >
                    {formStatus === 'submitting' ? '신청 중...' : '무료 견적 신청하기'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* FAQ */}
        <section className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-primary mb-12">자주 묻는 질문</h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border border-slate-100 rounded-2xl overflow-hidden shadow-sm">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-slate-50 transition-colors"
                >
                  <span className="font-bold text-primary">{faq.q}</span>
                  {openFaq === idx ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden bg-slate-50"
                    >
                      <div className="p-6 text-slate-600 text-sm leading-relaxed border-t border-slate-100">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
