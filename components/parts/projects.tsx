"use client"
import React from 'react';
import { ExternalLink, Eye } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      image: "/project_ecoverse.png",
      title: "EcoVerse - Sàn thương mại điện tử Xanh",
      description: "Sàn hoạt động theo mô hình B2C, kết nối trực tiếp các nhà sản xuất, nhà cung cấp sản phẩm xanh với người tiêu dùng, tạo ra một hệ sinh thái thương mại minh bạch, an toàn và bền vững",
      liveDemo: "https://ecoverse-vn.vercel.app/",
      details: "#"
    },
    {
      id: 2,
      image: "/project_vietcycle.png",
      title: "VietCycle - Nền tảng số hóa và tuần hoàn phế thải công nghiệp",
      description: "VietCycle+ là nền tảng số hóa toàn diện cho phế thải công nghiệp và xây dựng,kết hợp công nghệ AI, marketplace, logistics và pháp lý số hóa. Chúng tôi giúp doanh nghiệp biến chi phí xử lý phế thải thành nguồn thu từ kinh tế tuần hoàn,đồng thời đảm bảo 100% minh bạch trong toàn bộ quy trình.",
      liveDemo: "https://vietcycle-frontend.vercel.app/",
      details: "#"
    },
    {
      id: 3,
      image: "/project_ecofundx",
      title: "EcoFundX - Crowdfunding for Sustainable Products",
      description: "EcoFundX là nền tảng crowdfunding đầu tiên tập trung hoàn toàn vào các dự án bền vững với môi trường.Trong khi các nền tảng hiện tại chỉ hỗ trợ đại trà, EcoFundX xây dựng một hệ sinh thái riêng biệt, tạo môi trường uy tín cho các nhà sáng lập “xanh” và người dùng có ý thức môi trường",
      liveDemo: "https://ecofundx.vercel.app/",
      details: "#"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
      title: "RedLotus - Nền tảng chăm sóc sức khỏe tinh thần ứng dụng AI và Gamafication",
      description: "RedLotus là nền tảng chăm sóc sức khỏe tinh thần tiên tiến, kết hợp trí tuệ nhân tạo và gamification để mang đến trải nghiệm cá nhân hóa, thú vị và hiệu quả",
      liveDemo: "https://demo.example.com",
      details: "#"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&q=80",
      title: "Dự án Chatbot bằng kĩ thuật RAG đầu tiên của tôi",
      description: "Hệ thống Chatbot sử dụng kỹ thuật RAG giúp người dùng tra cứu và hiểu văn bản pháp luật một cách nhanh chóng. Chatbot truy xuất thông tin từ các văn bản luật, nghị định, thông tư và tạo câu trả lời tự nhiên, dễ hiểu, kèm trích dẫn chính xác",
      liveDemo: "https://demo.example.com",
      details: "#"
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&q=80",
      title: "Vodka AudioBook - Nền tảng Sách nói",
      description: "RedLotus là nền tảng chăm sóc sức khỏe tinh thần tiên tiến, kết hợp trí tuệ nhân tạo và gamification để mang đến trải nghiệm cá nhân hóa, thú vị và hiệu quả. Người dùng được hỗ trợ quản lý cảm xúc, phát triển thói quen tích cực và nâng cao sức khỏe tinh thần qua các thử thách, trò chơi và các phân tích thông minh",
      liveDemo: "https://demo.example.com",
      details: "#"
    }
  ];

  return (
    <div id="projects" className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#003366] mb-4 tracking-tight">
            Dự Án Nổi Bật
          </h2>
          <div className="w-24 h-1 bg-[#003366] mx-auto mb-6"></div>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            {/* Khám phá các dự án công nghệ mới nhất với thiết kế hiện đại và hiệu suất tối ưu */}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card 
              key={project.id} 
              className="bg-white border-slate-200 hover:border-[#003366]/30 transition-all duration-300 hover:shadow-2xl hover:shadow-[#003366]/10 overflow-hidden group"
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden bg-slate-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#003366]/60 via-[#003366]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <CardHeader>
                <CardTitle className="text-xl font-bold text-[#003366] group-hover:text-cyan-600 transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>

              <CardContent>
                <CardDescription className="text-slate-600 text-sm leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardContent>

              <CardFooter className="flex gap-3 pt-4">
                <Button
                  className="flex-1 bg-[#003366] hover:bg-[#004080] text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-[#003366]/30"
                  onClick={() => window.open(project.liveDemo, '_blank')}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Live Demo
                </Button>
                <Button
                  variant="outline"
                  className="flex-1 border-[#003366]/30 text-[#003366] hover:bg-[#003366]/5 hover:text-[#003366] hover:border-[#003366]/50 font-medium transition-all duration-300"
                  onClick={() => console.log('View details:', project.id)}
                >
                  <Eye className="w-4 h-4 mr-2" />
                  Chi Tiết
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;