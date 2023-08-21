const axios = require("axios");

axios.get({ $baseUrl } + "/products?id=eq.1").then((res) => {
  console.log(res.data);
});

// let postData = {
//   id: 78,
//   product_name: "Saffaron",
//   discontinued: 0,
//   supplier_id: 12,
//   category_id: 2,
//   quantity_per_unit: "20 mg",
//   unit_price: 100,
//   units_in_stock: 50,
//   units_on_order: 0,
//   reorder_level: 10,
// };
// axios
//   .post("https://nw.rayvarz.center/api/products", postData, {
//     headers: { "Content-Type": "application/json" },
//   })
//   .then((res) => {
//     console.log("pre posted before Patch request");
//   });
