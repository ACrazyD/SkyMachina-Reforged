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
            i: CP('iron_1')
        }
    )


    //Grass Beater
    event.shaped(
        Item.of('skymachina:grass_beater', 1),
        [
            '  p',
            ' p ',
            's  '
        ],
        {
            s: '#forge:rods/wooden',
            p: '#minecraft:planks'
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






})