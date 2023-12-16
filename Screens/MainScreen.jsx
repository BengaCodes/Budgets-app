import React from 'react'
import { StyleSheet, View } from 'react-native'
import ExpensesOutput from '../Components/ExpensesOutput/ExpensesOutput'
import { useSelector } from 'react-redux'

const MainScreen = () => {
  const { expenses } = useSelector((state) => state.expenses)

  const sum = expenses.reduce((acc, exp) => acc + exp.amount, 0)

  return (
    <View style={styles.container}>
      <ExpensesOutput expenses={expenses} sum={sum} period='Total' />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default MainScreen
