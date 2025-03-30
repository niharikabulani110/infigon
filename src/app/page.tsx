import Image from "next/image";
import Link from 'next/link';

export default function Home() {
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
                <div className="relative p-4 bg-white rounded-lg shadow-[0px_1px_3px_rgba(0,0,0,0.1)] cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 flex-shrink-0">
                      <Image src="/images/icons/brain.png" alt="Personality" width={24} height={24} />
                    </div>
                    <div>
                      <div className="text-xs text-[#666666] mb-0.5">TEST 1</div>
                      <div className="text-[#0046FF] text-[15px] font-medium">Personality Explorer</div>
                    </div>
                  </div>
                  <div className="absolute top-0 right-0 bottom-0 w-1 bg-[#0046FF] rounded-r-lg"></div>
                </div>
                <div className="mt-3 ml-[52px] space-y-2.5 pb-4">
                  <div className="text-[15px] text-[#1A1A1A] font-medium">Understanding Personality Explorer</div>
                  <Link href="/personality-types" prefetch={true} className="block">
                    <div className="text-[15px] text-[#666666] hover:text-[#0046FF]">Personality Types</div>
                  </Link>
                  <Link href="/your-result" prefetch={true} className="block">
                    <div className="text-[15px] text-[#666666] hover:text-[#0046FF]">Your Result</div>
                  </Link>
                </div>
              </div>

              <div className="h-[1px] bg-[#E5E7EB]"></div>

              {/* Test 2 - Interest Explorer */}
              <div className="p-4 bg-white rounded-lg cursor-pointer">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 flex-shrink-0">
                    <Image src="/images/icons/interest.png" alt="Interest" width={24} height={24} />
                  </div>
                  <div>
                    <div className="text-xs text-[#666666] mb-0.5">TEST 2</div>
                    <div className="text-[#22C55E] text-sm font-medium">Interest Explorer</div>
                  </div>
                </div>
              </div>

              <div className="h-[1px] bg-[#E5E7EB]"></div>

              {/* Test 3 - Career Motivators */}
              <div className="p-4 bg-white rounded-lg cursor-pointer">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 flex-shrink-0">
                    <Image src="/career-icon.png" alt="Career" width={24} height={24} />
                  </div>
                  <div>
                    <div className="text-xs text-[#666666] mb-0.5">TEST 3</div>
                    <div className="text-[#F59E0B] text-sm font-medium">Career Motivators</div>
                  </div>
                </div>
              </div>

              <div className="h-[1px] bg-[#E5E7EB]"></div>

              {/* Test 4 - Emotional Intelligence */}
              <div className="p-4 bg-white rounded-lg cursor-pointer">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 flex-shrink-0">
                    <Image src="/emotional-icon.png" alt="Emotional" width={24} height={24} />
                  </div>
                  <div>
                    <div className="text-xs text-[#666666] mb-0.5">TEST 4</div>
                    <div className="text-[#3B82F6] text-sm font-medium">Emotional Intelligence</div>
                  </div>
                </div>
              </div>

              <div className="h-[1px] bg-[#E5E7EB]"></div>

              {/* Test 5 - Learning Styles */}
              <div className="p-4 bg-white rounded-lg cursor-pointer">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 flex-shrink-0">
                    <Image src="/learning-icon.png" alt="Learning" width={24} height={24} />
                  </div>
                  <div>
                    <div className="text-xs text-[#666666] mb-0.5">TEST 5</div>
                    <div className="text-[#A855F7] text-sm font-medium">Learning Styles</div>
                  </div>
                </div>
              </div>

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
            <div className="space-y-6">
              <h2 className="text-[24px] font-semibold">
                <span className="text-[#0046FF]">Understanding </span>
                <span className="text-[#0046FF]">Personality Types</span>
              </h2>
              
              <div>
                <h3 className="text-[17px] font-semibold text-[#1A1A1A] mb-3">Introduction</h3>
                <p className="text-[15px] text-[#666666] leading-[1.6]">
                  Congratulations on taking the first step for personalized Career Planning & Assessment! We understand the significance of making informed decisions as you navigate your academic journey and future career. We are committed to empowering individuals with the tools and insights needed to confidently navigate the world of careers and education.
                </p>
              </div>

              <div>
                <p className="text-[15px] text-[#666666] leading-[1.6]">
                  <span className="font-medium text-[#1A1A1A]">To understand your personality Myers-Brigg Type Indicator (MBTI) test was used.</span> It is a personality explorer psychometric assessment tool that helps individuals understand their preferences, strengths, and areas for growth. Developed by Isabel Briggs Myers and Katharine Cook Briggs, the MBTI categorizes individuals into 16 personality types based on four dichotomies. The goal is to gain deeper self-awareness, enhance personal development, and improve interpersonal relationships.
                </p>
              </div>

              <div>
                <h3 className="text-[15px] font-semibold text-[#0046FF] mb-6">THE FOUR DICHOTOMIES</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="bg-white rounded-lg border border-[#E5E7EB] p-4 w-[280px]">
                      <div className="text-[15px] font-medium text-[#1A1A1A]">Extraversion (E)</div>
                      <div className="text-[13px] text-[#666666] mt-1">Energized by social interactions and external activities</div>
                    </div>

                    <div className="w-48 h-1 bg-[#E5E7EB] rounded-full relative mx-4">
                      <div className="absolute left-0 w-2 h-2 -top-0.5 bg-[#22C55E] rounded-full"></div>
                      <div className="absolute right-0 w-2 h-2 -top-0.5 bg-[#EF4444] rounded-full"></div>
                      <div className="absolute h-0.5 left-[10px] right-[10px] top-0 bg-gradient-to-r from-[#22C55E] to-[#EF4444]"></div>
                    </div>

                    <div className="bg-white rounded-lg border border-[#E5E7EB] p-4 w-[280px]">
                      <div className="text-[15px] font-medium text-[#1A1A1A]">Introversion (I)</div>
                      <div className="text-[13px] text-[#666666] mt-1">Energized by solitary activities and internal reflection</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="bg-white rounded-lg border border-[#E5E7EB] p-4 w-[280px]">
                      <div className="text-[15px] font-medium text-[#1A1A1A]">Sensing (S)</div>
                      <div className="text-[13px] text-[#666666] mt-1">Focuses on concrete, tangible information and present realities</div>
                    </div>

                    <div className="w-48 h-1 bg-[#E5E7EB] rounded-full relative mx-4">
                      <div className="absolute left-0 w-2 h-2 -top-0.5 bg-[#22C55E] rounded-full"></div>
                      <div className="absolute right-0 w-2 h-2 -top-0.5 bg-[#EF4444] rounded-full"></div>
                      <div className="absolute h-0.5 left-[10px] right-[10px] top-0 bg-gradient-to-r from-[#22C55E] to-[#EF4444]"></div>
                    </div>

                    <div className="bg-white rounded-lg border border-[#E5E7EB] p-4 w-[280px]">
                      <div className="text-[15px] font-medium text-[#1A1A1A]">Intuition (N)</div>
                      <div className="text-[13px] text-[#666666] mt-1">Focuses on abstract, conceptual information and future possibilities</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="bg-white rounded-lg border border-[#E5E7EB] p-4 w-[280px]">
                      <div className="text-[15px] font-medium text-[#1A1A1A]">Thinking (T)</div>
                      <div className="text-[13px] text-[#666666] mt-1">Decisions based on logic and objective analysis</div>
                    </div>

                    <div className="w-48 h-1 bg-[#E5E7EB] rounded-full relative mx-4">
                      <div className="absolute left-0 w-2 h-2 -top-0.5 bg-[#22C55E] rounded-full"></div>
                      <div className="absolute right-0 w-2 h-2 -top-0.5 bg-[#EF4444] rounded-full"></div>
                      <div className="absolute h-0.5 left-[10px] right-[10px] top-0 bg-gradient-to-r from-[#22C55E] to-[#EF4444]"></div>
                    </div>

                    <div className="bg-white rounded-lg border border-[#E5E7EB] p-4 w-[280px]">
                      <div className="text-[15px] font-medium text-[#1A1A1A]">Feeling (F)</div>
                      <div className="text-[13px] text-[#666666] mt-1">Decisions based on logic and objective analysis</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="bg-white rounded-lg border border-[#E5E7EB] p-4 w-[280px]">
                      <div className="text-[15px] font-medium text-[#1A1A1A]">Judging (J)</div>
                      <div className="text-[13px] text-[#666666] mt-1">Prefers structured, organized approaches and planning</div>
                    </div>

                    <div className="w-48 h-1 bg-[#E5E7EB] rounded-full relative mx-4">
                      <div className="absolute left-0 w-2 h-2 -top-0.5 bg-[#22C55E] rounded-full"></div>
                      <div className="absolute right-0 w-2 h-2 -top-0.5 bg-[#EF4444] rounded-full"></div>
                      <div className="absolute h-0.5 left-[10px] right-[10px] top-0 bg-gradient-to-r from-[#22C55E] to-[#EF4444]"></div>
                    </div>

                    <div className="bg-white rounded-lg border border-[#E5E7EB] p-4 w-[280px]">
                      <div className="text-[15px] font-medium text-[#1A1A1A]">Perceiving (P)</div>
                      <div className="text-[13px] text-[#666666] mt-1">Prefers flexible, spontaneous approaches and adaptability</div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-[17px] font-semibold text-[#0046FF] mb-6">Purpose, Applications, and Benefits of MBTI in Career Development</h3>
                <div className="grid grid-cols-3 gap-4">
                  {/* Row 1 */}
                  <div className="bg-[#F3F4F6] rounded-xl p-4">
                    <h4 className="text-[15px] font-medium text-[#1A1A1A] mb-2">Self Awareness</h4>
                    <p className="text-[13px] text-[#666666] leading-[1.6]">Focuses on concrete, tangible information and present realities tangible information and present realities</p>
                  </div>
                  <div className="bg-[#F3F4F6] rounded-xl p-4">
                    <h4 className="text-[15px] font-medium text-[#1A1A1A] mb-2">Leadership Development</h4>
                    <p className="text-[13px] text-[#666666] leading-[1.6]">Focuses on concrete, tangible information and present realities tangible information and present realities</p>
                  </div>
                  <div className="bg-[#F3F4F6] rounded-xl p-4">
                    <h4 className="text-[15px] font-medium text-[#1A1A1A] mb-2">Career Alignment</h4>
                    <p className="text-[13px] text-[#666666] leading-[1.6]">Focuses on concrete, tangible information and present realities tangible information and present realities</p>
                  </div>

                  {/* Row 2 */}
                  <div className="bg-[#F3F4F6] rounded-xl p-4">
                    <h4 className="text-[15px] font-medium text-[#1A1A1A] mb-2">Career Planning</h4>
                    <p className="text-[13px] text-[#666666] leading-[1.6]">Focuses on concrete, tangible information and present realities tangible information and present realities</p>
                  </div>
                  <div className="bg-[#F3F4F6] rounded-xl p-4">
                    <h4 className="text-[15px] font-medium text-[#1A1A1A] mb-2">Team Building</h4>
                    <p className="text-[13px] text-[#666666] leading-[1.6]">Focuses on concrete, tangible information and present realities tangible information and present realities</p>
                  </div>
                  <div className="bg-[#F3F4F6] rounded-xl p-4">
                    <h4 className="text-[15px] font-medium text-[#1A1A1A] mb-2">Conflict Resolution</h4>
                    <p className="text-[13px] text-[#666666] leading-[1.6]">Focuses on concrete, tangible information and present realities tangible information and present realities</p>
                  </div>

                  {/* Row 3 */}
                  <div className="bg-[#F3F4F6] rounded-xl p-4">
                    <h4 className="text-[15px] font-medium text-[#1A1A1A] mb-2">Improved Communication</h4>
                    <p className="text-[13px] text-[#666666] leading-[1.6]">Focuses on concrete, tangible information and present realities tangible information and present realities</p>
                  </div>
                  <div className="bg-[#F3F4F6] rounded-xl p-4">
                    <h4 className="text-[15px] font-medium text-[#1A1A1A] mb-2">Strength Identification</h4>
                    <p className="text-[13px] text-[#666666] leading-[1.6]">Focuses on concrete, tangible information and present realities tangible information and present realities</p>
                  </div>
                  <div className="bg-[#F3F4F6] rounded-xl p-4">
                    <h4 className="text-[15px] font-medium text-[#1A1A1A] mb-2">Personal Growth</h4>
                    <p className="text-[13px] text-[#666666] leading-[1.6]">Focuses on concrete, tangible information and present realities tangible information and present realities</p>
                  </div>
                </div>
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
        </div>
      </div>
    </main>
  );
}
