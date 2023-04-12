console.info('Grinding your everything...')

ServerEvents.recipes(event => {
    event.recipes.create.milling([Item.of('create:crushed_iron_ore').withChance(0.6), Item.of('minecraft:gravel').withChance(0.3)], 'skymachina:t1_mineral_deposit')
})