import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code2, Database, Server, Cloud } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    
    {
      title: 'Backend',
      icon: <Server className="w-5 h-5" />,
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
        { name: 'Express.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
        { name: 'NestJS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg' },
        // { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
        { name: 'Django', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg' },
        { name: 'Flask', logo: 'https://icon.icepanel.io/Technology/png-shadow-512/Flask.png' },
        // { name: 'REST API', logo: '' },

      ]
    },
    {
      title: 'Frontend',
      icon: <Code2 className="w-5 h-5" />,
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'Next.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
        { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { name: 'Tailwind CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
        { name: 'Ant Design', logo: 'https://images.seeklogo.com/logo-png/38/1/ant-design-logo-png_seeklogo-380495.png' },
        { name: 'ShadcnUI', logo: 'https://images.seeklogo.com/logo-png/51/1/shadcn-ui-logo-png_seeklogo-519786.png' },
        { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },

 
      ]
    },
    {
      title: 'Database',
      icon: <Database className="w-5 h-5" />,
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
        { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
        { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
        { name: 'Redis', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg' },
        { name: 'SQLite', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg' }
      ]
    },
    {
      title: 'Tools',
      icon: <Cloud className="w-5 h-5" />,
      color: 'from-orange-500 to-red-500',
      skills: [
        // { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
        { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
        { name: 'GitHub', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
        // { name: 'AWS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
        // { name: 'Nginx', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg' },
        // { name: 'Linux', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
        // { name: 'Jenkins', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg' }
      ]
    }
  ];

  return (
    <section id="skills" className="py-16 px-4 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#003366] dark:text-white mb-4">
            Technical Skills
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Technology and tools I use every day
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, idx) => (
            <Card key={idx} className="border-slate-200 hover:border-[#003366]/30 transition-all duration-300 hover:shadow-2xl hover:shadow-[#003366]/10 bg-white dark:bg-slate-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${category.color}`}>
                    {category.icon}
                  </div>
                  <span className="text-2xl font-bold text-slate-900 dark:text-white">
                    {category.title}
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-4 gap-4">
                  {category.skills.map((skill, skillIdx) => (
                    <div
                      key={skillIdx}
                      className="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-all duration-200 cursor-pointer group"
                    >
                      <div className="w-12 h-12 flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                        <img
                          src={skill.logo}
                          alt={skill.name}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <span className="text-xs text-center font-medium text-slate-700 dark:text-slate-300">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}