import { motion } from 'motion/react';
import { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const categories = ['전체', '아파트/주택', '상가/오피스', '공장/산업'];

const portfolioItems = [
  { id: 1, category: '상가/오피스', title: '강남 오피스 빌딩 LED 교체', location: '서울 강남구', img: 'https://picsum.photos/seed/p1/800/600' },
  { id: 2, category: '아파트/주택', title: '서초 자이 아파트 조명 리모델링', location: '서울 서초구', img: 'https://picsum.photos/seed/p2/800/600' },
  { id: 3, category: '공장/산업', title: '안산 반월공단 동력 전기 증설', location: '경기 안산시', img: 'https://picsum.photos/seed/p3/800/600' },
  { id: 4, category: '상가/오피스', title: '성수동 카페 인테리어 조명', location: '서울 성동구', img: 'https://picsum.photos/seed/p4/800/600' },
  { id: 5, category: '아파트/주택', title: '판교 단독주택 누전 수리 및 배선', location: '경기 성남시', img: 'https://picsum.photos/seed/p5/800/600' },
  { id: 6, category: '공장/산업', title: '화성 물류센터 비상 조명 설치', location: '경기 화성시', img: 'https://picsum.photos/seed/p6/800/600' },
];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState('전체');

  const filteredItems = activeCategory === '전체' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <div className="pt-24 pb-24">
      {/* Header */}
      <section className="bg-primary py-20 text-white mb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-6">시공 사례</h1>
          <p className="text-slate-300 max-w-2xl mx-auto">
            원공사가 직접 발로 뛰며 완성한 다양한 현장들을 소개합니다. 
            유형별 시공 사례를 통해 우리의 기술력을 확인하세요.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filter */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "px-6 py-2 rounded-full text-sm font-bold transition-all border",
                  activeCategory === cat 
                    ? "bg-primary text-white border-primary" 
                    : "bg-white text-slate-600 border-slate-200 hover:border-primary hover:text-primary"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="relative w-full md:w-64">
            <input 
              type="text" 
              placeholder="검색어 입력..." 
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              key={item.id}
              className="group cursor-pointer"
            >
              <div className="relative h-72 rounded-2xl overflow-hidden shadow-sm border border-slate-100">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                  <p className="text-secondary text-xs font-bold mb-1">{item.category}</p>
                  <h3 className="text-white font-bold text-lg">{item.title}</h3>
                  <p className="text-slate-300 text-sm mt-2">{item.location}</p>
                </div>
              </div>
              <div className="mt-4 md:hidden">
                 <p className="text-secondary text-xs font-bold mb-1">{item.category}</p>
                 <h3 className="text-primary font-bold text-lg">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="text-center py-20">
            <p className="text-slate-500">해당 카테고리의 시공 사례가 아직 없습니다.</p>
          </div>
        )}
      </div>
    </div>
  );
}
