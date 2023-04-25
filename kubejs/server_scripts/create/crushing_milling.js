console.info('Grinding your everything...')

ServerEvents.recipes(event => {
    //Remove
    event.remove({id: 'create:milling/gravel'})
    event.remove({id: 'create_mechanical_extruder:extruding/cobblestone'})


    event.recipes.create.milling([Item.of('minecraft:sand').withChance(0.4), 'minecraft:flint'], '#forge:gravel')
    event.recipes.create.milling([Item.of('create:crushed_copper_ore').withChance(0.6), Item.of('minecraft:gravel').withChance(0.3)], 'skymachina:t1_mineral_deposit')
    event.recipes.create.milling([Item.of('create:crushed_iron_ore').withChance(0.6), Item.of('minecraft:gravel').withChance(0.3)], 'skymachina:t2_mineral_deposit')

    //rock cluster
    event.recipes.create.milling([
        Item.of('skymachina:cobblestone_pebble').withChance(0.12),
        Item.of('skymachina:andesite_pebble',5).withChance(0.6),
        Item.of('skymachina:diorite_pebble',5).withChance(0.6),
        Item.of('skymachina:granite_pebble',5).withChance(0.6)], 'skymachina:rock_cluster')
})