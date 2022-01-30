// priority: 0

console.info('Hello, World! (You will only see this line once in console, during startup)')

onEvent('item.registry', event => {
	event.create('coin1', item => {
		item.displayName("Common Coins")
		item.texture("kubejs:item/common_coin")
		item.rarity(Rarity.COMMON)
	})

	event.create('coin2', item => {
		item.displayName("Uncommon Coins")
		item.texture("kubejs:item/uncommon_coin")
		item.rarity(Rarity.UNCOMMON)
	})

	event.create('coin3', item => {
		item.displayName("Rare Coins")
		item.texture("kubejs:item/rare_coin")
		item.rarity(Rarity.RARE)
	})

	event.create('coin4', item => {
		item.displayName("Epic Coins")
		item.texture("kubejs:item/epic_coin")
		item.rarity(Rarity.EPIC)
	})

	event.create('coin5', item => {
		item.displayName("Legendary Coins")
		item.texture("kubejs:item/legendary_coin")
		item.rarity(Rarity.EPIC)
	})

	event.create('gilded_leaf', item => {
		item.displayName("Gilded Leaf")
		item.texture("kubejs:item/gilded_leaf")
	})

	event.create('prestige_gem', item => {
		item.displayName("Prestige Gem")
		item.texture("kubejs:item/prestige_gem")
	})
})

onEvent('block.registry', event => {
	// Register new blocks here
	// event.create('example_block').material('wood').hardness(1.0).displayName('Example Block')
})