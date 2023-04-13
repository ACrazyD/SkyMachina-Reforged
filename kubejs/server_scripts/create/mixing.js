console.info("Getting ready to mix things up...")

ServerEvents.recipes(e =>{
    e.recipes.create.mixing('minecraft:dirt', ['#minecraft:saplings', '#minecraft:saplings', '#minecraft:saplings', '#minecraft:saplings', '#minecraft:saplings', '#minecraft:saplings', 'minecraft:bone_meal', 'minecraft:bone_meal'])
    e.recipes.create.mixing([Fluid.of('water',50), 'dead_bush'] , ['#minecraft:leaves', '#minecraft:leaves', '#minecraft:leaves', '#minecraft:leaves', '#minecraft:leaves', '#minecraft:leaves', '#minecraft:leaves', '#minecraft:leaves'])
    e.recipes.create.mixing([Fluid.of('skymachina:mineral_water',100), 'skymachina:silt'], [Fluid.of('minecraft:water', 50), 'skymachina:iron_chunk', 'skymachina:iron_chunk', 'skymachina:copper_chunk', 'skymachina:copper_chunk'])
})