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
})