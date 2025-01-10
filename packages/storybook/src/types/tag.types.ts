// src/types/tag.ts
export interface TagProps {
    label: string;
    count?: number;    
    active?: boolean;  
    clickable?: boolean;
  }
  
  export interface TagEvents {
    (e: 'click', label: string): void;
  }