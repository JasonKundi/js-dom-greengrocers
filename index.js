const state = {
  items: [
    {
      id: "001-beetroot",
      name: "beetroot",
      price: 0.35
    },
    {
      id: "002-carrot",
      name: "carrot",
      price: 0.35
    },
    {
      id: "003-apple",
      name: "apple",
      price: 0.35
    },
    {
      id: "004-apricot",
      name: "apricot",
      price: 0.35
    },
    {
      id: "005-avocado",
      name: "avocado",
      price: 0.35
    },
    {
      id: "006-bananas",
      name: "bananas",
      price: 0.35
    },
    {
      id: "007-bell-pepper",
      name: "bell pepper",
      price: 0.35
    },
    {
      id: "008-berry",
      name: "berry",
      price: 0.35
    },
    {
      id: "009-blueberry",
      name: "blueberry",
      price: 0.35
    },
    {
      id: "010-eggplant",
      name: "eggplant",
      price: 0.35
    }
  ],
  cart: []
};




function renderStoreItem() {
  const storeItem = document.querySelector("ul")
  storeItem.setAttribute("class", "item-list store--item-list" )

  for (const item of state.items) {
    const li = document.createElement("li")
    storeItem.appendChild(li)

    const div = document.createElement("div")
    div.setAttribute("class", "store--item--icon")
    li.appendChild(div)

    const img = document.createElement("img")
    img.src = `assets/icons/${item.id}.svg`
    img.alt = `${item.name}`
    div.appendChild(img)

    const button = document.createElement("button")
    li.appendChild(button)
    button.innerText = "ADD TO CART"
    
  }
  button.addEventListener('click', function(item) {
    cart.push(item)
  })
}


function renderCartItem() {

  const cartItemContainer = document.createElement("div")
  cartItemContainer.setAttribute("class", "cart--item-list-container")

  const cartItem = document.createElement("ul")
  cartItem.setAttribute("class", "item-list cart--item-list")
  cartItemContainer.appendChild(cartItem)

  const li = document.createElement("li")
  cartItem.appendChild("li")

  const img = document.createElement("img")
    img.src = `assets/icons/${item.id}.svg`
    img.alt = `${item.name}`
    li.appendChild(img)

    const p = document.createElement("p")
    p.innerText = `${item.name}`
    img.appendChild(p)

    const removeButton = document.createElement("button")
    removeButton.setAttribute("class", "quantity-btn remove-btn center")
    removeButton.innerText = "-"
    p.appendChild(removeButton)

    const textCenter = document.createElement("span")
    textCenter.setAttribute("class", "quantity-text center")
    removeButton.appendChild(textCenter)

    const addButton = document.createElement("button")
    addButton.setAttribute("class", "quantity-btn add-btn center")
    addButton.innerText = "+"
    textCenter.appendChild(addButton)

    cart.append(cartItemContainer)



}


renderStoreItem()
shoppingCart()