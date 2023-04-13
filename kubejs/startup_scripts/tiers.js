ItemEvents.toolTierRegistry (event => {
    event.add('copper', tier => {
      tier.uses = 200
      tier.speed = 5.0
      tier.attackDamageBonus = 1.8
      tier.level = 2
      tier.enchantmentValue = 10
      tier.repairIngredient = '#forge:ingots/copper'
    })
  })