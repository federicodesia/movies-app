const baseUrl = 'https://image.tmdb.org/t/p/'
type Quality = 'low' | 'medium' | 'high' | 'original'

const getBackdropUrl = (
    path: string | undefined,
    quality: Quality = 'medium'
) => {
    if(!path) return ''
    const qualities = {
        'low': 'w300',
        'medium': 'w780',
        'high': 'w1280',
        'original': 'original'
    }
    return `${baseUrl}${qualities[quality]}${path}`
}

const getPosterUrl = (
    path: string | undefined,
    quality: Quality = 'medium'
) => {
    if(!path) return ''
    const qualities = {
        'low': 'w342',
        'medium': 'w500',
        'high': 'w780',
        'original': 'original'
    }
    return `${baseUrl}${qualities[quality]}${path}`
}

export const imagesService = {
    getBackdropUrl,
    getPosterUrl
};