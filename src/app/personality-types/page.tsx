'use client';

import Image from "next/image";
import Link from 'next/link';
import { useState } from 'react';

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
                  <span className="text-[15px] text-[#666666]">Engineer</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#E5E7EB]">
                  <span className="w-5 h-5 flex items-center justify-center rounded-full bg-[#666666] text-white text-sm">2</span>
                  <span className="text-[15px] text-[#666666]">Doctor</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#E5E7EB]">
                  <span className="w-5 h-5 flex items-center justify-center rounded-full bg-[#666666] text-white text-sm">3</span>
                  <span className="text-[15px] text-[#666666]">Teacher</span>
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
              {/* Test 1 - Personality Explorer */}
              <div>
                <button onClick={() => toggleSection(1)} className="w-full">
                  <div className="relative p-4 w-full bg-white rounded-lg shadow-[0px_1px_3px_rgba(0,0,0,0.1)] cursor-pointer hover:bg-gray-50 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 flex-shrink-0">
                        <Image src="/icons/brain.png" alt="Personality" width={24} height={24} />
                      </div>
                      <div className="flex-1">
                        <div className="text-xs text-[#666666] mb-0.5">TEST 1</div>
                        <div className="text-[#0046FF] text-[15px] font-medium">Personality Explorer</div>
                      </div>
                    </div>
                    {expandedSection === 1 && <div className="absolute top-0 right-0 bottom-0 w-1 bg-[#0046FF] rounded-r-lg"></div>}
                  </div>
                </button>
                {expandedSection === 1 && (
                  <div className="mt-3 ml-[52px] space-y-2.5 pb-4">
                    <Link href="/" className="block hover:bg-gray-50 rounded-lg transition-colors">
                      <div className="text-[15px] text-[#666666] px-3 py-2">Understanding Personality Explorer</div>
                    </Link>
                    <div className="text-[15px] text-[#1A1A1A] px-3 py-2 bg-gray-50 rounded-lg">Personality Types</div>
                    <Link href="/your-result" className="block hover:bg-gray-50 rounded-lg transition-colors">
                      <div className="text-[15px] text-[#666666] px-3 py-2">Your Result</div>
                    </Link>
                  </div>
                )}
              </div>

              <div className="h-[1px] bg-[#E5E7EB]"></div>

              {/* Test 2 - Interest Explorer */}
              <div>
                <button onClick={() => toggleSection(2)} className="w-full">
                  <div className="p-4 w-full bg-white rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 flex-shrink-0">
                        <Image src="/icons/interest.png" alt="Interest" width={24} height={24} />
                      </div>
                      <div className="flex-1">
                        <div className="text-xs text-[#666666] mb-0.5">TEST 2</div>
                        <div className="text-[#22C55E] text-[15px] font-medium">Interest Explorer</div>
                      </div>
                    </div>
                    {expandedSection === 2 && <div className="absolute top-0 right-0 bottom-0 w-1 bg-[#22C55E] rounded-r-lg"></div>}
                  </div>
                </button>
                {expandedSection === 2 && (
                  <div className="mt-3 ml-[52px] space-y-2.5 pb-4">
                    <Link href="/interest/understanding" className="block hover:bg-gray-50 rounded-lg transition-colors">
                      <div className="text-[15px] text-[#666666] px-3 py-2">Understanding Interest Explorer</div>
                    </Link>
                    <Link href="/interest/types" className="block hover:bg-gray-50 rounded-lg transition-colors">
                      <div className="text-[15px] text-[#666666] px-3 py-2">Interest Types</div>
                    </Link>
                    <Link href="/interest/result" className="block hover:bg-gray-50 rounded-lg transition-colors">
                      <div className="text-[15px] text-[#666666] px-3 py-2">Your Result</div>
                    </Link>
                  </div>
                )}
              </div>

              <div className="h-[1px] bg-[#E5E7EB]"></div>

              {/* Test 3 - Career Motivators */}
              <div>
                <button onClick={() => toggleSection(3)} className="w-full">
                  <div className="p-4 w-full bg-white rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 flex-shrink-0">
                        <Image src="/icons/career.png" alt="Career" width={24} height={24} />
                      </div>
                      <div className="flex-1">
                        <div className="text-xs text-[#666666] mb-0.5">TEST 3</div>
                        <div className="text-[#F59E0B] text-[15px] font-medium">Career Motivators</div>
                      </div>
                    </div>
                    {expandedSection === 3 && <div className="absolute top-0 right-0 bottom-0 w-1 bg-[#F59E0B] rounded-r-lg"></div>}
                  </div>
                </button>
                {expandedSection === 3 && (
                  <div className="mt-3 ml-[52px] space-y-2.5 pb-4">
                    <Link href="/career/understanding" className="block hover:bg-gray-50 rounded-lg transition-colors">
                      <div className="text-[15px] text-[#666666] px-3 py-2">Understanding Career Motivators</div>
                    </Link>
                    <Link href="/career/types" className="block hover:bg-gray-50 rounded-lg transition-colors">
                      <div className="text-[15px] text-[#666666] px-3 py-2">Motivator Types</div>
                    </Link>
                    <Link href="/career/result" className="block hover:bg-gray-50 rounded-lg transition-colors">
                      <div className="text-[15px] text-[#666666] px-3 py-2">Your Result</div>
                    </Link>
                  </div>
                )}
              </div>

              <div className="h-[1px] bg-[#E5E7EB]"></div>

              {/* Test 4 - Emotional Intelligence */}
              <div>
                <button onClick={() => toggleSection(4)} className="w-full">
                  <div className="p-4 w-full bg-white rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 flex-shrink-0">
                        <Image src="/icons/emotional.png" alt="Emotional" width={24} height={24} />
                      </div>
                      <div className="flex-1">
                        <div className="text-xs text-[#666666] mb-0.5">TEST 4</div>
                        <div className="text-[#3B82F6] text-[15px] font-medium">Emotional Intelligence</div>
                      </div>
                    </div>
                    {expandedSection === 4 && <div className="absolute top-0 right-0 bottom-0 w-1 bg-[#3B82F6] rounded-r-lg"></div>}
                  </div>
                </button>
                {expandedSection === 4 && (
                  <div className="mt-3 ml-[52px] space-y-2.5 pb-4">
                    <Link href="/emotional/understanding" className="block hover:bg-gray-50 rounded-lg transition-colors">
                      <div className="text-[15px] text-[#666666] px-3 py-2">Understanding Emotional Intelligence</div>
                    </Link>
                    <Link href="/emotional/types" className="block hover:bg-gray-50 rounded-lg transition-colors">
                      <div className="text-[15px] text-[#666666] px-3 py-2">Intelligence Types</div>
                    </Link>
                    <Link href="/emotional/result" className="block hover:bg-gray-50 rounded-lg transition-colors">
                      <div className="text-[15px] text-[#666666] px-3 py-2">Your Result</div>
                    </Link>
                  </div>
                )}
              </div>

              <div className="h-[1px] bg-[#E5E7EB]"></div>

              {/* Test 5 - Learning Styles */}
              <div>
                <button onClick={() => toggleSection(5)} className="w-full">
                  <div className="p-4 w-full bg-white rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 flex-shrink-0">
                        <Image src="/icons/learning.png" alt="Learning" width={24} height={24} />
                      </div>
                      <div className="flex-1">
                        <div className="text-xs text-[#666666] mb-0.5">TEST 5</div>
                        <div className="text-[#A855F7] text-[15px] font-medium">Learning Styles</div>
                      </div>
                    </div>
                    {expandedSection === 5 && <div className="absolute top-0 right-0 bottom-0 w-1 bg-[#A855F7] rounded-r-lg"></div>}
                  </div>
                </button>
                {expandedSection === 5 && (
                  <div className="mt-3 ml-[52px] space-y-2.5 pb-4">
                    <Link href="/learning/understanding" className="block hover:bg-gray-50 rounded-lg transition-colors">
                      <div className="text-[15px] text-[#666666] px-3 py-2">Understanding Learning Styles</div>
                    </Link>
                    <Link href="/learning/types" className="block hover:bg-gray-50 rounded-lg transition-colors">
                      <div className="text-[15px] text-[#666666] px-3 py-2">Learning Types</div>
                    </Link>
                    <Link href="/learning/result" className="block hover:bg-gray-50 rounded-lg transition-colors">
                      <div className="text-[15px] text-[#666666] px-3 py-2">Your Result</div>
                    </Link>
                  </div>
                )}
              </div>

              {/* Download Report Card Button */}
              <div className="mt-4">
                <button className="w-full px-4 py-2.5 bg-white border border-[#0046FF] rounded-lg text-[#0046FF] text-[15px] font-medium flex items-center justify-center gap-1 hover:bg-[#0046FF] hover:text-white transition-colors group">
                  Download Report Card
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:stroke-white">
                    <path d="M14 10V12.6667C14 13.0203 13.8595 13.3594 13.6095 13.6095C13.3594 13.8595 13.0203 14 12.6667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V10" stroke="currentColor" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M4.66699 6.66667L8.00033 10L11.3337 6.66667" stroke="currentColor" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 10V2" stroke="currentColor" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 bg-white">
            <div className="space-y-6">
              <h2 className="text-[24px] font-semibold">
                <span className="text-[#0046FF]">Personality Types</span>
              </h2>
              
              {/* Personality Types Grid */}
              <div className="grid grid-cols-4 gap-6">
                {/* Row 1 */}
                <div className="bg-white rounded-2xl overflow-hidden">
                  <div className="aspect-[243/98] bg-[#ECF5FF] flex items-center justify-center">
                    <Image src="/personality/personaloity.png" alt="Inspector" width={243} height={98} className="mx-auto" />
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-[15px] font-medium text-[#1A1A1A]">Inspector</h3>
                      <span className="text-[13px] text-[#666666] bg-[#EBF5FF] px-2 py-0.5 rounded">ISTJ</span>
                    </div>
                    <p className="text-[13px] text-[#666666] leading-[1.4]">Focuses on concrete, tangible information and present realities</p>
                  </div>
                </div>

                <div className="bg-white rounded-2xl overflow-hidden">
                  <div className="aspect-[243/98] bg-[#ECF5FF] flex items-center justify-center">
                    <Image src="/personality/personaloity.png" alt="Protector" width={243} height={98} className="mx-auto" />
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-[15px] font-medium text-[#1A1A1A]">Protector</h3>
                      <span className="text-[13px] text-[#666666] bg-[#EBF5FF] px-2 py-0.5 rounded">ISFJ</span>
                    </div>
                    <p className="text-[13px] text-[#666666] leading-[1.4]">Focuses on concrete, tangible information and present realities</p>
                  </div>
                </div>

                <div className="bg-white rounded-2xl overflow-hidden">
                  <div className="aspect-[243/98] bg-[#ECF5FF] flex items-center justify-center">
                    <Image src="/personality/personaloity.png" alt="Artist" width={243} height={98} className="mx-auto" />
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-[15px] font-medium text-[#1A1A1A]">Artist</h3>
                      <span className="text-[13px] text-[#666666] bg-[#EBF5FF] px-2 py-0.5 rounded">ISFP</span>
                    </div>
                    <p className="text-[13px] text-[#666666] leading-[1.4]">Focuses on concrete, tangible information and present realities</p>
                  </div>
                </div>

                <div className="bg-white rounded-2xl overflow-hidden">
                  <div className="aspect-[243/98] bg-[#ECF5FF] flex items-center justify-center">
                    <Image src="/personality/personaloity.png" alt="Consul" width={243} height={98} className="mx-auto" />
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-[15px] font-medium text-[#1A1A1A]">Consul</h3>
                      <span className="text-[13px] text-[#666666] bg-[#EBF5FF] px-2 py-0.5 rounded">ESFJ</span>
                    </div>
                    <p className="text-[13px] text-[#666666] leading-[1.4]">Focuses on concrete, tangible information and present realities</p>
                  </div>
                </div>

                {/* Row 2 */}
                <div className="bg-white rounded-2xl overflow-hidden">
                  <div className="aspect-[243/98] bg-[#ECF5FF] flex items-center justify-center">
                    <Image src="/personality/personaloity.png" alt="Virtuoso" width={243} height={98} className="mx-auto" />
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-[15px] font-medium text-[#1A1A1A]">Virtuoso</h3>
                      <span className="text-[13px] text-[#666666] bg-[#EBF5FF] px-2 py-0.5 rounded">ISTP</span>
                    </div>
                    <p className="text-[13px] text-[#666666] leading-[1.4]">Focuses on concrete, tangible information and present realities</p>
                  </div>
                </div>

                <div className="bg-white rounded-2xl overflow-hidden">
                  <div className="aspect-[243/98] bg-[#ECF5FF] flex items-center justify-center">
                    <Image src="/personality/personaloity.png" alt="Entrepreneur" width={243} height={98} className="mx-auto" />
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-[15px] font-medium text-[#1A1A1A]">Entrepreneur</h3>
                      <span className="text-[13px] text-[#666666] bg-[#EBF5FF] px-2 py-0.5 rounded">ESTP</span>
                    </div>
                    <p className="text-[13px] text-[#666666] leading-[1.4]">Focuses on concrete, tangible information and present realities</p>
                  </div>
                </div>

                <div className="bg-white rounded-2xl overflow-hidden">
                  <div className="aspect-[243/98] bg-[#ECF5FF] flex items-center justify-center">
                    <Image src="/personality/personaloity.png" alt="Entertainer" width={243} height={98} className="mx-auto" />
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-[15px] font-medium text-[#1A1A1A]">Entertainer</h3>
                      <span className="text-[13px] text-[#666666] bg-[#EBF5FF] px-2 py-0.5 rounded">ESFP</span>
                    </div>
                    <p className="text-[13px] text-[#666666] leading-[1.4]">Focuses on concrete, tangible information and present realities</p>
                  </div>
                </div>

                <div className="bg-white rounded-2xl overflow-hidden">
                  <div className="aspect-[243/98] bg-[#ECF5FF] flex items-center justify-center">
                    <Image src="/personality/personaloity.png" alt="Executive" width={243} height={98} className="mx-auto" />
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-[15px] font-medium text-[#1A1A1A]">Executive</h3>
                      <span className="text-[13px] text-[#666666] bg-[#EBF5FF] px-2 py-0.5 rounded">ESTJ</span>
                    </div>
                    <p className="text-[13px] text-[#666666] leading-[1.4]">Focuses on concrete, tangible information and present realities</p>
                  </div>
                </div>

                {/* Row 3 */}
                <div className="bg-white rounded-2xl overflow-hidden">
                  <div className="aspect-[243/98] bg-[#ECF5FF] flex items-center justify-center">
                    <Image src="/personality/personaloity.png" alt="Advocate" width={243} height={98} className="mx-auto" />
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-[15px] font-medium text-[#1A1A1A]">Advocate</h3>
                      <span className="text-[13px] text-[#666666] bg-[#EBF5FF] px-2 py-0.5 rounded">INFJ</span>
                    </div>
                    <p className="text-[13px] text-[#666666] leading-[1.4]">Focuses on concrete, tangible information and present realities</p>
                  </div>
                </div>

                <div className="bg-white rounded-2xl overflow-hidden">
                  <div className="aspect-[243/98] bg-[#ECF5FF] flex items-center justify-center">
                    <Image src="/personality/personaloity.png" alt="Mediator" width={243} height={98} className="mx-auto" />
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-[15px] font-medium text-[#1A1A1A]">Mediator</h3>
                      <span className="text-[13px] text-[#666666] bg-[#EBF5FF] px-2 py-0.5 rounded">INFP</span>
                    </div>
                    <p className="text-[13px] text-[#666666] leading-[1.4]">Focuses on concrete, tangible information and present realities</p>
                  </div>
                </div>

                <div className="bg-white rounded-2xl overflow-hidden">
                  <div className="aspect-[243/98] bg-[#ECF5FF] flex items-center justify-center">
                    <Image src="/personality/personaloity.png" alt="Campaigner" width={243} height={98} className="mx-auto" />
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-[15px] font-medium text-[#1A1A1A]">Campaigner</h3>
                      <span className="text-[13px] text-[#666666] bg-[#EBF5FF] px-2 py-0.5 rounded">ENFP</span>
                    </div>
                    <p className="text-[13px] text-[#666666] leading-[1.4]">Focuses on concrete, tangible information and present realities</p>
                  </div>
                </div>

                <div className="bg-white rounded-2xl overflow-hidden">
                  <div className="aspect-[243/98] bg-[#ECF5FF] flex items-center justify-center">
                    <Image src="/personality/personaloity.png" alt="Protagonist" width={243} height={98} className="mx-auto" />
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-[15px] font-medium text-[#1A1A1A]">Protagonist</h3>
                      <span className="text-[13px] text-[#666666] bg-[#EBF5FF] px-2 py-0.5 rounded">ENFJ</span>
                    </div>
                    <p className="text-[13px] text-[#666666] leading-[1.4]">Focuses on concrete, tangible information and present realities</p>
                  </div>
                </div>

                {/* Row 4 */}
                <div className="bg-white rounded-2xl overflow-hidden">
                  <div className="aspect-[243/98] bg-[#ECF5FF] flex items-center justify-center">
                    <Image src="/personality/personaloity.png" alt="Architect" width={243} height={98} className="mx-auto" />
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-[15px] font-medium text-[#1A1A1A]">Architect</h3>
                      <span className="text-[13px] text-[#666666] bg-[#EBF5FF] px-2 py-0.5 rounded">INTJ</span>
                    </div>
                    <p className="text-[13px] text-[#666666] leading-[1.4]">Focuses on concrete, tangible information and present realities</p>
                  </div>
                </div>

                <div className="bg-white rounded-2xl overflow-hidden">
                  <div className="aspect-[243/98] bg-[#ECF5FF] flex items-center justify-center">
                    <Image src="/personality/personaloity.png" alt="Thinker" width={243} height={98} className="mx-auto" />
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-[15px] font-medium text-[#1A1A1A]">Thinker</h3>
                      <span className="text-[13px] text-[#666666] bg-[#EBF5FF] px-2 py-0.5 rounded">INTP</span>
                    </div>
                    <p className="text-[13px] text-[#666666] leading-[1.4]">Focuses on concrete, tangible information and present realities</p>
                  </div>
                </div>

                <div className="bg-white rounded-2xl overflow-hidden">
                  <div className="aspect-[243/98] bg-[#ECF5FF] flex items-center justify-center">
                    <Image src="/personality/personaloity.png" alt="Debater" width={243} height={98} className="mx-auto" />
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-[15px] font-medium text-[#1A1A1A]">Debater</h3>
                      <span className="text-[13px] text-[#666666] bg-[#EBF5FF] px-2 py-0.5 rounded">ENTP</span>
                    </div>
                    <p className="text-[13px] text-[#666666] leading-[1.4]">Focuses on concrete, tangible information and present realities</p>
                  </div>
                </div>

                <div className="bg-white rounded-2xl overflow-hidden">
                  <div className="aspect-[243/98] bg-[#ECF5FF] flex items-center justify-center">
                    <Image src="/personality/personaloity.png" alt="Commander" width={243} height={98} className="mx-auto" />
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-[15px] font-medium text-[#1A1A1A]">Commander</h3>
                      <span className="text-[13px] text-[#666666] bg-[#EBF5FF] px-2 py-0.5 rounded">ENTJ</span>
                    </div>
                    <p className="text-[13px] text-[#666666] leading-[1.4]">Focuses on concrete, tangible information and present realities</p>
                  </div>
                </div>
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