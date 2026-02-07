import React from 'react';

const SkillsSection = () => {
  const skills = [
    { name: 'HTML', level: 90 },
    { name: 'CSS', level: 85 },
    { name: 'JavaScript', level: 80 },
    { name: 'React.js', level: 85 },
    { name: 'Tailwind CSS', level: 90 },
    { name: 'Java', level: 75 },
    { name: 'DSA', level: 70 }
  ];

  return (
    <section id="skills" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-7xl mx-auto w-full">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-400 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(34,211,238,0.4)]">
          Skills & Technologies
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold text-gray-300">{skill.name}</span>
                <span className="text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.6)]">{skill.level}%</span>
              </div>
              <div className="h-3 bg-gray-800 rounded-full overflow-hidden border border-cyan-500/20">
                <div
                  className="h-full bg-gradient-to-r from-cyan-500 to-sky-500 rounded-full transition-all duration-1000 ease-out shadow-[0_0_10px_rgba(34,211,238,0.5)]"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;