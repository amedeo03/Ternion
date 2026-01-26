ItemEvents.modification(ternion => {
    Ingredient.of('#c:tools').itemIds.forEach(id => {
		console.log(id)
        ternion.modify(id, item => {
			if (item.maxDamage > 0) {
				console.log(item.maxDamage)
				item.maxDamage(item.maxDamage*2)
			}
        })
  	})
})
