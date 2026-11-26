// 953261 Lab 2 — Kad Café daily report
// Run:  npm start
import { menu } from "./data/menu.js";
import { orders } from "./data/orders.js";
import { menuLine, orderTotal, averageOrder } from "./src/cafe.js";

console.log("=== Kad Café menu ===");
menu.forEach((item) => console.log(menuLine(item)));

console.log("\n=== Today's orders ===");
orders.forEach((order) =>
  console.log(`${order.id} ${order.customer} — ${orderTotal(order, menu)} THB`)
);

console.log("\n=== Summary ===");
const totalSales = orders
  .map((order) => orderTotal(order, menu))
  .reduce((acc, curr) => acc + curr, 0);
console.log(`Orders: ${orders.length}`);
console.log(`Total sales: ${totalSales} THB`);
console.log(`Average order: ${averageOrder(orders, menu)} THB`);

console.log("\n=== Cheapest available ===");
console.log(cheapestAvailable(menu));

// TODO (Part D): print the result of your own function (see the lab sheet).
// Task 11 — own function
export function cheapestAvailable(menu) {
  const available = menu.filter((item) => item.available);
  const prices = available.map((item) => item.price);
  const lowest = Math.min(...prices);
  return available.find((item) => item.price === lowest).name;
}