import Image from 'next/image';
import { PersonalityType } from '@/constants/personality';

interface PersonalityTypeCardProps {
  type: PersonalityType;
}

/**
 * A card component that displays information about a personality type
 * @param type - The personality type data to display
 */
export const PersonalityTypeCard = ({ type }: PersonalityTypeCardProps) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden">
      <div className="aspect-[243/98] bg-[#ECF5FF] flex items-center justify-center">
        <Image 
          src={type.image} 
          alt={`${type.name} personality type illustration`}
          width={243} 
          height={98} 
          className="mx-auto"
        />
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-[15px] font-medium text-[#1A1A1A]">{type.name}</h3>
          <span className="text-[13px] text-[#666666] bg-[#EBF5FF] px-2 py-0.5 rounded">{type.code}</span>
        </div>
        <p className="text-[13px] text-[#666666] leading-[1.4]">{type.description}</p>
      </div>
    </div>
  );
}; 