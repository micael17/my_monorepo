// types/button.ts
export interface ButtonProps {
    variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
    size?: 'default' | 'sm' | 'lg';
    disabled?: boolean;
}

export interface ButtonEvents {
    (e: 'click', id: number): void;
    (e: 'hover'): void;
}