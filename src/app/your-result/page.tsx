'use client';

import Image from "next/image";
import Link from 'next/link';
import { useState } from 'react';

export default function YourResult() {
  const [expandedSection, setExpandedSection] = useState(1); // Test 1 expanded by default

  const handleSectionClick = (sectionNumber: number) => {
    setExpandedSection(expandedSection === sectionNumber ? 0 : sectionNumber);
  };

  const sections = [
    {
      number: 1,
      title: "Personality Explorer",
      icon: "/brain-icon.png",
      color: "#0046FF",
      links: [
        { href: "/", text: "Understanding Personality Explorer" },
        { href: "/personality-types", text: "Personality Types" },
        { href: "/your-result", text: "Your Result", isActive: true }
      ]
    },
    {
      number: 2,
      title: "Interest Explorer",
      icon: "/interest-icon.png",
      color: "#22C55E",
      links: [
        { href: "/", text: "Understanding Interest Explorer" },
        { href: "/riasec-model", text: "RIASEC Model" },
        { href: "/interest-result", text: "Your Result" }
      ]
    },
    {
      number: 3,
      title: "Career Motivators",
      icon: "/career-icon.png",
      color: "#F59E0B",
      links: [
        { href: "/", text: "Understanding Career Motivators" },
        { href: "/career-motivators", text: "10 Career Motivators" },
        { href: "/motivator-result", text: "Your Result" }
      ]
    },
    {
      number: 4,
      title: "Emotional Intelligence",
      icon: "/emotional-icon.png",
      color: "#3B82F6",
      links: [
        { href: "/", text: "Understanding Emotional Intelligence" },
        { href: "/goleman-test", text: "Daniel Goleman Emotional Intelligence Test" },
        { href: "/emotional-result", text: "Your Result" }
      ]
    },
    {
      number: 5,
      title: "Learning Styles",
      icon: "/learning-icon.png",
      color: "#A855F7",
      links: [
        { href: "/", text: "Understanding Learning Styles" },
        { href: "/learning-result", text: "Your Result" }
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-8 bg-white">
        {/* Header Section */}
        <div className="bg-white border-b border-[#E5E7EB]">
          <div className="flex justify-between items-start py-6 bg-white">
            <div className="max-w-[600px] bg-white">
              <h1 className="text-[32px] font-semibold text-[#1A1A1A] mb-3">Your Career Analysis Report</h1>
              <p className="text-[#666666] text-[11px] leading-[1.6]">Your Report ensures a complete understanding of your strengths, areas for growth, and ideal career fit.</p>
            </div>
            
            <div className="bg-white rounded-2xl shadow-[0px_1px_2px_rgba(0,0,0,0.06),0px_1px_3px_rgba(0,0,0,0.1)] p-5">
              <div className="flex items-start justify-between bg-white">
                <div className="bg-white">
                  <h2 className="text-[22px] font-semibold text-[#1A1A1A] mb-1">Want To Speak To An Expert Career Counsellor?</h2>
                  <p className="text-[12px] text-[#666666]">Explore a list of 1000+ Expert Career Counsellors near you!</p>
                </div>
                <button className="px-3 py-1.5 bg-[#F3F4F6] text-[12px] font-medium text-[#666666] rounded-lg whitespace-nowrap">
                  See All
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Career Options Bar */}
        <div className="border-t border-b border-[#E5E7EB] py-4 mb-8 bg-white">
          <div className="flex items-center justify-between bg-white">
            <div className="flex items-center bg-white">
              <div className="flex items-center bg-white">
                <span className="text-[17px] text-[#666666]">Your</span>
                <span className="text-[17px] font-semibold text-[#0046FF] ml-1">TOP 3</span>
                <span className="text-[17px] text-[#666666] ml-1">Career Options</span>
              </div>
              
              <div className="flex items-center gap-3 ml-6 bg-white">
                <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#E5E7EB]">
                  <span className="w-5 h-5 flex items-center justify-center rounded-full bg-[#666666] text-white text-sm">1</span>
                  <span className="text-[12px] text-[#666666]">Engineer</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#E5E7EB]">
                  <span className="w-5 h-5 flex items-center justify-center rounded-full bg-[#666666] text-white text-sm">2</span>
                  <span className="text-[12px] text-[#666666]">Doctor</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#E5E7EB]">
                  <span className="w-5 h-5 flex items-center justify-center rounded-full bg-[#666666] text-white text-sm">3</span>
                  <span className="text-[12px] text-[#666666]">Teacher</span>
                </div>
              </div>
            </div>

            <div className="flex items-center bg-white">
              <span className="text-[17px] text-[#1A1A1A] mr-4">Choose them right here!</span>
              <button className="px-4 py-2 bg-[#0046FF] text-white rounded text-sm font-medium">
                Your Career Options
              </button>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex gap-16 bg-white">
          {/* Side Navigation */}
          <aside className="w-[280px] bg-white">
            <div className="space-y-2">
              {sections.map((section) => (
                <div key={section.number}>
                  <div
                    className={`relative p-4 bg-white rounded-lg cursor-pointer ${
                      expandedSection === section.number
                        ? `shadow-[0px_1px_3px_rgba(0,0,0,0.1)]`
                        : 'hover:shadow-[0px_1px_3px_rgba(0,0,0,0.1)]'
                    }`}
                    onClick={() => handleSectionClick(section.number)}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 flex-shrink-0">
                        <Image src={section.icon} alt={section.title} width={24} height={24} />
                      </div>
                      <div>
                        <div className="text-xs text-[#666666] mb-0.5">TEST {section.number}</div>
                        <div className={`text-[${section.color}] text-[15px] font-medium`}>{section.title}</div>
                      </div>
                    </div>
                    {expandedSection === section.number && (
                      <div className="absolute top-0 right-0 bottom-0 w-1 bg-[${section.color}] rounded-r-lg"></div>
                    )}
                  </div>
                  <div className={`mt-3 ml-[52px] space-y-2.5 pb-4 ${expandedSection === section.number ? '' : 'hidden'}`}>
                    {section.links.map((link, index) => (
                      <Link key={index} href={link.href} className="block">
                        <div className={`text-[15px] ${
                          link.isActive 
                            ? 'text-[#1A1A1A]' 
                            : `text-[#666666] hover:text-[${section.color}]`
                        }`}>
                          {link.text}
                        </div>
                      </Link>
                    ))}
                  </div>
                  {section.number < 5 && <div className="h-[1px] bg-[#E5E7EB]"></div>}
                </div>
              ))}

              {/* Download Report Card Button */}
              <div className="mt-4">
                <button className="w-full px-4 py-2.5 bg-white border border-[#0046FF] rounded-lg text-[#0046FF] text-[15px] font-medium flex items-center justify-center gap-1">
                  Download Report Card
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 10V12.6667C14 13.0203 13.8595 13.3594 13.6095 13.6095C13.3594 13.8595 13.0203 14 12.6667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V10" stroke="#0046FF" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M4.66699 6.66667L8.00033 10L11.3337 6.66667" stroke="#0046FF" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 10V2" stroke="#0046FF" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 bg-white">
            {/* Page Title */}
            <h1 className="text-[28px] font-semibold mb-8">
              <span className="text-[#1A1A1A]">Your </span>
              <span className="text-[#0046FF]">Result</span>
            </h1>

            {/* Navigation Tabs */}
            <div className="border-b border-[#E5E7EB]">
              <div className="flex items-center">
                <div className="px-4 py-2 text-[12px] font-medium text-[#1A1A1A] border-b-2 border-[#0046FF] -mb-[1px]">
                  Personality
                </div>
                <div className="px-4 py-2 text-[12px] text-[#666666]">
                  Characterisitics
                </div>
                <div className="px-4 py-2 text-[12px] text-[#666666]">
                  Strengths/ Weaknesses
                </div>
                <div className="px-4 py-2 text-[12px] text-[#666666]">
                  Work Style
                </div>
                <div className="px-4 py-2 text-[12px] text-[#666666]">
                  Preferences
                </div>
                <div className="px-4 py-2 text-[12px] text-[#666666]">
                  Interpersonal Interaction
                </div>
                <div className="px-4 py-2 text-[12px] text-[#666666]">
                  Work Culture
                </div>
              </div>
            </div>

            {/* Result Content */}
            <div className="mt-6">
              {/* Personality Type Card */}
              <div className="bg-white">
                <div className="flex gap-6">
                  <div className="w-[247px] h-[189px] bg-[#F9F7FC] rounded-xl flex items-center justify-center">
                    <Image src="/personality/purple_uncle.png" alt="Architect" width={247} height={189} />
                  </div>
                  <div className="flex-1 pt-2">
                    <div className="flex items-center gap-2 mb-2">
                      <h2 className="text-[24px] font-semibold text-[#1A1A1A]">Architect</h2>
                      <div className="text-[#A855F7] text-[17px]">INTJ Personality</div>
                    </div>
                    <div className="flex gap-2 mb-4">
                      <span className="px-3 py-1 bg-[#F3E8FF] text-[#A855F7] text-[13px] font-medium rounded-full">STRATEGIC</span>
                      <span className="px-3 py-1 bg-[#F3E8FF] text-[#A855F7] text-[13px] font-medium rounded-full">ANALYTICAL</span>
                      <span className="px-3 py-1 bg-[#F3E8FF] text-[#A855F7] text-[13px] font-medium rounded-full">INDEPENDENT</span>
                    </div>
                    <p className="text-[12px] text-[#666666] leading-[1.6]">
                      Congratulations on taking the first step for personalized Career Planning & Assessment! We understand the significance of making informed decisions as you navigate your academic journey and future career. We are committed to empowering individuals with the tools and insights needed to confidently navigate the world of careers and education.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </main>
  );
} 