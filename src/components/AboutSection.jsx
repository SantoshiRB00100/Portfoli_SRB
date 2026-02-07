import React from 'react';
import { Code, Briefcase, GraduationCap } from 'lucide-react';

const AboutSection = () => {
  const aboutCards = [
    {
      icon: <GraduationCap className="text-cyan-400 shine-icon" size={32} />,
      title: "Education",
      content: "Currently in 3rd year of Bachelor of Engineering in Computer Science at Jain College of Engineering, Belagavi. Focused on building strong fundamentals in programming and web development."
    },
    {
      icon: <Briefcase className="text-sky-400 shine-icon" size={32} />,
      title: "Experience",
      content: (
        <>
          <p className="text-gray-300 text-lg mb-2">
            <span className="font-semibold text-cyan-400">Full Stack Developer Intern</span> at Unified Mentor
          </p>
          <p className="text-gray-400">
            Working with MERN stack (MongoDB, Express.js, React.js, Node.js). Currently 1 month into a 6-month internship, gaining hands-on experience in full-stack development.
          </p>
        </>
      )
    },
    {
      icon: <Code className="text-blue-400 shine-icon" size={32} />,
      title: "What I Do",
      content: "I specialize in frontend development with a strong focus on creating responsive, user-friendly interfaces. My expertise includes modern web technologies like React.js and Tailwind CSS. I'm also proficient in Java and continuously improving my Data Structures and Algorithms skills to build efficient and scalable applications.",
      fullWidth: true
    }
  ];

  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="scroll-animate text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-400 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(34,211,238,0.4)]">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {aboutCards.map((card, index) => (
            <div
              key={index}
              className={`scroll-animate bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-cyan-500/30 hover:border-cyan-500/60 hover:shadow-lg hover:shadow-cyan-500/20 transition-all ${
                card.fullWidth ? 'md:col-span-2' : ''
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-center gap-4 mb-4">
                {card.icon}
                <h3 className="text-2xl font-bold">{card.title}</h3>
              </div>
              {typeof card.content === 'string' ? (
                <p className="text-gray-300 text-lg">{card.content}</p>
              ) : (
                card.content
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;