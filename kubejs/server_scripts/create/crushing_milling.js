console.info('Grinding your everything...')

ServerEvents.recipes(event => {
    //Remove
    event.remove({id: 'create:milling/gravel'})
    event.remove({id: 'create_mechanical_extruder:extruding/cobblestone'})


    event.recipes.create.milling([Item.of('minecraft:sand').withChance(0.4), 'minecraft:flint'], '#forge:gravel')
    event.recipes.create.milling([Item.of('create:crushed_iron_ore').withChance(0.6), Item.of('minecraft:gravel').withChance(0.3)], 'skymachina:t1_mineral_deposit')
})