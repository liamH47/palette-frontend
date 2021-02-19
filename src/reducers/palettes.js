const reducer  = (palettes = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return palettes
        case 'CREATE':
            return palettes
        default:
            return palettes
    }
}