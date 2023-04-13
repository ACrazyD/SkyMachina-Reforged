console.info("Im extruding things...")

ServerEvents.recipes(event => {

    //

    event.recipes.createMechanicalExtruderExtruding(Item.of('skymachina:t1_mineral_deposit').withChance(0.3),[Fluid.of('skymachina:mineral_water'),Fluid.of('minecraft:lava')]).withCatalyst('skymachina:t1_ore_catalyst')
    event.recipes.createMechanicalExtruderExtruding(Item.of('skymachina:t2_mineral_deposit').withChance(0.3),[Fluid.of('skymachina:mineral_water'),Fluid.of('minecraft:lava')]).withCatalyst('skymachina:t2_ore_catalyst')
    event.recipes.createMechanicalExtruderExtruding(Item.of('skymachina:t3_mineral_deposit').withChance(0.3),[Fluid.of('skymachina:mineral_water'),Fluid.of('minecraft:lava')]).withCatalyst('skymachina:t3_ore_catalyst')
    event.recipes.createMechanicalExtruderExtruding(Item.of('skymachina:t4_mineral_deposit').withChance(0.3),[Fluid.of('skymachina:mineral_water'),Fluid.of('minecraft:lava')]).withCatalyst('skymachina:t4_ore_catalyst')
    event.recipes.createMechanicalExtruderExtruding(Item.of('skymachina:t5_mineral_deposit').withChance(0.3),[Fluid.of('skymachina:mineral_water'),Fluid.of('minecraft:lava')]).withCatalyst('skymachina:t5_ore_catalyst')
    event.recipes.createMechanicalExtruderExtruding(Item.of('skymachina:t6_mineral_deposit').withChance(0.3),[Fluid.of('skymachina:mineral_water'),Fluid.of('minecraft:lava')]).withCatalyst('skymachina:t6_ore_catalyst')
    event.recipes.createMechanicalExtruderExtruding(Item.of('skymachina:t7_mineral_deposit').withChance(0.3),[Fluid.of('skymachina:mineral_water'),Fluid.of('minecraft:lava')]).withCatalyst('skymachina:t7_ore_catalyst')
	// Change recipes here
})

//event.recipes.createsifterSifting(output, input[]) //EXAMPLE with chance event.recipes.createMechanicalExtruderExtruding(Item.of('minecraft:sand').withChance(0.3),