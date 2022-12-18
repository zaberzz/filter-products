let filteredProduct = [...products];

const producContainer = document.querySelector(".products-container");

const displayProduct = () => {
  if (filteredProduct.length < 1) {
    producContainer.innerHTML = `<h6>Sorry, no products matched to your request</h6>`;
    return;
  }
  producContainer.innerHTML = filteredProduct
    .map(({ id, title, image, price }) => {
      return `  <article class="product" data-id="${id}">
    <img
      src="${image}"
      class="product-img img"
    />
    <footer>
      <h5 class="product-name">${title}</h5>
      <span class="product-price">$ ${price}</span>
    </footer>
  </article>`;
    })
    .join("");
};
displayProduct();

const form = document.querySelector(".input-form");
const searchInput = document.querySelector(".search-input");

form.addEventListener("keyup", () => {
  const inputValue = searchInput.value;
  filteredProduct = products.filter((product) => {
    return product.title.toLowerCase().includes(inputValue);
  });
  displayProduct();
});
