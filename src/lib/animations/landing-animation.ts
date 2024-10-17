import type { AnimationConfig } from "../animate"

export const landingProjectsHeaderAnimation: AnimationConfig[] = [
    {
        type: 'to',
        x: 1000
    },
    {
        type: 'to',
        duration: 1,
        delay: 3,
        x: 0
    }
]

export const landingProjectsTextAnimation: AnimationConfig[] = [
    {
        type: 'to',
        delay: 2,
        duration: 2,
        scale: 1
    }
]