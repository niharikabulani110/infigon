"use client";

import { useState } from 'react';
import Image from "next/image";
import SideNavigation from '@/components/SideNavigation';
import { PersonalityTypeCard } from '@/components/PersonalityTypeCard';
import { personalityTypes } from '@/data/personalityTypes';

const PLACEHOLDER_IMAGE = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%23F3F4F6'/%3E%3C/svg%3E";

/**
 * Personality Types Page Component
 * Displays a grid of personality types with their descriptions and images
 * @returns {JSX.Element} The rendered personality types page
 */
export default function PersonalityTypesPage() {
  const [expandedSection, setExpandedSection] = useState(1);

  return (
    <div className="flex">
      <SideNavigation 
        expandedSection={expandedSection} 
        toggleSection={setExpandedSection}
      />
      <div className="flex-1 p-6 bg-white">
        <h2 className="text-[24px] font-semibold mb-8">
          <span className="text-[#0046FF]">Personality Types</span>
        </h2>

        {/* Personality Types Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {personalityTypes.map((type, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl border border-[#E5E7EB] overflow-hidden hover:shadow-md transition-shadow duration-200"
            >
              <div className="aspect-[2/1] flex items-center justify-center bg-[#F3F4F6]">
                <Image
                  src={type.image}
                  alt={`${type.name} personality type illustration`}
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
    </div>
  );
} 