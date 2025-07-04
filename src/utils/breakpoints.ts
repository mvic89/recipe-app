interface Breakpoints {
    sm: string
}

interface ScreenTypes {
    mobile: string
}

const breakpoints: Breakpoints = {
    sm: '640px'
}

const screens: ScreenTypes = {
    mobile: `(max-width: ${breakpoints.sm})`
}

export {screens}