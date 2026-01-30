ServerEvents.recipes(ternion => { 
    ternion.replaceInput( 
        {input: 'minecraft:quartz'},
        'minecraft:quartz',
        '#c:gems/quartz'
    )
    ternion.replaceInput( 
        {input: 'minecraft:egg'},
        'minecraft:egg',
        '#c:eggs'
    )

    ternion.replaceInput( 
        {input: 'minecraft:ender_pearl'},
        'minecraft:ender_pearl',
        '#c:ender_pearls'
    )

    ternion.replaceInput( 
        {input: 'aether:skyroot_stick'},
        'aether:skyroot_stick',
        '#c:rods/wooden'
    )
    
    ternion.replaceInput( 
        {input: 'minecraft:crafting_table'},
        'minecraft:crafting_table',
        '#wover:crafting_tables'
    )

    ternion.replaceInput( 
        {input: 'minecraft:furnace'},
        'minecraft:furnace',
        '#wover:furnaces'
    )
})