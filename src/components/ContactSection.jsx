import React from 'react';
import { Github, Linkedin, Instagram, Mail, Phone, Send } from 'lucide-react';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: <Mail className="text-cyan-400 shine-icon" size={24} />,
      label: "Email",
      value: "srbaslingol@gmail.com",
      href: "mailto:srbaslingol@gmail.com"
    },
    {
      icon: <Phone className="text-sky-400 shine-icon" size={24} />,
      label: "Phone",
      value: "+91 9380325782",
      href: "tel:+919380325782"
    }
  ];

  const socialContactLinks = [
    { 
      href: "https://github.com/SantoshiRB00100", 
      icon: <Github size={24} />,
      hoverColor: "hover:bg-slate-800 hover:shadow-slate-800/80"
    },
    { 
      href: "https://www.linkedin.com/in/santoshi-r-basalingol-21519b2a2", 
      icon: <Linkedin size={24} />,
      hoverColor: "hover:bg-slate-800 hover:shadow-slate-800/80"
    },
    { 
      href: "https://telegram.org/dl", 
      icon: <Send size={24} />,
      hoverColor: "hover:bg-slate-800 hover:shadow-slate-800/80"
    },
    { 
      href: "https://t.co/Mkq7U8ePcA", 
      icon: <Instagram size={24} />,
      hoverColor: "hover:bg-slate-800 hover:shadow-slate-800/80"
    }
  ];

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto w-full">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-400 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(34,211,238,0.4)]">
          Get In Touch
        </h2>
        <div className="bg-gray-900/50 backdrop-blur-sm p-8 md:p-12 rounded-2xl border border-cyan-500/30 hover:shadow-lg hover:shadow-cyan-500/20 transition-all">
          <p className="text-center text-gray-300 text-lg mb-8">
            I am currently looking for new opportunities and collaborations. Whether you have a question or just want to say hi, feel free to reach out!
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {contactInfo.map((contact, index) => (
              <a key={index} href={contact.href} className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-xl hover:bg-cyan-500/10 hover:shadow-lg hover:shadow-cyan-500/20 transition-all border border-cyan-500/30 hover:border-cyan-500/60 cursor-pointer">
                {contact.icon}
                <div>
                  <p className="text-sm text-gray-400">{contact.label}</p>
                  <p className="text-white">{contact.value}</p>
                </div>
              </a>
            ))}
          </div>
          <div className="flex justify-center gap-4">
            {socialContactLinks.map((link, index) => (
              <a key={index} href={link.href} target="_blank" rel="noopener noreferrer" className={`p-4 bg-gray-800/50 rounded-full ${link.hoverColor} hover:scale-110 transition-all duration-300 shine-icon pulse-glow cursor-pointer`}>
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;