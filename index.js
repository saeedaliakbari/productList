const btnAddProduct = document.querySelector(".btn-add-product");
const btnAddCategroy = document.querySelector(".btn-add-category");
const btnSaveCategory = document.querySelector(".addCategory .btn-add");
const btnCancelCategory = document.querySelector(".addCategory .btn-cancel");
const btnSaveProduct = document.querySelector(".addProduct .btn-add");
const btnCancelProdcut = document.querySelector(".addProduct .btn-cancel");

const modalAddProduct = document.querySelector(".modal-add-product");
const modalAddCategory = document.querySelector(".modal-add-category");

const panelAddProdcut = document.querySelector(".addProduct");
const panelAddCategory = document.querySelector(".addCategory");

const inputAddCategory = document.querySelector("#category-input");
const inputAddProduct = document.querySelector("#product-input");

const comboCategory = document.querySelector(".combo-category");

const listProducts = document.querySelector(".product-list");

btnAddProduct.addEventListener("click", showAddProduct);
btnAddCategroy.addEventListener("click", showAddCategory);
btnSaveCategory.addEventListener("click", addNewCategory);
btnCancelCategory.addEventListener("click", closePanelCategory);
btnSaveProduct.addEventListener("click", addNewProduct);
btnCancelProdcut.addEventListener("click", closePanelProduct);
document.addEventListener("DOMContentLoaded", loadApp);

function showAddProduct() {
  modalAddProduct.style.display = "flex";
  panelAddProdcut.style.opacity = "1";
  panelAddProdcut.style.top = "10%";
  loadCategory();
}

function showAddCategory() {
  modalAddCategory.style.display = "flex";
  panelAddCategory.style.opacity = "1";
  panelAddCategory.style.top = "10%";
}

function closePanelProduct() {
  modalAddProduct.style.display = "none";
  panelAddProdcut.style.opacity = "0";
  panelAddProdcut.style.top = "-100%";
}
function closePanelCategory() {
  modalAddCategory.style.display = "none";
  panelAddCategory.style.opacity = "0";
  panelAddCategory.style.top = "-100%";
}
function addNewProduct() {
  if (inputAddProduct.value.length !== 0)
    addProductInLS(inputAddProduct.value, comboCategory.value);
  inputAddProduct.value = "";
  listProducts.innerHTML = "";
  loadApp();
}
function addNewCategory() {
  if (inputAddCategory.value.length !== 0)
    addCategroyInLS(inputAddCategory.value);
  inputAddCategory.value = "";
}

function addCategroyInLS(categroy) {
  const lsCategroy = localStorage.getItem("category")
    ? JSON.parse(localStorage.getItem("category"))
    : [];
  lsCategroy.push(categroy);
  localStorage.setItem("category", JSON.stringify(lsCategroy));
}

function loadCategory() {
  const lsCategroy = localStorage.getItem("category")
    ? JSON.parse(localStorage.getItem("category"))
    : [];
  let combo = "";
  lsCategroy.forEach((categroy) => {
    combo += ` <option value="${categroy}">${categroy}</option>`;
  });
  comboCategory.innerHTML = combo;
}

function addProductInLS(product, category) {
  const lsProduct = localStorage.getItem("product")
    ? JSON.parse(localStorage.getItem("product"))
    : [];
  lsProduct.push({ product, category });
  localStorage.setItem("product", JSON.stringify(lsProduct));
}

function loadApp() {
  console.log(listProducts);
  const div = document.createElement("div");
  div.classList.add("product-header");
  div.innerHTML = ` 
    <p>Name</p>
        <p>Category</p>
    `;
  listProducts.appendChild(div);
  const lsProduct = localStorage.getItem("product")
    ? JSON.parse(localStorage.getItem("product"))
    : [];
  lsProduct.forEach((product) => {
    const div = document.createElement("div");
    div.classList.add("product");
    div.innerHTML = ` 
    <p>${product.product}</p>
    <p>${product.category}</p>
    `;
    listProducts.appendChild(div);
  });
}
