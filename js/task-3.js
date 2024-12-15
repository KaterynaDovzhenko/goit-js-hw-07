const fieldInput = document.querySelector("#name-input");
const fieldOutput = document.querySelector("#name-output");

fieldInput.addEventListener("input", () => {
  const trimmedValue = fieldInput.value.trim();
  fieldOutput.textContent = trimmedValue === "" ? "Annonymus" : trimmedValue;
});
