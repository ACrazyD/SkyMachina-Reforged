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
})




