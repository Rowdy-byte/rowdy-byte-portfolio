import type { AnimationConfig } from "../../animate";

export const openSidebarAnimation: AnimationConfig[] = [
    {
        type: 'to',
        y: -45
    },
    {
        type: 'to',
        duration: 1,
        opacity: 1,
        y: -45
    }
]