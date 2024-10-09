import type { AnimationConfig } from "../../animate";

export const h1Animation: AnimationConfig[] = [
    {
        type: 'to',
        duration: 1,
        delay: 1,
        scale: 0.5,
        x: 1000,
        opacity: 0
    },
    {
        type: 'to',
        duration: 1,
        delay: 0.5,
        scale: 0.1,
        opacity: 0.1
    },
    {
        type: 'to',
        duration: 0.8,
        scale: 1,
        delay: 0.2,
        opacity: 1,
        x: 0
    }
];