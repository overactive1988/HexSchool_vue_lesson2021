//dom
const domProducts = document.querySelector('.productWrap')
const domSelect = document.querySelector('.productSelect')

//変数
let product = []
let total = ''
let cartItems = []
let cartId = ''

// product --start--//

function init() {
  getProduct()
  getCartData()
}

init()

// getProduct
function getProduct() {
  let url = `${baseUrl}/api/livejs/v1/customer/${apiPath}/products`
  axios
    .get(url)
    .then(function (response) {
      product = response.data.products
      renderProduct()
    })
    .catch(function (error) {
      console.log(error)
    })
}

// renderProduct
function renderProduct() {
  let listStr = ''
  product.forEach(function (item) {
    listStr += `<li class="productCard">
  <h4 class="productType">新品</h4>
  <img src="${item.images}" alt="${item.title}">
  <a href="#" data-id="${item.id}" id="addCardBtn">加入購物車</a>
  <h3>${item.title}</h3>
  <del class="originPrice">NT$${item.origin_price}</del>
  <p class="nowPrice">NT${item.price}</p>
  </li>`
  })
  domProducts.innerHTML = listStr
}

// product --end--//

// cart --start--//

// getCartData
function getCartData() {
  let url = `${baseUrl}/api/livejs/v1/customer/${apiPath}/carts`
  axios
    .get(url)
    .then(function (res) {
      total = res.data.finalTotal
      cartItems = res.data.carts
      renderCart()
    })
    .catch(function (err) {
      console.log(err)
    })
}

// renderCart
function renderCart() {
  let cartItemStr = ''
  let strHead = `<tbody><tr><th width="40%">品項</th><th width="15%">單價</th><th width="15%">數量</th><th width="15%">金額</th><th width="15%"></th></tr>`
  let strFooter = `<tr><td><a href="#" class="discardAllBtn">刪除所有品項</a></td><td></td><td></td><td><p>總金額</p></td><td>NT$${total}</td></tr></tbody>`
  cartItems.forEach(function (item) {
    cartItemStr += `
      <tr>
        <td>
          <div class="cardItem-title">
            <img src="${item.product.images}" alt="${item.product.title}">
            <p>${item.product.title}</p>
          </div>
        </td>
        <td>NT$${item.product.price}</td>
        <td>${item.quantity}</td>
        <td>NT$${item.product.price}</td>
        <td class="discardBtn">
          <a href="#" data-cartid="${item.id}" class="material-icons">
            clear
          </a>
        </td>
      </tr>
        `
  })
  domCart.innerHTML = `${strHead}${cartItemStr}${strFooter}`
}

// deleteCartDataAll
function deleteCartDataAll() {
  let url = `${baseUrl}/api/livejs/v1/customer/${apiPath}/carts`
  axios
    .delete(url)
    .then(function (res) {
      alert('已清空購物車')
      getCartData()
    })
    .catch(function (err) {
      console.log(err)
    })
}

// deleteCartDatagetCartData
function deleteCartDatagetCartData() {
  let url = `${baseUrl}/api/livejs/v1/customer/${apiPath}/carts/${cartId}`
  axios
    .delete(url)
    .then(function (res) {
      alert('已成功刪除該訂單')
      getCartData()
    })
    .catch(function (err) {
      console.log(err)
    })
}

// cart --end--//

// 監聽下訂單
const orderForm = document.querySelector('.orderInfo-form')
orderForm.addEventListener('click', function (e) {
  e.preventDefault()
  if (e.target.getAttribute('class') !== 'orderInfo-btn') {
    return
  }
  order()
})
// order --start--//
function order() {
  let url = `${baseUrl}/api/livejs/v1/customer/${apiPath}/orders`
  const orderName = document.querySelector('#customerName')
  const orderPhone = document.querySelector('#customerPhone')
  const orderMail = document.querySelector('#customerEmail')
  const orderAddress = document.querySelector('#customerAddress')
  const orderTradeWay = document.querySelector('#tradeWay')
  let order = {
    data: {
      user: {
        name: orderName.value,
        tel: orderPhone.value,
        email: orderMail.value,
        address: orderAddress.value,
        payment: orderTradeWay.value,
      },
    },
  }
  axios
    .post(url, order)
    .then(function (res) {
      alert('已完成下訂，謝謝您的購買')
      getCartData()
      orderName.value = ''
      orderPhone.value = ''
      orderMail.value = ''
      orderAddress.value = ''
    })
    .catch(function (err) {
      console.log(err)
    })
}

// order --end--//

// 監聽 select
domSelect.addEventListener('change', function (e) {
  let searchStr = ''
  product.forEach(function (item) {
    if (e.target.value == '全部') {
      getProduct()
    } else if (e.target.value == item.category) {
      searchStr += `<li class="productCard">
          <h4 class="productType">新品</h4>
          <img src="${item.images}" alt="${item.title}">
          <a href="#" data-id="${item.id}" id="addCardBtn">加入購物車</a>
          <h3>${item.title}</h3>
          <del class="originPrice">NT$${item.origin_price}</del>
          <p class="nowPrice">NT${item.price}</p>
          </li>`
    }
  })
  domProducts.innerHTML = searchStr
})

// 監聽 addCart
domProducts.addEventListener('click', function (e) {
  product.forEach(function (item) {
    if (e.target.getAttribute('data-id') == item.id) {
      e.preventDefault()
      let url = `${baseUrl}/api/livejs/v1/customer/${apiPath}/carts`
      let addCart = {
        data: {
          productId: item.id,
          quantity: 1,
        },
      }
      axios
        .post(url, addCart)
        .then(function (res) {
          alert('加入購物車成功')
          getCartData()
        })
        .catch(function (err) {
          console.log(err)
        })
    } else {
      return
    }
  })
})

// 監聽 deleteCartAll
const domCart = document.querySelector('.shoppingCart-table')
domCart.addEventListener('click', function (e) {
  cartId = e.target.dataset.cartid
  if (e.target.getAttribute('class') == 'discardAllBtn') {
    e.preventDefault()
    deleteCartDataAll()
  } else if (e.target.getAttribute('class') == 'material-icons') {
    e.preventDefault()
    deleteCartDatagetCartData()
  }
  return
})
