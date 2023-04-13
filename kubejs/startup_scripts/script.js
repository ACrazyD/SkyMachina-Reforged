// priority: 0

console.info('Dont mind me, just createing some new things...')

StartupEvents.registry('item', event => {

	//Tools - RockSmashers+Spades
	event.create('skymachina:iron_prospector_spade', 'shovel').tier('iron')
	event.create('skymachina:diamond_prospector_spade', 'shovel').tier('diamond')
	event.create('skymachina:netherite_prospector_spade', 'shovel').tier('netherite')
	event.create('skymachina:stone_rock_smasher', 'pickaxe').tier('stone')
	event.create('skymachina:copper_rock_smasher', 'pickaxe').tier('copper')
	event.create('skymachina:iron_rock_smasher', 'pickaxe').tier('iron')
	event.create('skymachina:diamond_rock_smasher', 'pickaxe').tier('diamond')
	event.create('skymachina:netherite_rock_smasher', 'pickaxe').tier('netherite')
	//Tools - GrassBeater
	//event.create('skymachina:grass_beater')


	//Duh Stones
	event.create('skymachina:tiny_dirt_pile')
	event.create('skymachina:slightly_larger_dirt_pile')
	event.create('skymachina:cobblestone_pebble')
	event.create('skymachina:andesite_pebble')
	event.create('skymachina:diorite_pebble')
	event.create('skymachina:granite_pebble')
	event.create('skymachina:rock_cluster')

	//Mineral Deposits
	event.create('skymachina:t1_mineral_deposit')
	event.create('skymachina:t2_mineral_deposit')
	event.create('skymachina:t3_mineral_deposit')
	event.create('skymachina:t4_mineral_deposit')
	event.create('skymachina:t5_mineral_deposit')
	event.create('skymachina:t6_mineral_deposit')
	event.create('skymachina:t7_mineral_deposit')

	//Duh Ores
	event.create('skymachina:iron_filings')
	event.create('skymachina:copper_filings')
	event.create('skymachina:tin_filings')
	event.create('skymachina:gold_filings')
	event.create('skymachina:zinc_filings')
	event.create('skymachina:lead_filings')
	event.create('skymachina:osmium_filings')
	event.create('skymachina:uranium_filings')
	event.create('skymachina:silver_filings')
	event.create('skymachina:nickel_filings')
	event.create('skymachina:bauxite_filings')
	//Duh Chunks
	event.create('skymachina:iron_chunk')
	event.create('skymachina:copper_chunk')
	event.create('skymachina:tin_chunk')
	event.create('skymachina:gold_chunk')
	event.create('skymachina:zinc_chunk')
	event.create('skymachina:lead_chunk')
	event.create('skymachina:osmium_chunk')
	event.create('skymachina:uranium_chunk')
	event.create('skymachina:silver_chunk')
	event.create('skymachina:nickel_chunk')
	event.create('skymachina:bauxite_chunk')
	//Duh Gems
	event.create('skymachina:diamond_fragments')
	event.create('skymachina:emerald_fragments')
	event.create('skymachina:coal_fragments')
	event.create('skymachina:redstone_grains')
	event.create('skymachina:skystone_grains')
	//New Named
	event.create('skymachina:debris_fragments')
	event.create('skymachina:urainite_fragments')
	event.create('skymachina:lapis_fragments')
	event.create('skymachina:ruby_fragments')
	event.create('skymachina:sapphire_fragments')
	event.create('skymachina:apatite_fragments')
	event.create('skymachina:cinnabar_fragments')
	event.create('skymachina:dimshard_fragments')
	event.create('skymachina:fluorite_powder')
	event.create('skymachina:niter_powder')
	event.create('skymachina:sulfur_powder')
	// I dont know what to name these items atm... (EMPTY)
	
	
	
	

	//Misc
	event.create('skymachina:silt')
	event.create('skymachina:sky_token')


	//WorldEdit Wands
	event.create('skymachina:world_edit_wand')
	event.create('skymachina:world_edit_brush')
	event.create('skymachina:world_edit_nav')
})

StartupEvents.registry('block', event => {
	event.create('skymachina:t1_ore_catalyst').material('stone').hardness(1.0).displayName('Tier 1 Ore Catalyst');
	event.create('skymachina:t2_ore_catalyst').material('stone').hardness(1.0).displayName('Tier 2 Ore Catalyst');
	event.create('skymachina:t3_ore_catalyst').material('stone').hardness(1.0).displayName('Tier 3 Ore Catalyst');
	event.create('skymachina:t4_ore_catalyst').material('stone').hardness(1.0).displayName('Tier 4 Ore Catalyst');
	event.create('skymachina:t5_ore_catalyst').material('stone').hardness(1.0).displayName('Tier 5 Ore Catalyst');
	event.create('skymachina:t6_ore_catalyst').material('stone').hardness(1.0).displayName('Tier 6 Ore Catalyst');
	event.create('skymachina:t7_ore_catalyst').material('stone').hardness(1.0).displayName('Tier 7 Ore Catalyst');

})

StartupEvents.registry('fluid', event => {
    event.create('skymachina:liquid_glass').thinTexture(0xFFF2E2).bucketColor(0xFFF2E2).displayName('Liquid Glass')
	event.create('skymachina:mineral_water').thinTexture(0x14e2df).bucketColor(0x14e2df).displayName('Mineral Water')
	event.create('skymachina:gemstone_solution').thinTexture(0x9a07b2).bucketColor(0x9a07b2).displayName('Gemstone Solution')
})


ItemEvents.modification(event => {

	event.modify('minecraft:oak_leaves', item => {item.burnTime = 100})
	event.modify('minecraft:birch_leaves', item => {item.burnTime = 100})
	event.modify('minecraft:jungle_leaves', item => {item.burnTime = 100})
	event.modify('minecraft:dark_oak_leaves', item => {item.burnTime = 100})
	event.modify('minecraft:acacia_leaves', item => {item.burnTime = 100})
	event.modify('minecraft:spruce_leaves', item => {item.burnTime = 100})

})