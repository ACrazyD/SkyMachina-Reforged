console.info("Getting ready to mix things up...")

ServerEvents.recipes(event => {
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



})