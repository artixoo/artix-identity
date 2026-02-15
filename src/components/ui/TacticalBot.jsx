import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const TacticalBot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { role: 'bot', text: 'TACTICAL INTEL SYSTEM ACTIVE. STANDING BY FOR QUERIES.' }
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);

    const botRef = useRef(null);
    const messageEndRef = useRef(null);

    const faqData = [
        {
            q: "How can I contact you?",
            keywords: ["contact", "email", "reach", "signal"],
            a: "You can reach me directly at utx1zz@gmail.com. I'm also active on LinkedIn and GitHub!"
        },
        {
            q: "What is your tech stack?",
            keywords: ["stack", "tech", "languages", "frameworks", "tools"],
            a: "I work with React, Node.js, and Tailwind CSS for web development. For cybersecurity, I use Linux, Python, and various penetration testing tools."
        },
        {
            q: "What is Ethical Hacking?",
            keywords: ["hacking", "ethical", "hacker"],
            a: "It's about finding and fixing security holes before bad guys can exploit them. I help make systems safer by testing them like an attacker would."
        },
        {
            q: "What are CTFs?",
            keywords: ["ctf", "capture", "flag", "competition"],
            a: "They are cybersecurity competitions where you solve puzzles to find 'flags'. It's a great way to practice real-world hacking skills in a safe environment."
        },
        {
            q: "Are you open for work?",
            keywords: ["work", "job", "hiring", "available", "freelance"],
            a: "Yes! I'm currently looking for internships and collaborative projects in the cybersecurity and web development space. Let's talk!"
        },
        {
            q: "Where can I see your resume?",
            keywords: ["resume", "cv", "pdf", "experience"],
            a: "You can find my detailed experience in the 'Tactical History' section. Alternatively, click here to view my full CV: <a href='/resume.pdf' target='_blank' rel='noopener noreferrer' class='text-white underline silver-glow'>View Resume</a>"
        },
        {
            q: "What do you do for fun?",
            keywords: ["fun", "hobbies", "hobby", "interest"],
            a: "Beyond tech, I enjoy participating in CTFs, exploring new security tools, and keeping up with the latest in tech and space exploration."
        }
    ];

    const handleSend = (text) => {
        if (!text.trim()) return;

        const userMsg = { role: 'user', text };
        setMessages(prev => [...prev, userMsg]);
        setInputValue('');
        setIsTyping(true);

        // Simulation of processing
        setTimeout(() => {
            const botResponse = processQuery(text);
            setMessages(prev => [...prev, { role: 'bot', text: botResponse }]);
            setIsTyping(false);
        }, 800);
    };

    const processQuery = (input) => {
        const lowerInput = input.toLowerCase();
        for (const item of faqData) {
            if (item.keywords.some(k => lowerInput.includes(k))) {
                return item.a;
            }
        }
        return "QUERY UNRECOGNIZED. PLEASE SELECT A RECOGNIZED PROTOCOL OR USE KEYWORDS: CONTACT, HACKING, CTF, MISSION.";
    };

    useEffect(() => {
        if (messageEndRef.current) {
            messageEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [messages, isTyping]);

    const toggleBot = () => {
        if (!isOpen) {
            setIsOpen(true);
            gsap.fromTo(botRef.current,
                { opacity: 0, scale: 0.9, y: 20 },
                { opacity: 1, scale: 1, y: 0, duration: 0.5, ease: "power3.out" }
            );
        } else {
            gsap.to(botRef.current, {
                opacity: 0, scale: 0.9, y: 20, duration: 0.3, onComplete: () => setIsOpen(false)
            });
        }
    };

    return (
        <div className="fixed bottom-8 right-8 z-[1000]">
            {/* Toggle Button */}
            <button
                onClick={toggleBot}
                className="w-16 h-16 rounded-full glass-panel flex items-center justify-center silver-border-glow hover:scale-110 transition-transform group relative bg-black/80"
            >
                <div className="absolute inset-0 rounded-full border border-white/10 group-hover:border-white/30 transition-colors"></div>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-white silver-glow">
                    <path d="M12 8V4m0 0H8m4 0h4M5 8h14v10a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8z" />
                    <circle cx="9" cy="13" r="1" fill="currentColor" />
                    <circle cx="15" cy="13" r="1" fill="currentColor" />
                    <path d="M9 17h6" />
                </svg>

                {/* Notification Pulse */}
                {!isOpen && (
                    <div className="absolute top-0 right-0 w-3 h-3 bg-white rounded-full silver-glow animate-pulse"></div>
                )}
            </button>

            {/* Chat Window */}
            {isOpen && (
                <div
                    ref={botRef}
                    className="absolute bottom-20 right-0 w-[350px] md:w-[400px] h-[500px] glass-panel rounded-[32px] overflow-hidden flex flex-col border border-white/10 silver-border-glow shadow-2xl bg-black/90 backdrop-blur-xl"
                >
                    {/* Header */}
                    <div className="p-6 border-b border-white/10 flex justify-between items-center bg-black/60 relative">
                        <div className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-white/40 animate-pulse"></div>
                            <span className="text-[10px] uppercase tracking-[0.3em] text-white/60 font-mono">
                                Tactical Intel // <span className="text-white/20">V1.0.4</span>
                            </span>
                        </div>
                        <button onClick={toggleBot} className="text-white/20 hover:text-white transition-colors">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </button>
                    </div>

                    {/* Messages Area */}
                    <div className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar-thin">
                        {messages.map((msg, i) => (
                            <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                <div className={`max-w-[90%] p-4 rounded-2xl text-[13px] leading-relaxed ${msg.role === 'user'
                                    ? 'bg-white/10 text-white border border-white/5 font-sans'
                                    : 'bg-transparent text-white/90 font-mono border-l-2 border-white/20 pl-4 bg-white/[0.02]'
                                    } shadow-sm animate-in fade-in slide-in-from-bottom-2 duration-300`}>
                                    {msg.role === 'bot' ? (
                                        <div dangerouslySetInnerHTML={{ __html: msg.text }} />
                                    ) : (
                                        msg.text
                                    )}
                                </div>
                            </div>
                        ))}
                        {isTyping && (
                            <div className="flex justify-start">
                                <div className="p-4 rounded-2xl bg-transparent flex gap-1">
                                    <span className="w-1.5 h-1.5 bg-white/40 rounded-full animate-bounce"></span>
                                    <span className="w-1.5 h-1.5 bg-white/40 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                                    <span className="w-1.5 h-1.5 bg-white/40 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                                </div>
                            </div>
                        )}
                        <div ref={messageEndRef}></div>
                    </div>

                    {/* Suggested Prompts - Horizontal Scrollable Row */}
                    <div className="px-6 py-3 border-t border-b border-white/5 bg-black/40">
                        <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
                            {faqData.map((item, i) => (
                                <button
                                    key={i}
                                    onClick={() => handleSend(item.q)}
                                    className="text-[10px] uppercase tracking-wider px-4 py-2 rounded-lg border border-white/10 hover:border-white/30 hover:bg-white/5 transition-all whitespace-nowrap text-white/50 hover:text-white"
                                >
                                    {item.q}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Input Area */}
                    <div className="p-6">
                        <div className="relative group">
                            <input
                                type="text"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && handleSend(inputValue)}
                                placeholder="TYPE QUERY..."
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-[11px] font-mono text-white focus:outline-none focus:border-white/30 transition-all placeholder:text-white/10"
                            />
                            <button
                                onClick={() => handleSend(inputValue)}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-white/20 group-hover:text-white transition-colors"
                            >
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <line x1="22" y1="2" x2="11" y2="13"></line>
                                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TacticalBot;
