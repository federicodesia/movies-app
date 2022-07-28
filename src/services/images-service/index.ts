const baseUrl = 'https://image.tmdb.org/t/p/'
type Quality = 'low' | 'medium' | 'high' | 'original'

const getUrl = (
    path: string | undefined,
    quality: Quality,
    qualities: Record<Quality, string>,
) => {
    if (!path) return ''
    return `${baseUrl}${qualities[quality]}${path}`
}

const getBackdropUrl = (
    path?: string,
    quality: Quality = 'medium'
) => {
    return getUrl(path, quality, {
        'low': 'w300',
        'medium': 'w780',
        'high': 'w1280',
        'original': 'original'
    })
}

const getPosterUrl = (
    path?: string,
    quality: Quality = 'medium'
) => {
    return getUrl(path, quality, {
        'low': 'w342',
        'medium': 'w500',
        'high': 'w780',
        'original': 'original'
    })
}

const getProfileUrl = (
    path?: string,
    quality: Quality = 'medium'
) => {
    return getUrl(path, quality, {
        'low': 'w45',
        'medium': 'w185',
        'high': 'w632',
        'original': 'original'
    })
}

export const imagesService = {
    getBackdropUrl,
    getPosterUrl,
    getProfileUrl
};