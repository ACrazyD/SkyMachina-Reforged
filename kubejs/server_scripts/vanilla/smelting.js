console.info('Making things cookable...')

ServerEvents.recipes(event => {
    //Smelting
	event.smelting('2x thermal:copper_nugget', 'skymachina:copper_chunk')
    event.smelting('2x minecraft:iron_nugget', 'skymachina:iron_chunk')
    event.smelting('1x skymachinatweaks:crucible', 'skymachinatweaks:unfired_crucible')






    //Blasting
    event.blasting('5x thermal:copper_nugget', 'skymachina:copper_chunk')
    event.blasting('5x minecraft:iron_nugget', 'skymachina:iron_chunk')
})