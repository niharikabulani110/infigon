import Image from "next/image";
import Navigation from '@/components/Navigation';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <div className="max-w-7xl mx-auto px-8">
        {/* Header Section */}
        <div className="flex justify-between items-start py-8">
          <div>
            <h1 className="text-[28px] font-semibold text-[#1A1A1A] leading-tight">Your Career Analysis Report</h1>
            <p className="mt-2 text-[#666666] text-[15px]">Your Report ensures a complete understanding of your strengths, areas for growth, and ideal career fit.</p>
          </div>
          
          <div className="bg-white rounded-lg border border-[#E5E7EB] p-4 min-w-[320px]">
            <div className="flex justify-between items-start gap-4">
              <div>
                <h2 className="text-[17px] font-semibold text-[#1A1A1A]">Want To Speak To An Expert Career Counsellor?</h2>
                <p className="mt-1 text-[15px] text-[#666666]">Explore a list of 1000+ Expert Career Counsellors near you!</p>
              </div>
              <button className="shrink-0 px-3 py-1 text-sm font-medium text-[#4A4A4A] bg-[#F9FAFB] hover:bg-gray-100 rounded">
                See All
              </button>
            </div>
          </div>
        </div>

        {/* Career Options Bar */}
        <div className="border-t border-b border-[#E5E7EB] py-4 mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="flex items-center">
                <span className="text-[17px] text-[#666666]">Your</span>
                <span className="text-[17px] font-semibold text-[#0046FF] ml-1">TOP 3</span>
                <span className="text-[17px] text-[#666666] ml-1">Career Options</span>
              </div>
              
              <div className="flex items-center gap-3 ml-6">
                <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F9FAFB] border border-[#E5E7EB]">
                  <span className="w-5 h-5 flex items-center justify-center rounded-full bg-[#666666] text-white text-sm">1</span>
                  <span className="text-[15px] text-[#666666]">Engineer</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F9FAFB] border border-[#E5E7EB]">
                  <span className="w-5 h-5 flex items-center justify-center rounded-full bg-[#666666] text-white text-sm">2</span>
                  <span className="text-[15px] text-[#666666]">Doctor</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F9FAFB] border border-[#E5E7EB]">
                  <span className="w-5 h-5 flex items-center justify-center rounded-full bg-[#666666] text-white text-sm">3</span>
                  <span className="text-[15px] text-[#666666]">Teacher</span>
                </div>
              </div>
            </div>

            <div className="flex items-center">
              <span className="text-[17px] text-[#1A1A1A] mr-4">Choose them right here!</span>
              <button className="px-4 py-2 bg-[#0046FF] text-white rounded text-sm font-medium">
                Your Career Options
              </button>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex gap-16">
          {/* Side Navigation */}
          <div className="w-[280px]">
            <div className="space-y-2">
              {/* Test 1 - Personality Explorer */}
              <div>
                <div className="relative p-4 bg-white rounded-lg shadow-[0px_1px_2px_rgba(0,0,0,0.05)] cursor-pointer group">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 flex-shrink-0">
                      <Image src="/brain-icon.png" alt="Personality" width={24} height={24} className="opacity-80" />
                    </div>
                    <div>
                      <div className="text-xs text-[#666666] mb-0.5">TEST 1</div>
                      <div className="text-[#0046FF] text-sm font-medium">Personality Explorer</div>
                    </div>
                  </div>
                  <div className="absolute top-0 right-0 bottom-0 w-1 bg-[#0046FF] rounded-r-lg"></div>
                </div>
                <div className="mt-3 ml-[52px] space-y-2.5 pb-4">
                  <div className="text-[15px] text-[#1A1A1A] font-medium">Understanding Personality Explorer</div>
                  <div className="text-[15px] text-[#666666]">Personality Types</div>
                  <div className="text-[15px] text-[#666666]">Your Result</div>
                </div>
              </div>

              {/* Test 2 - Interest Explorer */}
              <div className="p-4 bg-white rounded-lg shadow-[0px_1px_3px_rgba(0,0,0,0.1),0px_1px_2px_rgba(0,0,0,0.06)] cursor-pointer">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 flex-shrink-0">
                    <Image src="/interest-icon.png" alt="Interest" width={24} height={24} className="opacity-80" />
                  </div>
                  <div>
                    <div className="text-xs text-[#666666] mb-0.5">TEST 2</div>
                    <div className="text-[#22C55E] text-sm font-medium">Interest Explorer</div>
                  </div>
                </div>
              </div>

              {/* Test 3 - Career Motivators */}
              <div className="p-4 bg-white rounded-lg shadow-[0px_1px_3px_rgba(0,0,0,0.1),0px_1px_2px_rgba(0,0,0,0.06)] cursor-pointer">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 flex-shrink-0">
                    <Image src="/career-icon.png" alt="Career" width={24} height={24} className="opacity-80" />
                  </div>
                  <div>
                    <div className="text-xs text-[#666666] mb-0.5">TEST 3</div>
                    <div className="text-[#F59E0B] text-sm font-medium">Career Motivators</div>
                  </div>
                </div>
              </div>

              {/* Test 4 - Emotional Intelligence */}
              <div className="p-4 bg-white rounded-lg shadow-[0px_1px_3px_rgba(0,0,0,0.1),0px_1px_2px_rgba(0,0,0,0.06)] cursor-pointer">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 flex-shrink-0">
                    <Image src="/emotional-icon.png" alt="Emotional" width={24} height={24} className="opacity-80" />
                  </div>
                  <div>
                    <div className="text-xs text-[#666666] mb-0.5">TEST 4</div>
                    <div className="text-[#3B82F6] text-sm font-medium">Emotional Intelligence</div>
                  </div>
                </div>
              </div>

              {/* Test 5 - Learning Styles */}
              <div className="p-4 bg-white rounded-lg shadow-[0px_1px_3px_rgba(0,0,0,0.1),0px_1px_2px_rgba(0,0,0,0.06)] cursor-pointer">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 flex-shrink-0">
                    <Image src="/learning-icon.png" alt="Learning" width={24} height={24} className="opacity-80" />
                  </div>
                  <div>
                    <div className="text-xs text-[#666666] mb-0.5">TEST 5</div>
                    <div className="text-[#A855F7] text-sm font-medium">Learning Styles</div>
                  </div>
                </div>
              </div>

              {/* Download Report Card Button */}
              <div className="pt-2">
                <button className="w-full px-4 py-2.5 bg-white border border-[#E5E7EB] rounded-lg text-[#0046FF] text-sm font-medium flex items-center justify-center gap-2 hover:bg-gray-50">
                  <span>Download Report Card</span>
                  <Image src="/download-icon.png" alt="Download" width={16} height={16} className="opacity-80" />
                </button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold flex items-center gap-2">
                Understanding <span className="text-[#0046FF]">Personality Explorer</span>
              </h2>
              
              <div>
                <h3 className="text-lg font-medium mb-2">Introduction</h3>
                <p className="text-[#666666] text-[15px] leading-relaxed">
                  Congratulations on taking the first step for personalized Career Planning & Assessment! We understand the significance of making informed decisions as you navigate your academic journey and future career. We are committed to empowering individuals with the tools and insights needed to confidently navigate the world of careers and education.
                </p>
              </div>

              <div>
                <p className="text-[#666666] text-[15px] leading-relaxed">
                  To understand your personality Myers-Brigg Type Indicator (MBTI) test was used. It is a personality explorer psychometric assessment tool that helps individuals understand their preferences, strengths, and areas for growth. Developed by Isabel Briggs Myers and Katharine Cook Briggs, the MBTI categorizes individuals into 16 personality types based on four dichotomies. The goal is to gain deeper self-awareness, enhance personal development, and improve interpersonal relationships.
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
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
