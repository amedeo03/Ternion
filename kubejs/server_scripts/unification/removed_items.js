const items = [
        'oritech:silicon_block',
        'justdirethings:charcoal',
        'oritech:biosteel_block',
        'reliquary:mob_charm_fragment',
        'reliquary:mob_charm',
        'reliquary:mob_charm_belt',
        'aether:skyroot_sword',
        'aether:skyroot_axe',
        'aether:skyroot_shovel',
        'aether:skyroot_pickaxe',
        'aether:skyroot_hoe',
        'aether:skyroot_bed',
]

ServerEvents.recipes(ternion => {
    items.forEach(item =>
        ternion.remove({ output: item})
    )
    ternion.remove
})

ServerEvents.tags('item', ternion => {
    items.forEach(item => {
        ternion.add('c:hidden_from_recipe_viewers', item)
    })
})

