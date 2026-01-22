ServerEvents.recipes(ternion => { 
    ternion.remove({ id: 'handcrafted:wood_plate'})
    ternion.shaped('handcrafted:wood_plate',
        [
            'X X',
            'XXX'
        ],
        {
            X: '#minecraft:wooden_slabs'
        }
    )
    .id('handcrafted:wood_plate')
    
    ternion.replaceInput(
        { id: 'malum:runic_tainted_rock_bricks_wall' },
        'malum:tainted_rock_bricks',
        'malum:runic_tainted_rock_bricks'
    )

    ternion.replaceInput(
        { id: 'malum:runic_twisted_rock_tiles_wall' },
        'malum:twisted_rock_tiles',
        'malum:runic_twisted_rock_tiles'
    )

    ternion.replaceInput(
        { id: 'malum:runic_twisted_rock_bricks_wall' },
        'malum:twisted_rock_bricks',
        'malum:runic_twisted_rock_bricks'
    )

    ternion.replaceInput(
        { id: 'malum:runic_small_twisted_rock_bricks_wall' },
        'malum:small_twisted_rock_bricks',
        'malum:runic_small_twisted_rock_bricks'
    )

    ternion.replaceInput(
        { id: 'malum:runic_small_tainted_rock_bricks_wall' },
        'malum:small_tainted_rock_bricks',
        'malum:runic_small_tainted_rock_bricks'
    )

    ternion.replaceInput(
        { id: 'malum:runic_tainted_rock_tiles_wall' },
        'malum:tainted_rock_tiles',
        'malum:runic_tainted_rock_tiles'
    )

    ternion.shaped('cataclysm:chiseled_purpur_block',
        [
            'XX'
        ],
        {
            X: 'minecraft:purpur_slab'
        }
    )
    .id('cataclysm:chiseled_purpur_block')
})