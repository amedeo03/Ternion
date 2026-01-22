ServerEvents.recipes(ternion => { 
    const crafting_recipes = [
        'farmersdelight:basket',
        'oritech:nickel_ingot',
        'xycraft:shaped/sticky_piston_tagged',
        'aether:swet_sticky_piston',
        'twilightforest:sticky_piston_maze_ver',
        'twilightforest:sticky_piston_maze_ver',
        'minecraft:dispenser',
        'xycraft:shaped/lead_tagged',
        'aether:swet_lead',
        'twilightforest:lead_maze_ver',
        'minecraft:observer',
        'minecraft:stick_from_bamboo_item',
        'evenbetternether:mushroom_stick_recipe',
        'aether:moa_egg_pumpkin_pie',
        'framedblocks:framed_sliced_sloped_stairs_slab',
        'enderscape:purpur_stairs',
        'minecraft:cake',
        'aether:moa_egg_cake',
        'aether:skyroot_milk_bucket_moa_egg_cake',
        'malum:copper_ingot_from_nugget',
        'minecraft:lever',
        'ars_additions:crafting/buttons/polished_sourcestone_button',
        'framedblocks:framed_vertical_sliced_sloped_stairs_panel',
        'endermanoverhaul:ender_eye',
        'endermanoverhaul:ender_pearl',
        'minecraft:scaffolding',
        'farmersdelight:scaffolding_from_canvas',
        'cataclysm:purpur_wall',
        'enderscape:purpur_slab',
        'oritech:platinum_ingot',
        'twilightforest:magma_cream_maze_ver',
        'minecraft:dropper',
        'minecraft:piston',
        'aether:skyroot_piston',
        'oritech:silicon_blockblockinv',
        'aether:skyroot_tripwire_hook',
        'aether:skyroot_grindstone',
        'aether:skyroot_loom',
        'aether:skyroot_note_block',
        'aether:skyroot_zanite_vanilla_shield',
        'aether:skyroot_iron_vanilla_shield',
        'aether:skyroot_stick',
        'aether:skyroot_fletching_table',
        'aether:skyroot_crafting_table',
        'aether:skyroot_barrel',
        'aether:skyroot_chest',
        'aether:skyroot_beehive',
        'aether:skyroot_cartography_table',
        'aether:skyroot_gravitite_jukebox',
        'aether:skyroot_bookshelf',
        'aether:skyroot_jukebox',
        'aether:skyroot_bucket',
        'aether:skyroot_smithing_table',
        'aether:skyroot_milk_bucket_cake'
    ]

    const smelting_recipes = [
        'mekanism:processing/osmium/ingot/from_ore_smelting',
        'mekanism:processing/lead/ingot/from_ore_smelting',
        'mekanism:processing/tin/ingot/from_ore_smelting',
        'mekanism:processing/uranium/ingot/from_ore_smelting',
        'mynethersdelight:boiled_egg_cooking'
    ]

    const blasting_recipes = [
        'mekanism:processing/osmium/ingot/from_ore_blasting',
        'mekanism:processing/lead/ingot/from_ore_blasting',
        'mekanism:processing/tin/ingot/from_ore_blasting',
        'mekanism:processing/uranium/ingot/from_ore_blasting'
    ]

    const smoking_recipes = [
        'mynethersdelight:boiled_egg_from_smoking'
    ]

    const custom_recipes = [
        'oritech:pulverizer/biosteel',
        'oritech:grinder/biosteel'
    ]

    const recipes = crafting_recipes.concat(smelting_recipes,
                                            blasting_recipes,
                                            smoking_recipes,
                                            custom_recipes
                                        )

    recipes.forEach(recipe => {
        ternion.remove({ id: recipe})
    })
})