console.info('Making things cookable...')

ServerEvents.recipes(event => {
	event.smelting('3x thermal:copper_nugget', 'skymachina:copper_chunk')
})