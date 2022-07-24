export interface CommonProps {
    className?: string;
}

export type Size = "xs" | "sm" | "md" | "lg";

export interface SizeProps {
    size?: Size;
}

export const classPrefix = "md";
