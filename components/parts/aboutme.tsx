import { Facebook, Github, Instagram, Linkedin } from "lucide-react"

const AboutMe = () => {
    const socialLinks = [
        { icon: Linkedin, href: "#", label: "LinkedIn", color: "hover:text-blue-600" },
        { icon: Github, href: "#", label: "GitHub", color: "hover:text-gray-800" },
        { icon: Facebook, href: "#", label: "Facebook", color: "hover:text-blue-500" },
        { icon: Instagram, href: "#", label: "Instagram", color: "hover:text-pink-600" }
    ]

    return (
        <div id="about" className="flex w-full h-[calc(100vh-80px)] mt-[80px] items-center justify-center px-8 ">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12 max-w-6xl w-full">
                {/* Text Content */}
                <div className="w-full lg:w-1/2 space-y-6">
                    <div className="space-y-3">
                        <h1 className="text-5xl font-bold text-gray-900 leading-tight">
                            Hi! I&apos;m <span className="text-blue-600">Võ Minh Trí</span>
                        </h1>
                        <h2 className="text-3xl font-bold text-gray-700">
                            FullStack Developer
                        </h2>
                    </div>
                    
                    <p className="text-gray-600 leading-relaxed text-lg">
                        I am a third-year student majoring in Information Technology, with the goal of becoming a Software Developer and AI Developer in the future.
                    </p>
                    
                    <p className="text-gray-600 leading-relaxed text-lg">
                        I have a solid foundational knowledge and am continuously developing advanced skills in backend web development and AI development. I have internship experience as a backend developer, focusing on multi-database system handling.
                    </p>
                    
                    {/* Social Links */}
                    <div className="flex items-center gap-4 pt-4">
                        <span className="text-gray-700 font-medium">Follow me on:</span>
                        <div className="flex gap-3">
                            {socialLinks.map((social, index) => {
                                const Icon = social.icon
                                return (
                                    <a
                                        key={index}
                                        href={social.href}
                                        aria-label={social.label}
                                        className={`p-2 rounded-full bg-gray-100 transition-all duration-300 hover:scale-110 hover:bg-gray-200 ${social.color}`}
                                    >
                                        <Icon size={20} />
                                    </a>
                                )
                            })}
                        </div>
                    </div>
                </div>

                {/* Image */}
                <div className="w-full lg:w-1/2 flex justify-center">
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
                        <img 
                            src="/banner.png" 
                            alt="Võ Minh Trí - FullStack Developer" 
                            className="relative w-full max-w-md h-auto aspect-square object-cover rounded-2xl shadow-xl"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe