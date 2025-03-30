'use client';

import { useState } from 'react';
import { SideNavigation } from '@/components/SideNavigation';
import { PersonalityTypeCard } from '@/components/PersonalityTypeCard';
import { personalityTypes } from '@/data/personalityTypes';

export default function PersonalityTypes() {
  const [expandedSection, setExpandedSection] = useState<number>(1); // 1 is personality explorer

  const toggleSection = (sectionNumber: number) => {
    setExpandedSection(expandedSection === sectionNumber ? 0 : sectionNumber);
  };

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
                  <p className="text-[15px] text-[#666666]">Explore a list of 1000+ Expert Career Counsellors near you!</p>
                </div>
                <button className="px-3 py-1.5 bg-white text-[15px] font-medium text-[#666666] rounded-lg whitespace-nowrap border border-[#E5E7EB]">
                  See All
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Career Options Bar */}
        <div className="py-4 bg-white">
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
          <SideNavigation expandedSection={expandedSection} toggleSection={toggleSection} />

          {/* Main Content */}
          <main className="flex-1 bg-white">
            <div className="space-y-6">
              <h2 className="text-[24px] font-semibold">
                <span className="text-[#0046FF]">Personality Types</span>
              </h2>
              
              {/* Personality Types Grid */}
              <div className="grid grid-cols-4 gap-6">
                {personalityTypes.map((type) => (
                  <PersonalityTypeCard key={type.code} type={type} />
                ))}
              </div>
            </div>
          </main>
        </div>

        {/* Footer Links */}
        <div className="mt-8 text-center">
          <div className="text-[13px] text-[#666666]">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <span className="mx-2">•</span>
            <a href="#" className="hover:underline">Terms & Conditions</a>
            <span className="mx-2">•</span>
            <a href="#" className="hover:underline">Support</a>
          </div>
        </div>
      </div>
    </main>
  );
} 