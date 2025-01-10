// types/header.ts
export interface NavItem {
    label: string;
    href: string;
    dropdownItems?: NavItem[];
}

export interface HeaderProps {
    title: string;
    navItems: NavItem[];
}