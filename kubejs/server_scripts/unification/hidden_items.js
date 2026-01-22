

ServerEvents.tags('item', e => {
    const items = [
        'oritech:silicon_block',
        'justdirethings:charcoal',
        'oritech:biosteel_block'
    ]
    items.forEach(item => {
        e.add('c:hidden_from_recipe_viewers', item)
    })
})