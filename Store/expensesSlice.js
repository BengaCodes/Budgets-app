import { createSlice } from '@reduxjs/toolkit'
import expenses from '../data/expenses'

const initialState = {
  expenses: expenses
}

export const expensesSlice = createSlice({
  name: 'expense',
  initialState,
  reducers: {
    deleteExpense: (state, action) => {
      state.expenses.splice(
        state.expenses.findIndex((x) => x.id === action.payload),
        1
      )
    },
    addExpense: (state, action) => {
      state.expenses.unshift(action.payload)
    }
  }
})

export const { deleteExpense, addExpense } = expensesSlice.actions

export default expensesSlice.reducer
