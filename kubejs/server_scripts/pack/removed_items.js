const categories = [
    /^sophisticatedstorage:limited_/,
    /^sophisticatedstorage:.*shulker_box$/,
]

ServerEvents.recipes(ternion => {
    categories.forEach(category =>
        ternion.remove({ output: category})
    )
    ternion.remove
})

ServerEvents.tags('item', ternion => {
    categories.forEach(category => {
        ternion.add('c:hidden_from_recipe_viewers', category)
    })
})
