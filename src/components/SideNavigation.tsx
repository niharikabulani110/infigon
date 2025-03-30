"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from "next/image";

const tests = [
  {
    id: 1,
    name: "Personality Explorer",
    color: "#0046FF",
    path: "/personality-test",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.5 14C14.7 14.5 13.9 15.5 13.9 16.5C13.9 17.1 14.1 17.6 14.3 18M8.5 14C9.3 14.5 10.1 15.5 10.1 16.5C10.1 17.1 9.9 17.6 9.7 18M12 16.5V18M12 8C13.1046 8 14 7.10457 14 6C14 4.89543 13.1046 4 12 4C10.8954 4 10 4.89543 10 6C10 7.10457 10.8954 8 12 8ZM21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12ZM7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12Z" stroke="#0046FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    subItems: [
      {
        name: "Understanding Personality Explorer",
        path: "/personality-test/understanding"
      },
      {
        name: "Personality Types",
        path: "/personality-test/personality-types"
      },
      {
        name: "Your Result",
        path: "/personality-test/result"
      }
    ]
  },
  {
    id: 2,
    name: "Interest Explorer",
    color: "#22C55E",
    path: "/interest-test",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="4" width="16" height="16" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 7L14 11.5L19 12L15.5 15.5L16.5 20L12 18L7.5 20L8.5 15.5L5 12L10 11.5L12 7Z" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    id: 3,
    name: "Career Motivators",
    color: "#F59E0B",
    path: "/career-test",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 6H20V18H4V6Z" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8 6V4H16V6" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M6 10H18" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    id: 4,
    name: "Emotional Intelligence",
    color: "#3B82F6",
    path: "/emotional-test",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M15 9C14.5 8.5 13.5 8 12 8" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    id: 5,
    name: "Learning Styles",
    color: "#A855F7",
    path: "/learning-test",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 4H20V20H4V4Z" stroke="#A855F7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M4 12H20" stroke="#A855F7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 4V20" stroke="#A855F7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  }
];

interface SideNavigationProps {
  expandedSection: number;
  toggleSection: (sectionNumber: number) => void;
}

export const SideNavigation = ({ expandedSection, toggleSection }: SideNavigationProps) => {
  const pathname = usePathname();

  return (
    <aside className="w-[280px] bg-white">
      <div className="space-y-2">
        {/* Test 1 - Personality Explorer */}
        <div>
          <button 
            onClick={() => toggleSection(1)} 
            className="w-full"
            aria-expanded={expandedSection === 1}
            aria-controls="section-1"
          >
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
          <button 
            onClick={() => toggleSection(2)} 
            className="w-full"
            aria-expanded={expandedSection === 2}
            aria-controls="section-2"
          >
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
          <button 
            onClick={() => toggleSection(3)} 
            className="w-full"
            aria-expanded={expandedSection === 3}
            aria-controls="section-3"
          >
            <div className="p-4 w-full bg-white rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 flex-shrink-0">
                  <Image src="/icons/career-icon.png" alt="Career" width={24} height={24} />
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
          <button 
            onClick={() => toggleSection(4)} 
            className="w-full"
            aria-expanded={expandedSection === 4}
            aria-controls="section-4"
          >
            <div className="p-4 w-full bg-white rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 flex-shrink-0">
                  <Image src="/icons/emotional-icon.png" alt="Emotional" width={24} height={24} />
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
          <button 
            onClick={() => toggleSection(5)} 
            className="w-full"
            aria-expanded={expandedSection === 5}
            aria-controls="section-5"
          >
            <div className="p-4 w-full bg-white rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 flex-shrink-0">
                  <Image src="/icons/learning-icon.png" alt="Learning" width={24} height={24} />
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
  );
}; 