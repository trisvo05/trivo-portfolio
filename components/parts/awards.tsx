"use client";
import React, { useState } from "react";
import {
  Award,
  Calendar,
  Building2,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function Awards() {
  const [awards] = useState([
    {
      id: 1,
      images: ["/techxpo2025_cert.png", "/avatar.JPG"],
      rank: "Top 8",
      title: "TechXpo Challenge 2025",
      organizer: "VinTechTalent Club (VinUniversity)",
      month: "Tháng 9",
      year: "2025",
    },
    {
      id: 2,
      images: ["/p_innovation_cetificate.jpg", "avatar.JPG"],
      rank: "Top 6",
      title:
        "Cuộc thi Sản phẩm sinh viên đổi mới sáng tạo P-Innovation 2025",
      organizer: "Học viện Công nghệ Bưu chính Viễn thông",
      month: "Tháng 5",
      year: "2025",
    },
    {
      id: 3,
      images: ["/aic2024_cert.jpg", "avatar.JPG"],
      rank: "Top 5",
      title: "Cuộc thi AI Challenge 2024",
      organizer: "Viện Khoa học Kỹ thuật Bưu điện (PTIT)",
      month: "Tháng 5",
      year: "2024",
    },
  ]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [selectedAward, setSelectedAward] = useState<any>(null);
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  const closeModal = () => {
    setSelectedAward(null);
    setCurrentImgIndex(0);
  };

  const nextImage = () => {
    if (selectedAward) {
      setCurrentImgIndex(
        (prev) => (prev + 1) % selectedAward.images.length
      );
    }
  };

  const prevImage = () => {
    if (selectedAward) {
      setCurrentImgIndex(
        (prev) =>
          (prev - 1 + selectedAward.images.length) %
          selectedAward.images.length
      );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br" id="awards">
      {/* Header */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-500 rounded-full mb-6">
            <Award className="w-8 h-8 text-slate-900" />
          </div>
          <h1 className="text-4xl font-bold text-[#003366] mb-4">
            Giải Thưởng & Thành Tích
          </h1>
        </div>

        {/* Award Cards */}
        <div className="flex flex-wrap justify-around max-w-6xl mx-auto">
          {awards.map((award) => (
            <Dialog
              key={award.id}
              open={selectedAward?.id === award.id}
              onOpenChange={(open) => {
                if (!open) closeModal();
              }}
            >
              <DialogTrigger asChild>
                <div
                  onClick={() => setSelectedAward(award)}
                  className="cursor-pointer group bg-gray-200 rounded-2xl overflow-hidden border-gray-300 border hover:border-[#003366]/30 transition-all duration-300 backdrop-blur-md hover:scale-105 h-[450px] w-[300px] hover:shadow-2xl hover:shadow-[#003366]/10"
                >
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={award.images[0]}
                      alt={award.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4">
                      <div className="bg-cyan-600 text-white font-bold px-4 py-2 rounded-full text-sm shadow-lg">
                        {award.rank}
                      </div>
                    </div>
                  </div>

                  <div className="p-4">
                    <h3 className="text-xl font-bold text-gray-700 mb-2 group-hover:text-blue-600 transition-colors">
                      {award.title}
                    </h3>

                    <div className="flex items-center gap-3 mb-3">
                      <div className="flex items-center justify-center w-10 h-10 bg-purple-500/20 rounded-lg">
                        <Building2 className="w-5 h-5 text-yellow-400" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-400">Tổ chức bởi</p>
                        <p className="text-gray-700 font-semibold">
                          {award.organizer}
                        </p>
                      </div>
                    </div>

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
              </DialogTrigger>

              {/* Modal hiển thị nhiều ảnh */}
              <DialogContent className="max-w-3xl  rounded-xl shadow-2xl p-0 overflow-hidden bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900">
                {/* Nút đóng */}
                {/* <button
                  onClick={closeModal}
                  className="absolute top-3 right-3 bg-gray-200 hover:bg-gray-300 p-2 rounded-full"
                >
                  <X className="w-5 h-5 text-gray-700" />
                </button> */}

                {/* Ảnh chính */}
                <div className="relative flex items-center justify-center">
                  <button
                    onClick={prevImage}
                    className="absolute left-3 bg-black/40 hover:bg-black/60 p-2 rounded-full"
                  >
                    <ChevronLeft className="w-6 h-6 text-white" />
                  </button>

                  <img
                    src={selectedAward?.images[currentImgIndex]}
                    alt="award"
                    className="rounded-t-2xl w-[500px] h-[500px] object-contain mx-auto transition-all duration-500"
                  />

                  <button
                    onClick={nextImage}
                    className="absolute right-3 bg-black/40 hover:bg-black/60 p-2 rounded-full"
                  >
                    <ChevronRight className="w-6 h-6 text-white" />
                  </button>
                </div>

                {/* Caption */}
                {/* <div className="p-6 text-center">
                  <h2 className="text-2xl font-bold text-[#003366] mb-2">
                    {selectedAward?.title}
                  </h2>
                  <p className="text-gray-600">{selectedAward?.organizer}</p>
                  <p className="text-sm text-gray-400 mt-1">
                    {selectedAward?.month} {selectedAward?.year}
                  </p>
                </div> */}
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </div>
  );
}
