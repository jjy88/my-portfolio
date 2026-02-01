import React, { useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2, BookOpen, User, Send, ChevronRight, GraduationCap, Award, Zap, Briefcase, Calendar, Check } from 'lucide-react';

const App = () => {
  const [activeTab, setActiveTab] = useState('experience');
  const [copied, setCopied] = useState(false);

  const userInfo = {
    name: "Emma Yu",
    role: "Computer Science Student",
    university: "Concordia University",
    major: "B.CompSc in Computer Science",
    graduation: "Expected June 2027",
    email: "jjyu4672@gmail.com",
    github: "https://github.com/jjy88",
    linkedin: "https://www.linkedin.com/in/emma-y-658b491a1/"
  };

  /
  const handleEmailClick = (e) => {
    e.preventDefault();
    
    const textArea = document.createElement("textarea");
    textArea.value = userInfo.email;
    document.body.appendChild(textArea);
    textArea.select();
    try {
      document.execCommand('copy');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // 2秒后恢复原样
    } catch (err) {
      console.error('Copy failed', err);
    }
    document.body.removeChild(textArea);

    // 尝试在后台打开 mailto
    setTimeout(() => {
      window.location.href = `mailto:${userInfo.email}`;
    }, 100);
  };

  const skills = {
    "Languages": ["Java", "Python", "JavaScript", "SQL", "C", "R", "Bash"],
    "Frameworks/DB": ["Spring Boot", "React", "Node.js", "Express.js", "Flask", "MySQL", "SQLite"],
    "Tools & Infra": ["Git", "Docker", "OpenAPI", "Postman", "SAP S/4HANA", "Power BI", "Power Automate"]
  };

  const experiences = [
    {
      company: "Linux Foundation (LF Energy)",
      role: "LFX Mentee - Project Hyphae",
      period: "Jan 2026 - Mar 2026",
      desc: "Selected for the global mentorship program. Integrating OpenSSF security standards and optimizing repository security for Hyphae APIs via Scorecard reports.",
      highlights: ["OpenSSF Standards", "JUnit Testing", "Global Collaboration"],
      githubLink: "https://github.com/lf-energy/hyphae"
    },
    {
      company: "EdVisingU AI (Riipen)",
      role: "AI Automation & Systems Intern",
      period: "Jan 2026 - Mar 2026",
      desc: "Architected content infrastructure using Zapier and Gemini AI. Implemented multi-stage approval pipelines for strategic publishing workflows.",
      highlights: ["Zapier", "LLM Integration", "Workflow Automation"]
    },
    {
      company: "Artspiration Foundation (Riipen)",
      role: "System Analyst Intern",
      period: "Oct 2025 - Dec 2025",
      desc: "Built and configured Monday.com CRM platform to centralize contact data. Designed automated workflows and segmented contact views.",
      highlights: ["CRM Design", "System Analysis", "Data Syncing"]
    },
    {
      company: "CommUNITY Support Centre",
      role: "System Administrator Agent Intern",
      period: "Jan 2025 - Aug 2025",
      desc: "Provided L1/L2 operational support in SAP S/4HANA environment. Optimized Power Automate workflows and maintained Power BI dashboards.",
      highlights: ["SAP S/4HANA", "Power BI", "ITIL Triage"]
    }
  ];

  const projects = [
    {
      title: "Full-Stack Banking Application",
      desc: "A secure banking platform developed with a Spring Boot backend and JavaScript frontend. Features REST APIs for fund transfers and transaction records.",
      tags: ["Java", "Spring Boot", "MySQL", "REST API"],
      link: "https://github.com/jjy88",
      linkText: "View Repository"
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-100">
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-bold text-lg tracking-tight text-blue-600">{userInfo.name.toLowerCase()}.dev</span>
          <div className="flex gap-6 md:gap-8 text-sm font-semibold text-slate-500">
            {['experience', 'projects', 'skills', 'about'].map((tab) => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab)} 
                className={`capitalize hover:text-blue-600 transition-colors ${activeTab === tab ? 'text-blue-600' : ''}`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6 py-16">
        <section className="mb-24">
          <div className="max-w-3xl space-y-6 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-700 text-xs font-bold rounded-md uppercase tracking-widest border border-blue-100">
              <Zap size={14} /> Aspiring Software Engineer
            </div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tight text-slate-900">
              Hi, I'm <span className="text-blue-600">{userInfo.name.split(' ')[0]}</span>.
            </h1>
            <p className="text-xl text-slate-500 leading-relaxed font-medium">
              CS Student at <span className="text-slate-900 underline decoration-blue-500 underline-offset-4">{userInfo.university}</span>. 
              Full-stack developer with 4+ internships in <span className="text-slate-900">Backend</span>, <span className="text-slate-900">AI Automation</span>, and <span className="text-slate-900">ERP Support</span>.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-4">
              <a href={userInfo.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-xl hover:bg-slate-800 transition shadow-lg shadow-slate-200">
                <Github size={20} /> GitHub
              </a>
              <a href={userInfo.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-white border-2 border-slate-100 text-slate-700 rounded-xl hover:border-blue-200 hover:text-blue-600 transition">
                <Linkedin size={20} /> LinkedIn
              </a>
              <button 
                onClick={handleEmailClick}
                className="flex items-center gap-2 px-6 py-3 bg-white border-2 border-slate-100 text-slate-700 rounded-xl hover:border-blue-200 hover:text-blue-600 transition min-w-[120px] justify-center"
              >
                {copied ? <Check size={20} className="text-green-500" /> : <Mail size={20} />}
                <span>{copied ? "Copied!" : "Email"}</span>
              </button>
            </div>
          </div>
        </section>

        <div className="min-h-[400px]">
          {activeTab === 'experience' && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h2 className="text-3xl font-bold mb-10 flex items-center gap-3 text-slate-900">
                <span className="w-10 h-1 bg-blue-600 rounded-full"></span>
                Work Experience
              </h2>
              <div className="space-y-8">
                {experiences.map((exp, idx) => (
                  <div key={idx} className="group relative pl-8 pb-8 border-l border-slate-100 last:pb-0">
                    <div className="absolute left-[-5px] top-0 w-[9px] h-[9px] bg-slate-200 rounded-full border-2 border-white group-hover:bg-blue-600 group-hover:scale-125 transition-all"></div>
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{exp.role}</h3>
                          {exp.githubLink && (
                            <a href={exp.githubLink} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-600 transition-colors">
                              <ExternalLink size={18} />
                            </a>
                          )}
                        </div>
                        <div className="flex items-center gap-2 text-blue-600 font-bold text-sm mt-1">
                          <Briefcase size={14} /> {exp.company}
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-slate-400 text-xs font-bold uppercase tracking-wider mt-2 md:mt-0">
                        <Calendar size={14} /> {exp.period}
                      </div>
                    </div>
                    <p className="text-slate-500 text-sm leading-relaxed mb-4 max-w-3xl">{exp.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.highlights.map(tag => (
                        <span key={tag} className="px-3 py-1 bg-slate-50 text-slate-500 text-[10px] font-bold rounded-full border border-slate-100 uppercase tracking-tighter">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'projects' && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h2 className="text-3xl font-bold mb-10 flex items-center gap-3">
                <span className="w-10 h-1 bg-blue-600 rounded-full"></span>
                Technical Projects
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((p, idx) => (
                  <div key={idx} className="group flex flex-col bg-slate-50/50 p-8 rounded-2xl border border-transparent hover:border-blue-100 hover:bg-white hover:shadow-xl transition-all duration-300">
                    <div className="flex justify-between items-start mb-6">
                      <div className="p-3 bg-white text-blue-600 rounded-xl shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-colors">
                        <Code2 size={24} />
                      </div>
                      <a href={p.link} className="text-slate-300 hover:text-blue-600 transition-colors flex items-center gap-1 text-xs font-bold uppercase tracking-wider">
                        {p.linkText} <ExternalLink size={14} />
                      </a>
                    </div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors">{p.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-grow">{p.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {p.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 bg-white border border-slate-100 text-slate-400 text-[10px] font-bold rounded-lg uppercase tracking-wider">{tag}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'skills' && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h2 className="text-3xl font-bold mb-10 flex items-center gap-3">
                <span className="w-10 h-1 bg-blue-600 rounded-full"></span>
                Technical Stack
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {Object.entries(skills).map(([category, items]) => (
                  <div key={category} className="space-y-6">
                    <h3 className="text-xs font-black text-blue-600 uppercase tracking-[0.2em]">{category}</h3>
                    <div className="flex flex-col gap-3">
                      {items.map(skill => (
                        <div key={skill} className="flex items-center justify-between group">
                          <span className="text-slate-600 font-medium group-hover:text-slate-900 transition-colors">{skill}</span>
                          <div className="h-[1px] flex-grow mx-4 bg-slate-100"></div>
                          <div className="w-1.5 h-1.5 rounded-full bg-slate-200 group-hover:bg-blue-500 transition-colors"></div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'about' && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h2 className="text-3xl font-bold mb-10 flex items-center gap-3">
                <span className="w-10 h-1 bg-blue-600 rounded-full"></span>
                About Me
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2 space-y-8">
                  <div className="p-8 bg-slate-50/50 rounded-2xl border border-slate-100">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-2 bg-blue-600 text-white rounded-lg"><GraduationCap size={24} /></div>
                      <h3 className="text-xl font-bold text-slate-900">Education</h3>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between items-start">
                        <h4 className="font-bold text-slate-900">{userInfo.university}</h4>
                        <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded tracking-wide uppercase">{userInfo.graduation}</span>
                      </div>
                      <p className="text-slate-500">{userInfo.major}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-900 p-8 rounded-3xl text-white flex flex-col justify-center relative overflow-hidden h-fit sticky top-24">
                  <div className="absolute -top-12 -right-12 w-48 h-48 bg-blue-600/20 rounded-full blur-3xl"></div>
                  <h3 className="text-2xl font-bold mb-4">Let's Connect</h3>
                  <button 
                    onClick={handleEmailClick}
                    className="flex items-center justify-between w-full px-6 py-4 bg-blue-600 hover:bg-blue-500 rounded-2xl font-bold transition-all shadow-lg shadow-blue-900/20"
                  >
                    {copied ? "Copied!" : "Email Me"} <ChevronRight size={20} />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      <footer className="max-w-5xl mx-auto px-6 py-12 border-t border-slate-100 mt-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-slate-400 text-sm font-medium">© 2026 {userInfo.name}. Built with React & Tailwind.</p>
        <div className="flex gap-8 text-xs font-bold text-slate-400 uppercase tracking-widest">
           <a href={userInfo.github} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">GitHub</a>
           <a href={userInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">LinkedIn</a>
        </div>
      </footer>
    </div>
  );
};

export default App;