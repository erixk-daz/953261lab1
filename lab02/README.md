# 953261 Lab 2 — Kad Café (Modern JavaScript)

| | |
|---|---|
| **Name** | _Zwe Satt Aung_ |
| **Nickname** | _Erick_ |
| **Student ID** | _692115514_ |
| **Section** | 701 |

## How to run

```bash
cd lab02
npm run warmup  
✅ Bug 1  triple(4)
✅ Bug 2  shout(['mint', 'nont'])
✅ Bug 3  addBonus(70)
✅ Bug 4  addPrices('40', '5')
✅ Bug 5  average([2, 4, 9]) # Part B
npm test      
   ✔ Task 1  menuNames returns every name in order (0.392958ms)
✔ Task 2  availableItems keeps only available items (0.070833ms)
✔ Task 3  findItem finds by id, undefined when missing (0.046459ms)
✔ Task 4  availableIn returns names of available items in a category (0.312792ms)
✔ Task 5  menuLine formats one line for the menu board (0.056584ms)
✔ Task 6  withDiscount returns a new item and leaves the original alone (0.061833ms)
✔ Task 7  orderTotal adds price × qty for every line (0.055291ms)
✔ Task 8  averageOrder averages all order totals (0.056333ms)
✔ Rules  src/cafe.js uses array methods, not for/while loops (0.263375ms)
✔ Rules  the menu data was not changed (no mutation) (0.1085ms)
✔ Stretch 9   bestSeller returns the most-ordered item name (0.051416ms)
✔ Stretch 10  namesByCategory groups names by category (0.265833ms)
   # Part C
=== Kad Café menu ===
Thai Iced Tea — 45 THB
Americano — 55 THB
Iced Latte — 65 THB
Butterfly Pea Soda — 50 THB (sold out)
Khao Soi — 70 THB
Basil Chicken Rice — 60 THB
Sai Ua Sandwich — 75 THB (sold out)
Mango Sticky Rice — 80 THB
Coconut Ice Cream — 40 THB

=== Today's orders ===
A001 Mint — 160 THB
A002 Nont — 55 THB
A003 Fah — 250 THB
A004 Ploy — 145 THB
A005 Beam — 135 THB
A006 Kaew — 250 THB

=== Summary ===
Orders: 6
Total sales: 995 THB
Average order: 165.83 THB

=== Cheapest available ===
Coconut Ice Cream
```

## My own function (Part D)

i used filter to get list from avalible item and get price from list and collate the price to lowest to high and show the lowest price item

## What I learned today

I would use reduce when I want to combine all the items in an array into one result, such as calculating a total or grouping menu names by category. It carries an accumulated value through the array and returns the final result

## AI-use statement

i used AI in Cafe file. used AI for understand method 
