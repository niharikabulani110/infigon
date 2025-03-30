import { COLORS } from '@/constants/personality';

interface CareerOption {
  rank: number;
  title: string;
}

interface CareerOptionsBarProps {
  options: CareerOption[];
}

/**
 * A bar component that displays top career options
 * @param options - Array of career options with their ranks
 */
export const CareerOptionsBar = ({ options }: CareerOptionsBarProps) => {
  return (
    <div className="border-t border-b border-[#E5E7EB] py-4 mb-8 bg-white">
      <div className="flex items-center justify-between bg-white">
        <div className="flex items-center bg-white">
          <div className="flex items-center bg-white">
            <span className="text-[17px] text-[#666666]">Your</span>
            <span className="text-[17px] font-semibold text-[#0046FF] ml-1">TOP 3</span>
            <span className="text-[17px] text-[#666666] ml-1">Career Options</span>
          </div>
          
          <div className="flex items-center gap-3 ml-6 bg-white">
            {options.map((option) => (
              <div key={option.rank} className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#E5E7EB]">
                <span className="w-5 h-5 flex items-center justify-center rounded-full bg-[#666666] text-white text-sm">{option.rank}</span>
                <span className="text-[15px] text-[#666666]">{option.title}</span>
              </div>
            ))}
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
  );
}; 