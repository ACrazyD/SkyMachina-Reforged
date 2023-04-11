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


	//Duh Stones
	event.create('skymachina:tiny_dirt_pile')
	event.create('skymachina:slightly_larger_dirt_pile')
	event.create('skymachina:cobblestone_pebble')
	event.create('skymachina:andesite_pebble')
	event.create('skymachina:diorite_pebble')
	event.create('skymachina:granite_pebble')

	//Duh Ores
	event.create('skymachina:iron_filings')
	event.create('skymachina:copper_filings')
	event.create('skymachina:tin_filings')
	event.create('skymachina:gold_filings')
	event.create('skymachina:diamond_fragments')
	event.create('skymachina:emerald_fragments')
	event.create('skymachina:redstone_grains')
	event.create('skymachina:skystone_grains')

	//WorldEdit Wands
	event.create('skymachina:world_edit_wand')
	event.create('skymachina:world_edit_brush')
	event.create('skymachina:world_edit_nav')
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