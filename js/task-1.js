const categories = document.querySelectorAll("#categories .item");

console.log(`Number of categories: ${categories.length}`);

categories.forEach((category) => {
  const title = category.querySelector("h2").textContent;
  const numCategoryEl = category.querySelectorAll("li").length;
  console.log(`Category: ${title}`);
  console.log(`Elements: ${numCategoryEl}`);
});