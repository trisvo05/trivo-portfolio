"use client"
import React from 'react';
import { ExternalLink, Eye } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      title: "E-Commerce Platform",
      description: "Nền tảng thương mại điện tử hiện đại với tích hợp thanh toán và quản lý kho hàng thông minh.",
      liveDemo: "https://demo.example.com",
      details: "#"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      title: "Analytics Dashboard",
      description: "Dashboard phân tích dữ liệu real-time với biểu đồ tương tác và báo cáo tự động.",
      liveDemo: "https://demo.example.com",
      details: "#"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
      title: "Mobile Banking App",
      description: "Ứng dụng ngân hàng di động với bảo mật cao và giao diện thân thiện với người dùng.",
      liveDemo: "https://demo.example.com",
      details: "#"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
      title: "Project Management Tool",
      description: "Công cụ quản lý dự án với tính năng collaboration, timeline tracking và báo cáo tiến độ.",
      liveDemo: "https://demo.example.com",
      details: "#"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&q=80",
      title: "AI Chatbot Platform",
      description: "Platform chatbot AI thông minh với khả năng học máy và xử lý ngôn ngữ tự nhiên.",
      liveDemo: "https://demo.example.com",
      details: "#"
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&q=80",
      title: "Social Media Manager",
      description: "Công cụ quản lý mạng xã hội đa nền tảng với lên lịch đăng bài và phân tích insights.",
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
            Dự Án Của Tôi
          </h2>
          <div className="w-24 h-1 bg-[#003366] mx-auto mb-6"></div>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Khám phá các dự án công nghệ mới nhất với thiết kế hiện đại và hiệu suất tối ưu
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