import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
// import expenses from '../data/expenses'
import ExpensesOutput from '../Components/ExpensesOutput/ExpensesOutput'
import { useSelector } from 'react-redux'
import moment from 'moment/moment'

const RecentExpenses = ({ navigation }) => {
  const { expenses } = useSelector((state) => state.expenses)

  const currentDate = moment()
  const lastSevenDays = currentDate.clone().subtract(7, 'days')

  const recentExpense = expenses.filter((exp) => {
    const expDate = moment(exp.date)
    return (
      expDate.isSameOrAfter(lastSevenDays, 'day') &&
      expDate.isSameOrAfter(currentDate, 'day')
    )
  })

  const sum = recentExpense.reduce((acc, exp) => acc + exp.amount, 0)

  return (
    <View
      style={[
        styles.container,
        !recentExpense.length
          ? { justifyContent: 'center', alignItems: 'center' }
          : null
      ]}
    >
      {!recentExpense.length ? (
        <View style={styles.noExpenseContainer}>
          <Text style={styles.noExpenseTitle}>
            No recent expenses. Create below
          </Text>
          <Button
            title='Create Expense'
            onPress={() => navigation.navigate('AddExpenses')}
          />
        </View>
      ) : (
        <ExpensesOutput
          period='Last 7 Days'
          sum={sum}
          expenses={recentExpense}
        />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16
  },
  noExpenseContainer: {
    gap: 16
  },
  noExpenseTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white'
  }
})

export default RecentExpenses
