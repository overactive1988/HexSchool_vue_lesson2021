// 初始化行為
const app = {
  data: {
    products: [],
  },
  // 取得產品列表
  getData() {
    axios.get(`${baseUrl}/api/${apiPath}/admin/products`).then((res) => {
      if (res.data.success) {
        this.data.products = res.data.products
        console.log(this.data.products)
        this.render()
      }
    })
  },
  // 將產品列表渲染至頁面
  render() {
    const productsDom = document.querySelector('#productList')
    // 計算目前有幾項商品
    const countDom = document.querySelector('#productCount')
    let conts = ''
    conts += this.data.products.length
    countDom.textContent = conts
    // let = template = ''
    // this.data.products.forEach((item) => {
    //   template += `
    //     <tr>
    //     <td>${item.title}</td>
    //     <td>${item.origin_price}</td>
    //     <td>${item.price}</td>
    //     <td>${item.is_enabled}</td>
    //     <td><button data-id="${item.id}" class="deleteBtn" type="button">刪除商品</button></td>
    //   </tr>
    //     `
    // })
    const template = this.data.products
      .map(
        (item) => `
    <tr>
    <td><img class="product-img" src="${item.imageUrl} alt="${item.title}"</td>
    <td>${item.title}</td>
    <td>${item.origin_price}</td>
    <td>${item.price}</td>
    <td>${item.is_enabled}</td>
    <td><button data-id="${item.id}" id="deleteBtn" type="button">刪除商品</button></td>
  </tr>`
      )
      .join('') // 加入 join('') 去掉中間逗號
    productsDom.innerHTML = template

    // 刪除按鈕DOM元素定義
    // 因為 dom 元素是於 innerHTML 之後才生成，所以如果要抓取刪除按鈕
    // 需要將 const 寫在 productsDom.innerHTML = template 之後
    const deleteBtns = document.querySelectorAll('#deleteBtn')
    // 若需要將類陣列轉為純陣列 則輸入[...類陣列] 例如: [...deleteBtns]
    deleteBtns.forEach((item) => {
      item.addEventListener('click', this.deleteProducts.bind(this))
    })
  },
  // 刪除單筆商品
  deleteProducts(e) {
    // 事件物件概念 事件物件展開後，裡面的 target → dataset → id
    e.preventDefault()
    // 透過 id 來刪除特定品項
    const id = e.target.dataset.id
    axios
      .delete(`${baseUrl}/api/${apiPath}/admin/product/${id}`)
      .then((res) => {
        // 重新取得商品列表並渲染
        // app.getData()
        // 可使用 bind(this) 強制綁定 this(在vue裡面較少遇到)
        this.getData()
      })
  },
  // 初始化頁面
  init() {
    // 取得 Token
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)hexToken\s*\=\s*([^;]*).*$)|^.*$/,
      '$1'
    )
    // 將 Token 夾帶至請請求(request) 的表頭(headers) 設定只需要一次
    axios.defaults.headers.common['Authorization'] = token

    // 檢查使用者是否仍持續登入
    axios
      .post(`${baseUrl}/api/user/check`)
      .then((res) => {
        if (res.data.success) {
          console.log('確認使用者仍持續登入')
        } else {
          console.log('非使用者本人')
        }
      })
      .catch((err) => {
        console.log(err)
      })

    this.getData()
  },
}
// 執行初始化
app.init()
