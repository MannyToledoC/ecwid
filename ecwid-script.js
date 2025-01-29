Ecwid.OnAPILoaded.add(function() {
	Ecwid.OnPageLoaded.add(function(page) {
    if (page.type == "PRODUCT") {
      console.log(
        `
        Page loaded!
        Ecwid store ID is: ${Ecwid.getOwnerId()}
        Product ID is: ${page.productId}
        `
      )
      Ecwid.Product.get((product) => {
        console.log(product.variations)
      })
    }
	})
})
