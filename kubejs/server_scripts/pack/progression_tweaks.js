ServerEvents.recipes(ternion => {
    // tech goals

    // rftools builder
    ternion.remove({ id: 'rftoolsbuilder:builder'})
    ternion.shaped('rftoolsbuilder:builder',
        [
            'LEL',
            'MCM',
            'PPP'
        ],
        {
            C: 'industrialforegoing:machine_frame_simple',
            E: 'mekanism:basic_energy_cube',
            P: 'minecraft:iron_pickaxe',
            M: 'oritech:motor',
            L: '#c:plastics'
        }
    )
    .id('rftoolsbuilder:builder')

    // infinity ME energy cell
    ternion.shaped('ae2:creative_energy_cell',
        [
            'BRB',
            'MCM',
            'FFF'
        ],
        {
            C: 'industrialforegoing:machine_frame_advanced',
            M: 'mekanism:ultimate_energy_cube',
            F: 'ae2:fluix_block',
            R: 'ae2:energy_card',
            B: 'ae2:fluix_glass_cable'
        }
    )
    .id('ae2:creative_energy_cell')

    // infinity energy cube
    ternion.shaped('mekanism:creative_energy_cube[mekanism:energy={energy_containers:[L;9223372036854775807L]}]',
        [
            'CCC',
            'CGC',
            'CEC'
        ],
        {
            G: 'industrialforegoing:mycelial_reactor',
            C: 'mekanism:sps_casing',
            E: 'ae2:creative_energy_cell'
        }
    )
    .id('mekanism:creative_energy_cube')

    // magic goals
    ternion.remove({ id: 'enchantinginfuser:advanced_enchanting_infuser'})
    ternion.remove({ id: 'enchantinginfuser:enchanting_infuser'})

    // exploration goals

})