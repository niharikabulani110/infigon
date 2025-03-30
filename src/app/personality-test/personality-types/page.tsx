import Image from "next/image";
import Navigation from '@/components/Navigation';
import SideNavigation from '@/components/SideNavigation';

const PLACEHOLDER_IMAGE = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%23F3F4F6'/%3E%3C/svg%3E";

export default function PersonalityTypesPage() {
  return (
    <div className="p-6 bg-white">
      <h2 className="text-2xl font-semibold text-[#1A1A1A] mb-8">Personality Types</h2>
    </div>
  );
} 