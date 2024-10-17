import type { AnimationConfig } from "../animate";

export const mainAnimation: AnimationConfig[] = [
    {
        type: 'to',
        duration: 2,
        x: 200,
        rotation: 360,
        scale: 1.5,
        opacity: 0.5,
        ease: 'power2.out'
    },
    {
        type: 'to',
        duration: 1,
        x: 0,
        rotation: 0,
        scale: 1,
        opacity: 1,
        ease: 'power2.inOut',
        delay: 0.5
    }
];