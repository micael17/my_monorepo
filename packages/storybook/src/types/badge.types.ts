// types/badge.ts
export type BadgeType = 'primary' | 'success' | 'warning' | 'error';

export interface BadgeProps {
    label: string;
    type: BadgeType;
    color?: string;
}