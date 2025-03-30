"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

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

export default function SideNavigation() {
  const pathname = usePathname();

  return (
    <nav className="w-[280px] bg-white">
      <div className="space-y-2">
        {tests.map((test, index) => {
          const isActive = pathname.startsWith(test.path);
          
          return (
            <div key={test.id} className="bg-white">
              <Link 
                href={test.path}
                className={`block p-4 rounded-lg bg-white ${isActive ? 'shadow-[0px_1px_3px_rgba(0,0,0,0.1)]' : ''}`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 flex-shrink-0 bg-white">
                    {test.icon}
                  </div>
                  <div className="bg-white">
                    <div className="text-[13px] text-[#6B7280] mb-0.5">TEST {test.id}</div>
                    <div className="text-[15px] font-medium" style={{ color: test.color }}>{test.name}</div>
                  </div>
                </div>
                {isActive && (
                  <div className="absolute top-0 right-0 bottom-0 w-1 rounded-r-lg" style={{ backgroundColor: test.color }}></div>
                )}
              </Link>

              {isActive && test.subItems && (
                <div className="mt-2 ml-[52px] space-y-1 bg-white">
                  {test.subItems.map((item, i) => {
                    const isSubItemActive = pathname === item.path;
                    return (
                      <Link 
                        key={i}
                        href={item.path}
                        className={`block py-2 px-3 rounded-md bg-white ${
                          isSubItemActive 
                            ? "text-[#1F2937] font-medium" 
                            : "text-[#6B7280] hover:text-[#1F2937]"
                        }`}
                      >
                        {item.name}
                      </Link>
                    );
                  })}
                </div>
              )}

              {index < tests.length - 1 && (
                <div className="h-[1px] bg-[#E5E7EB] my-3" />
              )}
            </div>
          );
        })}

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
    </nav>
  );
} 