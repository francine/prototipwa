import storage from 'localforage'

export function addExpense (expense) {
  storage.setItem(expense.id, expense)
}

export function setDone (expense) {
  var item = storage.getItem(expense.id)
  item.done = expense.done
  storage.setItem(expense.id, expense)
}

export function removeExpense (expense) {
  storage.removeItem(expense.id)
}

export function getExpenses () {
  var list = []
  storage.keys().then(keys => {
    keys.forEach(key => {
      storage.getItem(key).then(value => list.push(value))
    })
  })
  return list
}
