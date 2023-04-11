// priority: 0

console.info('Dont mind me, just createing some new things...')

StartupEvents.registry('item', event => {

	//Tools - RockSmashers
	event.create('skymachina:prospector_spade', 'shovel').tier('stone')
	event.create('skymachina:stone_rock_smasher', 'pickaxe').tier('stone')
	event.create('skymachina:iron_rock_smasher', 'pickaxe').tier('iron')
	event.create('skymachina:diamond_rock_smasher', 'pickaxe').tier('diamond')
	event.create('skymachina:netherite_rock_smasher', 'pickaxe').tier('netherite')
	//Tools - GrassBeater
	event.create('skymachina:grass_beater')


	//Dummy Ores
	event.create('skymachina:cobblestone_pebble')
	event.create('skymachina:iron_chunk')
})

StartupEvents.registry('block', event => {
	
})

StartupEvents.registry('fluid', event => {
	
    event.create('skymachina:liquid_glass').thinTexture(0xFFF2E2).bucketColor(0xFFF2E2).displayName('Liquid Glass')
})


ItemEvents.modification(event => {

	event.modify('minecraft:oak_leaves', item => {item.burnTime = 100})
	event.modify('minecraft:birch_leaves', item => {item.burnTime = 100})
	event.modify('minecraft:jungle_leaves', item => {item.burnTime = 100})
	event.modify('minecraft:dark_oak_leaves', item => {item.burnTime = 100})
	event.modify('minecraft:acacia_leaves', item => {item.burnTime = 100})
	event.modify('minecraft:spruce_leaves', item => {item.burnTime = 100})

})