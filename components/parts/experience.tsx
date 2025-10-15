import React from 'react';
import { Briefcase, BriefcaseBusiness, Calendar } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const experiences = [
  {
    id: 1,
    logo: '🏢',
    position: 'Intern Backend Developer',
    company: 'IVS Tech Viet Nam',
    period: '2022 - Hiện tại',
    description: 'Phát triển và duy trì các ứng dụng web quy mô lớn sử dụng React, Next.js. Tối ưu hiệu suất và trải nghiệm người dùng. Hướng dẫn và review code cho team junior.'
  },
//   {
//     id: 2,
//     logo: '💻',
//     position: 'Frontend Developer',
//     company: 'Digital Solutions',
//     period: '2020 - 2022',
//     description: 'Xây dựng giao diện responsive cho các dự án web và mobile. Làm việc với React, TypeScript, và các thư viện UI hiện đại. Tham gia vào quy trình Agile/Scrum.'
//   },
//   {
//     id: 3,
//     logo: '🚀',
//     position: 'Junior Developer',
//     company: 'StartUp Hub',
//     period: '2019 - 2020',
//     description: 'Học hỏi và phát triển kỹ năng lập trình web. Tham gia xây dựng các tính năng mới cho sản phẩm. Làm việc với HTML, CSS, JavaScript và React cơ bản.'
//   },
//   {
//     id: 4,
//     logo: '🎓',
//     position: 'Intern Developer',
//     company: 'Innovation Labs',
//     period: '2018 - 2019',
//     description: 'Thực tập và làm quen với quy trình phát triển phần mềm chuyên nghiệp. Hỗ trợ team trong việc fix bugs và phát triển các tính năng nhỏ.'
//   }
];

export default function Experience() {
  return (
    <div id="experience" className="min-h-screen  py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-500 rounded-full mb-6">
            <BriefcaseBusiness className="w-8 h-8 text-slate-900" />
            </div>
            <h1 className="text-4xl font-bold text-gray-700 mb-4">
                Kinh nghiệm làm việc
            </h1>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-slate-300" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={exp.id} className="relative pl-20">
                {/* Timeline Dot */}
                <div className="absolute left-5 top-6 w-7 h-7 bg-blue-500 rounded-full border-4 border-white shadow-lg flex items-center justify-center z-10">
                  <Briefcase className="w-3 h-3 text-white" />
                </div>

                {/* Content Card */}
                <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      {/* Company Logo */}
                      <div className="text-4xl flex-shrink-0 bg-slate-100 rounded-lg p-3 w-16 h-16 flex items-center justify-center">
                        {exp.logo}
                      </div>

                      <div className="flex-1">
                        {/* Position & Company */}
                        <h3 className="text-xl font-bold text-slate-800 mb-1">
                          {exp.position}
                        </h3>
                        <p className="text-lg text-blue-600 font-semibold mb-2">
                          {exp.company}
                        </p>

                        {/* Period */}
                        <div className="flex items-center gap-2 text-slate-500 mb-3">
                          <Calendar className="w-4 h-4" />
                          <span className="text-sm font-medium">{exp.period}</span>
                        </div>

                        {/* Description */}
                        <p className="text-slate-600 leading-relaxed">
                          {exp.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}