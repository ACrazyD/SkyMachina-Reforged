console.info('Removing everything sain, and everything nice...')

ServerEvents.recipes(event => {
    //Remove
    event.remove({id: 'create:milling/gravel'})
    event.remove({id: 'create_mechanical_extruder:extruding/cobblestone'})

    //BlastFurns
    event.remove({id: 'quark:building/crafting/furnaces/deepslate_blast_furnace'})
    event.remove({id: 'quark:building/crafting/furnaces/blackstone_blast_furnace'})
    event.remove({id: 'minecraft:blast_furnace'})

})