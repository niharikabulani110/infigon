export const COLORS = {
  primary: '#0046FF',
  secondary: '#666666',
  text: '#1A1A1A',
  background: '#ECF5FF',
  border: '#E5E7EB',
  success: '#22C55E',
  warning: '#F59E0B',
  info: '#3B82F6',
  purple: '#A855F7'
} as const;

export interface PersonalityType {
  name: string;
  code: string;
  description: string;
  image: string;
}

export const PERSONALITY_TYPES: PersonalityType[] = [
  {
    name: 'Inspector',
    code: 'ISTJ',
    description: 'Focuses on concrete, tangible information and present realities',
    image: '/personality/personality.png'
  },
  {
    name: 'Protector',
    code: 'ISFJ',
    description: 'Focuses on concrete, tangible information and present realities',
    image: '/personality/personality.png'
  },
  {
    name: 'Artist',
    code: 'ISFP',
    description: 'Focuses on concrete, tangible information and present realities',
    image: '/personality/personality.png'
  },
  {
    name: 'Consul',
    code: 'ESFJ',
    description: 'Focuses on concrete, tangible information and present realities',
    image: '/personality/personality.png'
  },
  {
    name: 'Virtuoso',
    code: 'ISTP',
    description: 'Focuses on concrete, tangible information and present realities',
    image: '/personality/personality.png'
  },
  {
    name: 'Entrepreneur',
    code: 'ESTP',
    description: 'Focuses on concrete, tangible information and present realities',
    image: '/personality/personality.png'
  },
  {
    name: 'Entertainer',
    code: 'ESFP',
    description: 'Focuses on concrete, tangible information and present realities',
    image: '/personality/personality.png'
  },
  {
    name: 'Executive',
    code: 'ESTJ',
    description: 'Focuses on concrete, tangible information and present realities',
    image: '/personality/personality.png'
  },
  {
    name: 'Advocate',
    code: 'INFJ',
    description: 'Focuses on concrete, tangible information and present realities',
    image: '/personality/personality.png'
  },
  {
    name: 'Mediator',
    code: 'INFP',
    description: 'Focuses on concrete, tangible information and present realities',
    image: '/personality/personality.png'
  },
  {
    name: 'Campaigner',
    code: 'ENFP',
    description: 'Focuses on concrete, tangible information and present realities',
    image: '/personality/personality.png'
  },
  {
    name: 'Protagonist',
    code: 'ENFJ',
    description: 'Focuses on concrete, tangible information and present realities',
    image: '/personality/personality.png'
  },
  {
    name: 'Architect',
    code: 'INTJ',
    description: 'Focuses on concrete, tangible information and present realities',
    image: '/personality/personality.png'
  },
  {
    name: 'Thinker',
    code: 'INTP',
    description: 'Focuses on concrete, tangible information and present realities',
    image: '/personality/personality.png'
  },
  {
    name: 'Debater',
    code: 'ENTP',
    description: 'Focuses on concrete, tangible information and present realities',
    image: '/personality/personality.png'
  },
  {
    name: 'Commander',
    code: 'ENTJ',
    description: 'Focuses on concrete, tangible information and present realities',
    image: '/personality/personality.png'
  }
]; 