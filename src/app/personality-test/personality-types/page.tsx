import Image from "next/image";
import Navigation from '@/components/Navigation';
import SideNavigation from '@/components/SideNavigation';

const PLACEHOLDER_IMAGE = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%23F3F4F6'/%3E%3C/svg%3E";

const personalityTypes = [
  {
    name: "Inspector",
    code: "ISTJ",
    description: "Focuses on concrete, tangible information and present realities",
    image: "/personality/personaloity.png"
  },
  {
    name: "Protector",
    code: "ISFJ",
    description: "Focuses on concrete, tangible information and present realities",
    image: "/personality/personaloity.png"
  },
  {
    name: "Artist",
    code: "ISFP",
    description: "Focuses on concrete, tangible information and present realities",
    image: "/personality/personaloity.png"
  },
  {
    name: "Consul",
    code: "ESFJ",
    description: "Focuses on concrete, tangible information and present realities",
    image: "/personality/personaloity.png"
  },
  {
    name: "Virtuoso",
    code: "ISTP",
    description: "Focuses on concrete, tangible information and present realities",
    image: "/personality/personaloity.png"
  },
  {
    name: "Entrepreneur",
    code: "ESTP",
    description: "Focuses on concrete, tangible information and present realities",
    image: "/personality/personaloity.png"
  },
  {
    name: "Entertainer",
    code: "ESFP",
    description: "Focuses on concrete, tangible information and present realities",
    image: "/personality/personaloity.png"
  },
  {
    name: "Executive",
    code: "ESTJ",
    description: "Focuses on concrete, tangible information and present realities",
    image: "/personality/personaloity.png"
  }
];

export default function PersonalityTypesPage() {
  return (
    <div className="p-6 bg-white">
      <h2 className="text-[24px] font-semibold mb-8">
        <span className="text-[#0046FF]">Personality Types</span>
      </h2>

      {/* Personality Types Grid */}
      <div className="grid grid-cols-4 gap-6">
        {personalityTypes.map((type, index) => (
          <div key={index} className="bg-white rounded-2xl border border-[#E5E7EB] overflow-hidden">
            <div className="aspect-[2/1] flex items-center justify-center bg-[#F3F4F6]">
              <Image
                src={type.image}
                alt={type.name}
                width={80}
                height={80}
                className="mx-auto"
                placeholder="blur"
                blurDataURL={PLACEHOLDER_IMAGE}
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
        ))}
      </div>
    </div>
  );
} 