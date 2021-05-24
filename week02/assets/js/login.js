// dom
const usernameInput = document.querySelector('#username')
const passwordInput = document.querySelector('#password')
const loginBtn = document.querySelector('#login')

loginBtn.addEventListener('click', login)

// 取得 Token
// 將 Token 存到 Cookie
function login(e) {
  // 取消重新載入頁面按鈕事件
  e.preventDefault()
  const username = usernameInput.value
  const password = passwordInput.value
  // 使用語法糖簡寫(因為 value 與 key 名稱一模一樣，可以簡寫)
  const loginData = {
    username,
    password,
  }
  axios
    .post(`${baseUrl}/admin/signin`, loginData)
    .then((res) => {
      if (res.data.success) {
        // const token = res.data.token;
        // const expired = res.data.expired;
        // 使用解構
        const { token, expired } = res.data
        document.cookie = `hexToken=${token}; expires=${new Date(
          expired
        )}; path=/`
        // 跳轉至 products.html 頁面
        window.location = 'products.html'
        console.log(res)
      } else {
        // 輸入資料錯誤報錯提醒
        alert(res.data.message)
      }
    })
    // axios報錯
    .catch((error) => {
      console.log(error)
    })
}
