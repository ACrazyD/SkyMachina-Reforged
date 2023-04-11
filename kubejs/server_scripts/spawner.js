console.info('Making the world spawnable!')
//Random Mob (WIP) wierd things happen for now. 
ServerEvents.recipes(event => {
event.recipes.createMechanicalSpawnerSpawner("random",Fluid.of('minecraft:water', 700)).processingTime(8000); //Specific MOB 
event.recipes.createMechanicalSpawnerSpawner("minecraft:skeleton",Fluid.of('minecraft:lava', 700)).processingTime(10);
})