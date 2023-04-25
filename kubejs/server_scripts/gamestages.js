console.info('Im am the sentient file... Fear me')
// Pebbel
BlockEvents.rightClicked(event => {
    const { player, server } = event
    if (event.block.hasTag('minecraft:dirt')) {
        if (player.mainHandItem === 'skymachinatweaks:grass_beater' && player.offHandItem === 'minecraft:air') {
            server.runCommandSilent(`execute at @p run loot spawn ${event.block.x} ${event.block.y} ${event.block.z} loot skymachina:ores/grass_t1`)
        }
    }
})



//Recipe Staging (Credit EnigmaQuip for the assist )
ServerEvents.recipes(event => {
const $CraftingRecipe = Java.loadClass('net.minecraft.world.item.crafting.CraftingRecipe')
function addStageByMod(stage, modid) {
   event.forEachRecipe({ mod: modid }, recipe => {
        if (recipe.originalRecipe instanceof $CraftingRecipe) {
            recipe.stage(stage)
        }
    })
}

//(stage, modid)

addStageByMod("thermal", "thermal")
addStageByMod("ae2", "ae2")
addStageByMod("mekanism", "mekanism")
addStageByMod("waystones", "waystones")
addStageByMod("powah", "powah")
//  addStageByMod("compressium", "compressium")
addStageByMod("constructionwand", "construction_wand")
addStageByMod("nether", "nether")
addStageByMod("debris", "debris")
addStageByMod("framed_blocks", "framedblocks")
addStageByMod("flux_networks", "fluxnetworks")
addStageByMod("xnet", "xnet")
addStageByMod("ender_storage", "enderstorage")
addStageByMod("chipped", "chipped")

addStageByMod("ae2", "appmek")
addStageByMod("ae2", "ae2wtlib")
addStageByMod("ae2", "aeinfinitybooster")
addStageByMod("ae2", "ae2things")


})



// Ore Breaking Events
BlockEvents.broken(event => {
    const { server, player } = event;
    const stages = {
        t1_rocks: { loot: 'skymachina:ores/t1_rocks' },
        t2_rocks: { loot: 'skymachina:ores/t2_rocks' },
        t3_rocks: { loot: 'skymachina:ores/t3_rocks' },
        t4_rocks: { loot: 'skymachina:ores/t4_rocks' },
        t5_rocks: { loot: 'skymachina:ores/t5_rocks' },
        t6_rocks: { loot: 'skymachina:ores/t6_rocks' },
        t7_rocks: { loot: 'skymachina:ores/t7_rocks' }
    };

    for (const [stage, { loot }] of Object.entries(stages)) {
        if (event.player.stages.has(stage)) {
            if (player.mainHandItem === 'skymachina:stone_rock_smasher') {
                if (event.block.hasTag(`forge:cobblestone`)) {
                    server.runCommandSilent(`execute at @p run setblock ${event.block.x} ${event.block.y} ${event.block.z} minecraft:air`);
                    server.runCommandSilent(`execute at @p run loot spawn ${event.block.x} ${event.block.y} ${event.block.z} loot ${loot}`);
                }
            }
        }
    }

    for (const [stage, { loot }] of Object.entries(stages)) {
        if (event.player.stages.has(stage)) {
            if (player.mainHandItem === 'skymachina:copper_rock_smasher') {
                if (event.block.hasTag(`forge:cobblestone`)) {
                    server.runCommandSilent(`execute at @p run setblock ${event.block.x} ${event.block.y} ${event.block.z} minecraft:air`);
                    server.runCommandSilent(`execute at @p run loot spawn ${event.block.x} ${event.block.y} ${event.block.z} loot ${loot}`);
                    server.runCommandSilent(`execute at @p run loot spawn ${event.block.x} ${event.block.y} ${event.block.z} loot ${loot}`);
                }
            }
        }
    }

    for (const [stage, { loot }] of Object.entries(stages)) {
        if (event.player.stages.has(stage)) {
            if (player.mainHandItem === 'skymachina:iron_rock_smasher') {
                if (event.block.hasTag(`forge:cobblestone`)) {
                    server.runCommandSilent(`execute at @p run setblock ${event.block.x} ${event.block.y} ${event.block.z} minecraft:air`);
                    server.runCommandSilent(`execute at @p run loot spawn ${event.block.x} ${event.block.y} ${event.block.z} loot ${loot}`);
                    server.runCommandSilent(`execute at @p run loot spawn ${event.block.x} ${event.block.y} ${event.block.z} loot ${loot}`);
                    server.runCommandSilent(`execute at @p run loot spawn ${event.block.x} ${event.block.y} ${event.block.z} loot ${loot}`);
                }
            }
        }
    }

    for (const [stage, { loot }] of Object.entries(stages)) {
        if (event.player.stages.has(stage)) {
            if (player.mainHandItem === 'skymachina:diamond_rock_smasher') {
                if (event.block.hasTag(`forge:cobblestone`)) {
                    server.runCommandSilent(`execute at @p run setblock ${event.block.x} ${event.block.y} ${event.block.z} minecraft:air`);
                    server.runCommandSilent(`execute at @p run loot spawn ${event.block.x} ${event.block.y} ${event.block.z} loot ${loot}`);
                    server.runCommandSilent(`execute at @p run loot spawn ${event.block.x} ${event.block.y} ${event.block.z} loot ${loot}`);
                    server.runCommandSilent(`execute at @p run loot spawn ${event.block.x} ${event.block.y} ${event.block.z} loot ${loot}`);
                    server.runCommandSilent(`execute at @p run loot spawn ${event.block.x} ${event.block.y} ${event.block.z} loot ${loot}`);
                }
            }
        }
    }

    for (const [stage, { loot }] of Object.entries(stages)) {
        if (event.player.stages.has(stage)) {
            if (player.mainHandItem === 'skymachina:netherite_rock_smasher') {
                if (event.block.hasTag(`forge:cobblestone`)) {
                    server.runCommandSilent(`execute at @p run setblock ${event.block.x} ${event.block.y} ${event.block.z} minecraft:air`);
                    server.runCommandSilent(`execute at @p run loot spawn ${event.block.x} ${event.block.y} ${event.block.z} loot ${loot}`);
                    server.runCommandSilent(`execute at @p run loot spawn ${event.block.x} ${event.block.y} ${event.block.z} loot ${loot}`);
                    server.runCommandSilent(`execute at @p run loot spawn ${event.block.x} ${event.block.y} ${event.block.z} loot ${loot}`);
                    server.runCommandSilent(`execute at @p run loot spawn ${event.block.x} ${event.block.y} ${event.block.z} loot ${loot}`);
                    server.runCommandSilent(`execute at @p run loot spawn ${event.block.x} ${event.block.y} ${event.block.z} loot ${loot}`);
                }
            }
        }
    }
})