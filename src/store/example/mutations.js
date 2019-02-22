import { removeExpense } from '../../persistence'

export function ADD_EXPENSE (state, obj) {
  state.Expenses.list.unshift(obj)
}

export function SET_EXPENSES (state, obj) {
  state.Expenses.list = obj
}

export function REMOVE_EXPENSE (state, obj) {
  var index = state.Expenses.list.indexOf(obj)
  state.Expenses.list.splice(index, 1)
  removeExpense(obj)
}
