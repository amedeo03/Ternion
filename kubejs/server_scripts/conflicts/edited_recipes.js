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

    ternion.shaped('aether:skyroot_bucket',
        [
            'X X',
            ' X '
        ],
        {
            X: 'aether:skyroot_log'
        }
    )
    .id('aether:skyroot_bucket')

    // handcrafted colored sheets 
    Color.DYE.forEach(color => {
        let recipe_id = 'handcrafted:' + color + '_sheet'
        let needed_input = 'minecraft:' + color + '_carpet'
        ternion.remove({ id: recipe_id})
        ternion.shaped('3x ' + recipe_id,
        [
            'XXX',
        ],
        {
            X: needed_input
        }
    )
    .id(recipe_id)
    })

    // regions unexplored colored planks
    Color.DYE.forEach(color => {
        let recipe_id = 'regions_unexplored:' + color + '_painted_planks'
        let needed_input = 'minecraft:' + color + '_dye'
        ternion.remove({ id: recipe_id})
        ternion.shaped('8x ' + recipe_id,
        [
            'PPP',
            'PXP',
            'PPP'
        ],
        {
            P: '#minecraft:planks',
            X: needed_input
        }
    )
    .id(recipe_id)
    })

    ternion.remove({ id: 'regions_unexplored:blackstone_cluster'})
    ternion.shapeless('regions_unexplored:blackstone_cluster', ['minecraft:blackstone']).id('regions_unexplored:blackstone_cluster')

    ternion.replaceInput(
        { id: 'betterend:end_stone_brick_cracked_wall' },
        'minecraft:end_stone_bricks',
        'betterend:end_stone_brick_cracked'
    )

    ternion.replaceInput(
        { id: 'betterend:end_stone_brick_weathered_wall' },
        'minecraft:end_stone_bricks',
        'betterend:end_stone_brick_weathered'
    )

    ternion.remove({ id: 'cataclysm:obsidian_bricks' })
    ternion.shapeless('cataclysm:obsidian_bricks', ['betternether:obsidian_bricks']).id('cataclysm:obsidian_bricks')

    
    ternion.remove({ id: 'regions_unexplored:yellow_dye_from_tall_yellow_bioshroom' })
    ternion.shapeless('minecraft:yellow_dye', ['regions_unexplored:yellow_bioshroom']).id('regions_unexplored:yellow_dye_from_yellow_bioshroom')
})
