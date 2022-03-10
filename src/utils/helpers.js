export const formatPrice = (number) => {
  const newNumber = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(number / 100);
  return newNumber;
};
export const getUniqueValues = (data, type) => {
  let unique = data.map((item) => item[type]);

  if (type === "colors") {
    //flat() 函數以遞迴方式將特定深度的子陣列重新串接成為一新的陣列
    unique = unique.flat();
  }
  //Set 物件可讓你儲存任何類型的唯一值（unique）
  // Use to remove duplicate elements from the array
  //https://www.codegrepper.com/code-examples/javascript/new+set%28%29+javascript
  return ["all", ...new Set(unique)];
};
