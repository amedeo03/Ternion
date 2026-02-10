ServerEvents.tags('item', ternion => {
    ternion.add('minecraft:planks', 'aether:skyroot_planks')
    ternion.add('c:foods/milk', 'aether:skyroot_milk_bucket')
    
    ternion.add('wover:crafting_tables', /^betternether:.*_crafting_table$/)
    ternion.add('wover:crafting_tables', /^betterend:.*_crafting_table$/)
    ternion.add('wover:crafting_tables', 'minecraft:crafting_table')
})