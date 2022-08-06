const breakpoints = {
    xxs: 0,
    xs: 420,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
    xxl: 1400
}

export type Breakpoint = keyof typeof breakpoints
type Orientation = 'portrait' | 'landscape'

const min = (key: Breakpoint) => `(min-width: ${breakpoints[key]}px)`
const max = (key: Breakpoint) => `(max-width: ${breakpoints[key] - 0.02}px)`

export const up = (key: Breakpoint) => `@media ${min(key)}`
export const down = (key: Breakpoint) => `@media ${max(key)}`
export const between = (a: Breakpoint, b: Breakpoint) => `@media ${min(a)} and ${max(b)}`
export const orientation = (orientation: Orientation) => `@media (orientation: ${orientation})`

export const only = (key: Breakpoint) => {
    const keys = Object.keys(breakpoints) as Breakpoint[];
    const index = keys.indexOf(key);

    if (index === 0) {
        const next = keys.at(index + 1)
        if (next) return down(next)
    }

    if (index === keys.length - 1) return up(key)
    return between(key, keys[index + 1])
}