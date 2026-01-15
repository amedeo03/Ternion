ServerEvents.recipes(ternion => { 
    ternion.shaped('minecraft:oak_boat', [
        'P P',
        'PPP'
    ], {
        P: 'ars_nouveau:archwood_planks'
    }).id('ternion:minecraft/oak_boat_from_archwood')
})