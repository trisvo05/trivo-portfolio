"use client"
import React, { useState } from 'react';
import { Award, Calendar, Building2 } from 'lucide-react';

export default function Awards() {
  const [awards] = useState([
    {
      id: 1,
      image: '/giay_chung_nhan.jpg',
      rank: 'Top 8',
      title: 'TechXpo Challenge 2025',
      organizer: 'VinTechTalent Club ( VinUniversity )',
      month: 'Tháng 9',
      year: '2025'
    },
    {
      id: 2,
      image: '/p_innovation_cetificate.jpg',
      rank: 'Top 6',
      title: 'Cuộc thi Sản phẩm sinh viên đổi mới sáng tạo P-Innovation 2025',
      organizer: 'Học viện Công nghệ Bưu chính Viễn thông',
      month: 'Tháng 5',
      year: '2025'
    },
    {
      id: 3,
      image: '/aic2024_cert.jpg',
      rank: 'Top 5',
      title: 'Cuộc thi AI Challenge 2024',
      organizer: 'Viện Khoa học Kỹ thuật Bưu điện ( PTIT )',
      month: 'Tháng 5',
      year: '2024'
    },
    // {
    //   id: 4,
    //   image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop',
    //   rank: 'Top 2',
    //   title: 'Creative Portfolio',
    //   organizer: 'CSS Design Awards',
    //   month: 'Tháng 12',
    //   year: '2023'
    // }
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-br " id="awards">
      {/* Header */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-500 rounded-full mb-6">
            <Award className="w-8 h-8 text-slate-900" />
          </div>
          <h1 className="text-4xl font-bold text-gray-700 mb-4">
            Giải Thưởng & Thành Tích
          </h1>
          {/* <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Những cột mốc đáng tự hào trong hành trình sáng tạo
          </p> */}
        </div>

  
        <div className="flex flex-wrap justify-around max-w-6xl mx-auto">
          {awards.map((award) => (
            <div
              key={award.id}
              className="group bg-gray-200 backdrop-blur-lg rounded-2xl overflow-hidden border border-gray-700 hover:border-yellow-500/50 transition-all duration-300 hover:transform hover:scale-105 h-[450px] w-[300px] "
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={award.image}
                  alt={award.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div> */}
                
                {/* Rank Badge */}
                <div className="absolute top-4 right-4">
                  <div className="bg-[#003366] text-white font-bold px-4 py-2 rounded-full text-sm shadow-lg">
                    {award.rank}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="text-xl font-bold text-gray-700 mb-2 group-hover:text-blue-600 transition-colors">
                  {award.title}
                </h3>

                {/* Organizer */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex items-center justify-center w-10 h-10 bg-purple-500/20 rounded-lg">
                    <Building2 className="w-5 h-5 text-yellow-400" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Tổ chức bởi</p>
                    <p className="text-gray-700 font-semibold">{award.organizer}</p>
                  </div>
                </div>

                {/* Date */}
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-10 h-10 bg-blue-500/20 rounded-lg">
                    <Calendar className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Thời gian</p>
                    <p className="text-gray-700 font-semibold">
                      {award.month} {award.year}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        {/* <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-bold text-yellow-400 mb-2">4+</div>
            <div className="text-gray-300">Giải thưởng</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-yellow-400 mb-2">2</div>
            <div className="text-gray-300">Top 1</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-yellow-400 mb-2">3</div>
            <div className="text-gray-300">Tổ chức lớn</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-yellow-400 mb-2">2024</div>
            <div className="text-gray-300">Năm gần nhất</div>
          </div>
        </div> */}
      </div>
    </div>
  );
}