console.info("Getting ready to mix things up...")

ServerEvents.recipes(event => {
    //Sanity Recipes
    event.shaped(
        Item.of('minecraft:chest', 4),
        [
            'lll',
            'l l',
            'lll'
        ],
        {
            l: '#minecraft:logs'
        }
    )
    event.shaped(
        Item.of('minecraft:stick', 16),
        [
            'l',
            'l'
        ],
        {
            l: '#minecraft:logs'
        }
    )

    //Crucible
    event.shaped(
        Item.of('skymachinatweaks:unfired_crucible', 1),
        [
            'c c',
            'c c',
            'ccc'
        ],{
            c: 'skymachina:porcelain_clay'
        }

    )
    //porcelain_clay
    event.shaped(
        Item.of('skymachina:porcelain_clay', 2),
        [
            `cb`
        ],{
            c: '#forge:clay',
            b: 'minecraft:bone_meal'
        }
    )


    event.shaped(
        Item.of('minecraft:blast_furnace', 1),
        [
            `ccc`,
            `cfc`,
            `SSS`
        ],{
            c: '#forge:plates/copper',
            f: 'minecraft:furnace',
            S: '#chipped:smooth_stone'

        }
    )

    //Ore Catalyst
    event.shaped(
        Item.of('skymachina:t1_ore_catalyst', 1),
        [
            'gdg',
            'GiG',
            'gdg'
        ],
        {
            g: CP('gravel_2'),
            d: CP('diorite_2'),
            G: CP('granite_2'),
            i: CP('copper_1')
        }
    )
    event.shaped(
        Item.of('skymachina:t2_ore_catalyst', 1),
        [
            'gdg',
            'GiG',
            'gdg'
        ],
        {
            g: CP('gravel_2'),
            d: CP('diorite_2'),
            G: CP('granite_2'),
            i: CP('iron_1')
        }
    )
    event.shaped(
        Item.of('skymachina:t3_ore_catalyst', 1),
        [
            'gdg',
            'GiG',
            'gdg'
        ],
        {
            g: CP('gravel_2'),
            d: CP('diorite_2'),
            G: CP('granite_2'),
            i: 'create:zinc_block'
        }
    )


    //Grass Beater
    event.shaped(
        Item.of('skymachinatweaks:grass_beater', 1),
        [
            '  p',
            ' p ',
            's  '
        ],
        {
            s: '#forge:rods/wooden',
            p: '#minecraft:logs'
        }
    )
    //Dirt Compressing
    event.shaped(
        Item.of('skymachina:slightly_larger_dirt_pile', 1),
        [
            'ddd',
            'ddd',
            'ddd'
        ],
        {
            d: 'skymachina:tiny_dirt_pile'
        }
    )
    event.shaped(
        Item.of('minecraft:dirt', 1),
        [
            'ddd',
            'ddd',
            'ddd'
        ],
        {
            d: 'skymachina:slightly_larger_dirt_pile'
        }
    )

    //Stone Types
    event.shaped(
        Item.of('minecraft:cobblestone', 1),
        [
            'ddd',
            'ddd',
            'ddd'
        ],
        {
            d: 'skymachina:cobblestone_pebble'
        }
    )
    event.shaped(
        Item.of('minecraft:granite', 1),
        [
            'ddd',
            'ddd',
            'ddd'
        ],
        {
            d: 'skymachina:granite_pebble'
        }
    )
    event.shaped(
        Item.of('minecraft:diorite', 1),
        [
            'ddd',
            'ddd',
            'ddd'
        ],
        {
            d: 'skymachina:diorite_pebble'
        }
    )
    event.shaped(
        Item.of('minecraft:andesite', 1),
        [
            'ddd',
            'ddd',
            'ddd'
        ],
        {
            d: 'skymachina:andesite_pebble'
        }
    )

    // RockSmashers
    event.shaped(
        Item.of('skymachina:stone_rock_smasher', 1),
        [
            'ccc',
            'csc',
            ' s '
        ],
        {
            c: '#forge:cobblestone',
            s: '#forge:rods/wooden'
        }
    )
    event.shaped(
        Item.of('skymachina:copper_rock_smasher', 1),
        [
            'iii',
            'nsn',
            ' s '
        ],
        {
            i: '#forge:ingots/copper',
            n: '#forge:nuggets/copper',
            s: '#forge:rods/wooden'
        }
    )
    event.shaped(
        Item.of('skymachina:iron_rock_smasher', 1),
        [
            'iii',
            'nsn',
            ' s '
        ],
        {
            i: '#forge:ingots/iron',
            n: '#forge:nuggets/iron',
            s: '#forge:rods/wooden'
        }
    )

    event.shaped(
        Item.of('skymachina:iron_prospector_spade', 1),
        [
            '   ',
            ' i ',
            's  '
        ],
        {
            i: '#forge:ingots/iron',
            s: '#forge:rods/wooden'
        }
    )
    event.shaped(
        Item.of('skymachina:diamond_prospector_spade', 1),
        [
            '   ',
            ' i ',
            's  '
        ],
        {
            i: '#forge:gems/diamond',
            s: '#forge:rods/wooden'
        }
    )
    event.shaped(
        Item.of('skymachina:netherite_prospector_spade', 1),
        [
            '   ',
            ' i ',
            's  '
        ],
        {
            i: '#forge:ingots/netherite',
            s: '#forge:rods/wooden'
        }
    )






})