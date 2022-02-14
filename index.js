const state = {
  items: [
    {
      id: "001-beetroot",
      name: "beetroot",
      price: 0.35,
    },
    {
      id: "002-carrot",
      name: "carrot",
      price: 0.35,
    },
    {
      id: "003-apple",
      name: "apple",
      price: 0.35,
    },
    {
      id: "004-apricot",
      name: "apricot",
      price: 0.35,
    },
    {
      id: "005-avocado",
      name: "avocado",
      price: 0.35,
    },
    {
      id: "006-bananas",
      name: "bananas",
      price: 0.35,
    },
    {
      id: "007-bell-pepper",
      name: "bell pepper",
      price: 0.35,
    },
    {
      id: "008-berry",
      name: "berry",
      price: 0.35,
    },
    {
      id: "009-blueberry",
      name: "blueberry",
      price: 0.35,
    },
    {
      id: "010-eggplant",
      name: "eggplant",
      price: 0.35,
    },
  ],
  cart: [],
};

const storeItem = document.querySelector("#storeItem");

function render() {
  clear();
  renderStoreItem();
  renderCartItem();
  totalCartCalculator();
}

function clear() {
  storeItem.innerHTML = "";
  cartItem.innerHTML = "";
}

function renderStoreItem() {
  for (const item of state.items) {
    const li = document.createElement("li");
    storeItem.appendChild(li);

    const div = document.createElement("div");
    div.setAttribute("class", "store--item--icon");
    li.appendChild(div);

    const img = document.createElement("img");
    img.src = `assets/icons/${item.id}.svg`;
    img.alt = `${item.name}`;
    div.appendChild(img);

    const button = document.createElement("button");
    li.appendChild(button);
    button.innerText = "ADD TO CART";
    button.addEventListener("click", function () {
      const existingOrderItem = state.items.find((i) => i.item === item);
      if (existingOrderItem !== undefined) {
        existingOrderItem.quantity++;
      } else {
        state.cart.push({
          quantity: 1,
          item: item,
        });
      }
      total.innerText = "£" + totalCartCalculator();
      render()
    });
  }
}

const cartItem = document.querySelector("#cartList");

function renderCartItem() {
  for (const orderedItem of state.cart) {
    console.log("Oioiiii", orderedItem);

    const li = document.createElement("li");
    cartItem.append(li);

    const img = document.createElement("img");
    img.setAttribute("class", "cart--item-icon");
    img.src = `assets/icons/${orderedItem.item.id}.svg`;
    img.alt = `${orderedItem.item.name}`;
    li.append(img);

    const p = document.createElement("p");
    p.innerText = `${orderedItem.item.name}`;
    li.append(p);

    const removeButton = document.createElement("button");
    removeButton.setAttribute("class", "quantity-btn remove-btn center");
    removeButton.innerText = "-";
    removeButton.addEventListener("click", function () {
      orderedItem.quantity--;
      if (orderedItem.quantity === 0) {
        const orderedItemIndex = state.cart.findIndex((i) => i === orderedItem);
        state.cart.splice(orderedItemIndex, 1);
      }
  
      render();
    });
    li.append(removeButton);

    const textCenter = document.createElement("span");
    textCenter.setAttribute("class", "quantity-text center");
    textCenter.innerText = orderedItem.quantity;
    li.append(textCenter);

    const addButton = document.createElement("button");
    addButton.setAttribute("class", "quantity-btn add-btn center");
    addButton.innerText = "+";
    addButton.addEventListener("click", function () {
      orderedItem.quantity++;
      
      render();
    });
    li.append(addButton);
  }
}
const totalSection = document.querySelector("class", "total-section");
let total = document.querySelector("#totalNumber");

function totalCartCalculator() {
  let total = 0;
  for (const orderedItem of state.cart) {
    console.log("hello" , orderedItem.item.price)
    if (orderedItem) {
      total += orderedItem.item.price * orderedItem.quantity;
    } else {
      return total;
    }
  }
  return total.toFixed(2)
}

render();
