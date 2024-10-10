import type { AnimationConfig } from "../../animate";

export const hamburgerMenuAnimation: AnimationConfig[] = [
    {
        type: 'from',
        duration: 0.5,
        y: 0,
        // scale: 0,
        opacity: 0,
        ease: 'power1.in'
    },
    {
        type: 'to',
        duration: 1,
        y: 0,
        // scale: 1,
        opacity: 1,
        ease: 'power1.out'
    }
]