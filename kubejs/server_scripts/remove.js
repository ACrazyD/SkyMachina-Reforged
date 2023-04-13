console.info('Removing everything sain, and everything nice...')

ServerEvents.recipes(event => {
    //Remove
    event.remove({id: 'create:milling/gravel'})
    event.remove({id: 'create_mechanical_extruder:extruding/cobblestone'})
})