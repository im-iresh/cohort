/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  // console.log(transactions)
  var res = {}
  for(var i=0;i<transactions.length;i++){
    var transaction = transactions[i]
    // console.log(transaction)
    var cat = transaction["category"]
    if(cat==undefined){
      continue
    }
    if(res.hasOwnProperty(cat)){
      res[cat] += transaction["price"]
    }
    else{
      res[cat]= transaction["price"]
    }
  }
  var ans=[]
  for(key in res){
    ans.push({category : key ,totalSpent: res[key]})
  }
  // console.log(ans)
  return ans;
}
//  transactions = [
//   {
//     id: 1,
//     timestamp: 1656076800000,
//     price: 10,
//     category: 'Food',
//     itemName: 'Pizza',
//   },
// ];
// calculateTotalSpentByCategory(transactions)

module.exports = calculateTotalSpentByCategory;
