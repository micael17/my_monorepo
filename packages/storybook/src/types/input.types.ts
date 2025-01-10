// src/types/input.ts
export type InputType = 'text' | 'search';

export interface InputProps {
  placeholder?: string;
  type?: InputType;
  value: string;
  disabled?: boolean;
  error?: string;
  icon?: 'search' | 'clear';
}

export interface InputEvents {
  (e: 'update:value', value: string): void;
  (e: 'clear'): void;
}