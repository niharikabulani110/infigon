/**
 * Header component that displays the main title and career counselor section
 */
export const Header = () => {
  return (
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
  );
}; 