import React from 'react'
import { StyleSheet, View } from 'react-native'
import ExpensesSummary from './ExpensesSummary'
import ExpensesList from './ExpensesList'

const ExpensesOutput = ({ expenses, period, sum }) => {
  return (
    <View style={styles.container}>
      <ExpensesSummary period={period} sum={sum} />
      <ExpensesList expenses={expenses} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default ExpensesOutput
