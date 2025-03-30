export default function UnderstandingPage() {
  return (
    <div className="bg-white">
      <h2 className="text-[24px] font-semibold mb-8 bg-white">
        <span className="text-[#0046FF]">Personality Explorer</span>
      </h2>

      <div className="space-y-8 bg-white">
        <div className="bg-white">
          <h3 className="text-[17px] font-semibold text-[#1A1A1A] mb-3">Introduction</h3>
          <p className="text-[15px] text-[#666666] leading-[1.6]">
            Congratulations on taking the first step for personalized Career Planning & Assessment! We understand the significance of making informed decisions as you navigate your academic journey and future career. We are committed to empowering individuals with the tools and insights needed to confidently navigate the world of careers and education.
          </p>
        </div>

        <div className="bg-white">
          <p className="text-[15px] text-[#666666] leading-[1.6]">
            <span className="font-medium text-[#1A1A1A]">To understand your personality Myers-Brigg Type Indicator (MBTI) test was used.</span> It is a personality explorer psychometric assessment tool that helps individuals understand their preferences, strengths, and areas for growth. Developed by Isabel Briggs Myers and Katharine Cook Briggs, the MBTI categorizes individuals into 16 personality types based on four dichotomies. The goal is to gain deeper self-awareness, enhance personal development, and improve interpersonal relationships.
          </p>
        </div>

        <div className="bg-white">
          <h3 className="text-[15px] font-semibold text-[#0046FF] mb-6">THE FOUR DICHOTOMIES</h3>
          <div className="space-y-4 bg-white">
            {/* Extraversion vs Introversion */}
            <div className="flex items-center justify-between bg-white">
              <div className="bg-white rounded-lg border border-[#E5E7EB] p-4 w-[280px]">
                <div className="text-[15px] font-medium text-[#1A1A1A]">Extraversion (E)</div>
                <div className="text-[13px] text-[#666666] mt-1">Energized by social interactions and external activities</div>
              </div>

              <div className="w-48 h-1 bg-white rounded-full relative mx-4">
                <div className="absolute left-0 w-2 h-2 -top-0.5 bg-[#22C55E] rounded-full"></div>
                <div className="absolute right-0 w-2 h-2 -top-0.5 bg-[#EF4444] rounded-full"></div>
                <div className="absolute h-0.5 left-[10px] right-[10px] top-0 bg-gradient-to-r from-[#22C55E] to-[#EF4444]"></div>
              </div>

              <div className="bg-white rounded-lg border border-[#E5E7EB] p-4 w-[280px]">
                <div className="text-[15px] font-medium text-[#1A1A1A]">Introversion (I)</div>
                <div className="text-[13px] text-[#666666] mt-1">Energized by solitary activities and internal reflection</div>
              </div>
            </div>

            {/* Sensing vs Intuition */}
            <div className="flex items-center justify-between bg-white">
              <div className="bg-white rounded-lg border border-[#E5E7EB] p-4 w-[280px]">
                <div className="text-[15px] font-medium text-[#1A1A1A]">Sensing (S)</div>
                <div className="text-[13px] text-[#666666] mt-1">Focuses on concrete, tangible information and present realities</div>
              </div>

              <div className="w-48 h-1 bg-white rounded-full relative mx-4">
                <div className="absolute left-0 w-2 h-2 -top-0.5 bg-[#22C55E] rounded-full"></div>
                <div className="absolute right-0 w-2 h-2 -top-0.5 bg-[#EF4444] rounded-full"></div>
                <div className="absolute h-0.5 left-[10px] right-[10px] top-0 bg-gradient-to-r from-[#22C55E] to-[#EF4444]"></div>
              </div>

              <div className="bg-white rounded-lg border border-[#E5E7EB] p-4 w-[280px]">
                <div className="text-[15px] font-medium text-[#1A1A1A]">Intuition (N)</div>
                <div className="text-[13px] text-[#666666] mt-1">Focuses on abstract, conceptual information and future possibilities</div>
              </div>
            </div>

            {/* Thinking vs Feeling */}
            <div className="flex items-center justify-between bg-white">
              <div className="bg-white rounded-lg border border-[#E5E7EB] p-4 w-[280px]">
                <div className="text-[15px] font-medium text-[#1A1A1A]">Thinking (T)</div>
                <div className="text-[13px] text-[#666666] mt-1">Decisions based on logic and objective analysis</div>
              </div>

              <div className="w-48 h-1 bg-white rounded-full relative mx-4">
                <div className="absolute left-0 w-2 h-2 -top-0.5 bg-[#22C55E] rounded-full"></div>
                <div className="absolute right-0 w-2 h-2 -top-0.5 bg-[#EF4444] rounded-full"></div>
                <div className="absolute h-0.5 left-[10px] right-[10px] top-0 bg-gradient-to-r from-[#22C55E] to-[#EF4444]"></div>
              </div>

              <div className="bg-white rounded-lg border border-[#E5E7EB] p-4 w-[280px]">
                <div className="text-[15px] font-medium text-[#1A1A1A]">Feeling (F)</div>
                <div className="text-[13px] text-[#666666] mt-1">Decisions based on values and people-centered concerns</div>
              </div>
            </div>

            {/* Judging vs Perceiving */}
            <div className="flex items-center justify-between bg-white">
              <div className="bg-white rounded-lg border border-[#E5E7EB] p-4 w-[280px]">
                <div className="text-[15px] font-medium text-[#1A1A1A]">Judging (J)</div>
                <div className="text-[13px] text-[#666666] mt-1">Prefers structured, organized approaches and planning</div>
              </div>

              <div className="w-48 h-1 bg-white rounded-full relative mx-4">
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

        <div className="bg-white">
          <h3 className="text-[17px] font-semibold text-[#0046FF] mb-6">Purpose, Applications, and Benefits of MBTI in Career Development</h3>
          <div className="grid grid-cols-3 gap-4 bg-white">
            {/* Row 1 */}
            <div className="bg-white rounded-xl p-4 border border-[#E5E7EB]">
              <h4 className="text-[15px] font-medium text-[#1A1A1A] mb-2">Self Awareness</h4>
              <p className="text-[13px] text-[#666666] leading-[1.6]">Focuses on concrete, tangible information and present realities tangible information and present realities</p>
            </div>
            <div className="bg-white rounded-xl p-4 border border-[#E5E7EB]">
              <h4 className="text-[15px] font-medium text-[#1A1A1A] mb-2">Leadership Development</h4>
              <p className="text-[13px] text-[#666666] leading-[1.6]">Focuses on concrete, tangible information and present realities tangible information and present realities</p>
            </div>
            <div className="bg-white rounded-xl p-4 border border-[#E5E7EB]">
              <h4 className="text-[15px] font-medium text-[#1A1A1A] mb-2">Career Alignment</h4>
              <p className="text-[13px] text-[#666666] leading-[1.6]">Focuses on concrete, tangible information and present realities tangible information and present realities</p>
            </div>

            {/* Row 2 */}
            <div className="bg-white rounded-xl p-4 border border-[#E5E7EB]">
              <h4 className="text-[15px] font-medium text-[#1A1A1A] mb-2">Career Planning</h4>
              <p className="text-[13px] text-[#666666] leading-[1.6]">Focuses on concrete, tangible information and present realities tangible information and present realities</p>
            </div>
            <div className="bg-white rounded-xl p-4 border border-[#E5E7EB]">
              <h4 className="text-[15px] font-medium text-[#1A1A1A] mb-2">Team Building</h4>
              <p className="text-[13px] text-[#666666] leading-[1.6]">Focuses on concrete, tangible information and present realities tangible information and present realities</p>
            </div>
            <div className="bg-white rounded-xl p-4 border border-[#E5E7EB]">
              <h4 className="text-[15px] font-medium text-[#1A1A1A] mb-2">Conflict Resolution</h4>
              <p className="text-[13px] text-[#666666] leading-[1.6]">Focuses on concrete, tangible information and present realities tangible information and present realities</p>
            </div>

            {/* Row 3 */}
            <div className="bg-white rounded-xl p-4 border border-[#E5E7EB]">
              <h4 className="text-[15px] font-medium text-[#1A1A1A] mb-2">Improved Communication</h4>
              <p className="text-[13px] text-[#666666] leading-[1.6]">Focuses on concrete, tangible information and present realities tangible information and present realities</p>
            </div>
            <div className="bg-white rounded-xl p-4 border border-[#E5E7EB]">
              <h4 className="text-[15px] font-medium text-[#1A1A1A] mb-2">Strength Identification</h4>
              <p className="text-[13px] text-[#666666] leading-[1.6]">Focuses on concrete, tangible information and present realities tangible information and present realities</p>
            </div>
            <div className="bg-white rounded-xl p-4 border border-[#E5E7EB]">
              <h4 className="text-[15px] font-medium text-[#1A1A1A] mb-2">Personal Growth</h4>
              <p className="text-[13px] text-[#666666] leading-[1.6]">Focuses on concrete, tangible information and present realities tangible information and present realities</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 