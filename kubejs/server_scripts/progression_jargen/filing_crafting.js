console.info('Makin them filings usefull for once...')

ServerEvents.recipes(event => {
    event.shaped(
        Item.of('skymachina:copper_chunk', 1),
        [
            'fff',
            'fgf',
            'fff'
        ],
        {
            f: 'skymachina:copper_filings',
            g: 'minecraft:gravel'
        }
    )
    event.shaped(
        Item.of('skymachina:iron_chunk', 1),
        [
            'fff',
            'fgf',
            'fff'
        ],
        {
            f: 'skymachina:iron_filings',
            g: 'minecraft:gravel'
        }
    )
})




