import { createApp } from "https://cdnjs.cloudflare.com/ajax/libs/vue/3.0.11/vue.esm-browser.js";
import pagination from "./pagination.js";

let productModal = null; // 定義接近全域變數
let delProductModal = null; // 定義接近全域變數

const app = createApp({
  data() {
    return {
      // 一律使用 function return 資料定義初始化都在這
      // 使用this.即可呼叫此處資料內容
      isNew: true,
      products: [], // 主要商品結構
      allproductsNum: "", // 合計商品數量
      tempProduct: {
        // 稍後調整資料使用的準備結構
        imagesUrl: [],
      },
      pagination: {},
    };
  },
  // 區域註冊
  components: {
    pagination,
  },
  mounted() {
    // 生命週期 → 元素掛載完成後觸發
    // 類似像 JS init() 初始化 第一個執行的函式
    // 取得 Token
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)hexToken\s*\=\s*([^;]*).*$)|^.*$/,
      "$1"
    );
    // 將 Token 夾帶至請請求(request) 的表頭(headers) 設定只需要一次
    axios.defaults.headers.common["Authorization"] = token;

    // Bootstrap Modal實體掛載
    productModal = new bootstrap.Modal(document.getElementById("productModal"));
    delProductModal = new bootstrap.Modal(
      document.getElementById("delProductModal")
    );

    this.loginCheck();
    this.getData();
  },
  methods: {
    // 函式的集合
    // 檢查使用者是否仍持續登入
    loginCheck() {
      axios
        .post(`${baseUrl}/api/user/check`)
        .then((res) => {
          if (res.data.success) {
            console.log("已確認為使用者本人登入");
          } else {
            alert("您尚未登入，請重新登入");
            // window.location = './index.html'
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // 取得產品列表
    getData(num = 1) {
      // 參數預設值
      axios
        .get(`${baseUrl}/api/${apiPath}/admin/products?page=${num}`)
        .then((res) => {
          if (res.data.success) {
            // this.products = res.data.products
            // this.pagination = res.data.pagination
            // 解構寫法
            const { products, pagination } = res.data;
            this.products = products;
            this.pagination = pagination;
            console.log(res.data);
            this.getAllproducts(); // 重新取得產品數量
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    // 刪除單筆商品
    deleteProduct() {
      axios
        .delete(
          `${baseUrl}/api/${apiPath}/admin/product/${this.tempProduct.id}`
        )
        .then((res) => {
          delProductModal.hide(); // 關掉 modal
          alert(`已刪除${this.tempProduct.title}商品`);
          this.getData();
        })
        .catch((error) => {
          console.log(error);
        });
    },
    // 開啟modal
    openModal(isNew, item) {
      // console.log(isNew, item)
      switch (isNew) {
        case "new":
          // 先將預設物件內容清空
          this.tempProduct = {
            imagesUrl: [],
          };
          this.isNew = true;
          productModal.show();
          break;
        case "edit":
          // 因為傳參考特性會連動到資料，因此將資料進行淺層複製
          this.tempProduct = { ...item };
          this.isNew = false;
          productModal.show();
          break;
        case "delete":
          // 因為傳參考特性會連動到資料，因此將資料進行淺層複製
          this.tempProduct = { ...item };
          // Modal需要拿到 title 和刪除按鈕時需要獲得 id
          delProductModal.show();
          break;
        default:
          break;
      }
    },
    // 新增陣列圖片
    createImages() {
      this.tempProduct.imagesUrl = [""];
    },
    // 於modal內按下確認按鈕時觸發
    updateProduct(tempProduct) {
      // 預設為 新增
      let apiUrl = `${baseUrl}/api/${apiPath}/admin/product/`;
      let httpMethod = "post";
      // 根據 isNew 來判斷要串接 post 或是 put API
      if (!this.isNew) {
        // 進入編輯狀態
        apiUrl = `${baseUrl}/api/${apiPath}/admin/product/${tempProduct.id}`;
        httpMethod = "put";
      }
      axios[httpMethod](apiUrl, { data: tempProduct }) // post 或 put
        .then((res) => {
          if (res.data.success) {
            productModal.hide(); // 關掉 modal
            this.getData(); // 重整畫面
          } else {
            alert(res.data.message);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    // 取得所有產品數量
    getAllproducts() {
      axios.get(`${baseUrl}/api/${apiPath}/admin/products/all`).then((res) => {
        this.allproductsNum = Object.values(res.data.products); // 將回傳的物件轉換為陣列
      });
    },
  },
  created() {
    // 元件生成，必定會執行的項目
  },
});

// 定義全域元件 須放置在 createApp 後方，mount之前
// 商品 Modal
app.component("productModal", {
  props: {
    tempProduct: {
      type: Object, // 驗證型別
      default() {
        return {};
      },
    },
  },
  template: `<div
  id="productModal"
  ref="productModal"
  class="modal fade"
  tabindex="-1"
  aria-labelledby="productModalLabel"
  aria-hidden="true"
>
  <div class="modal-dialog modal-xl modal-dialog-centered">
    <div class="modal-content border-0">
      <div class="modal-header bg-success text-white">
        <h5 id="productModalLabel" class="modal-title">
          <span>新增產品</span>
        </h5>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        ></button>
      </div>
      <div class="modal-body">
        <div class="row">
          <div class="col-sm-4">
            <div class="mb-1">
              <div class="form-group">
                <label for="imageUrl">輸入圖片網址</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="請輸入圖片連結"
                  v-model.trim="tempProduct.imageUrl"
                />
                <img
                  class="img-fluid my-3"
                  :src="tempProduct.imageUrl"
                  :alt="tempProduct.title"
                />
              </div>
            </div>
            <div class="mb-1">多圖新增</div>
            <!-- 大寫開頭 建構函式 -->
            <div v-if="Array.isArray(tempProduct.imagesUrl)">
              <div
                class="mb-4"
                v-for="(item,index) in tempProduct.imagesUrl"
                :key="'addImage'+index"
              >
                <div class="form-group">
                  <label for="imageUrl">輸入圖片網址</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="請輸入圖片連結"
                    v-model="tempProduct.imagesUrl[index]"
                  />
                  <img class="img-fluid my-3" :src="item" alt />
                  <div class="mb2">
                    <button
                      class="btn btn-outline-danger btn-sm d-block w-100"
                      @click="tempProduct.imagesUrl.splice(index,1)"
                    >
                      刪除圖片
                    </button>
                  </div>
                </div>
              </div>
              <div
                class="mt-4"
                v-if="!tempProduct.imagesUrl.length || tempProduct.imagesUrl[tempProduct.imagesUrl.length-1]"
              >
                <button
                  class="btn btn-outline-primary btn-sm d-block w-100"
                  @click="tempProduct.imagesUrl.push('')"
                >
                  新增圖片
                </button>
              </div>
            </div>
            <div v-else>
              <div class="mb-2">
                <button
                  class="btn btn-outline-primary btn-sm d-block w-100"
                  @click="createImages"
                >
                  新增(陣列)圖片
                </button>
              </div>
            </div>
          </div>
          <div class="col-sm-8">
            <div class="form-group">
              <label for="title">標題</label>
              <input
                id="title"
                type="text"
                class="form-control"
                placeholder="請輸入標題"
                v-model.trim="tempProduct.title"
              />
            </div>

            <div class="row">
              <div class="form-group col-md-6">
                <label for="category">分類</label>
                <input
                  id="category"
                  type="text"
                  class="form-control"
                  placeholder="請輸入分類"
                  v-model="tempProduct.category"
                />
              </div>
              <div class="form-group col-md-6">
                <label for="unit">單位(個、台、隻...)</label>
                <input
                  id="unit"
                  type="text"
                  class="form-control"
                  placeholder="請輸入單位"
                  v-model="tempProduct.unit"
                />
              </div>
            </div>

            <div class="row">
              <div class="form-group col-md-6">
                <label for="origin_price">原價</label>
                <input
                  id="origin_price"
                  type="number"
                  min="0"
                  class="form-control"
                  placeholder="請輸入原價"
                  v-model.number="tempProduct.origin_price"
                />
              </div>
              <div class="form-group col-md-6">
                <label for="price">售價</label>
                <input
                  id="price"
                  type="number"
                  min="0"
                  class="form-control"
                  placeholder="請輸入售價"
                  v-model.number="tempProduct.price"
                />
              </div>
            </div>
            <hr />

            <div class="form-group">
              <label for="description">產品描述</label>
              <textarea
                id="description"
                type="text"
                class="form-control"
                placeholder="請輸入產品描述"
                v-model.trim="tempProduct.description"
              >
              </textarea>
            </div>
            <div class="form-group">
              <label for="content">說明內容</label>
              <textarea
                id="content"
                type="text"
                class="form-control"
                placeholder="請輸入說明內容"
                v-model.trim="tempProduct.content"
              >
              </textarea>
            </div>
            <div class="form-group">
              <div class="form-check">
                <input
                  id="is_enabled"
                  class="form-check-input"
                  type="checkbox"
                  :true-value="1"
                  :false-value="0"
                  v-model="tempProduct.is_enabled"
                />
                <label class="form-check-label" for="is_enabled"
                  >是否啟用</label
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <button
          type="button"
          class="btn btn-outline-secondary"
          data-bs-dismiss="modal"
        >
          取消
        </button>
        <button
          type="button"
          class="btn btn-primary"
          @click="$emit('update-product',tempProduct)"
        >
          確認
        </button>
      </div>
    </div>
  </div>
  </div>`,
  methods: {
    createImages() {
      this.tempProduct.imagesUrl = [""];
    },
  },
});

// 將 deleteModal x-template 元件化
app.component("delProductModal", {
  props: {
    anyName: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  template: "#delModal-template",
});
app.mount("#app");
