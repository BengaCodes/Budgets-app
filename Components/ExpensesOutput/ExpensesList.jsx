import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import ExpenseItem from './ExpenseItem'

const ExpensesList = ({ expenses }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={expenses}
        renderItem={({ item }) => <ExpenseItem item={item} />}
        keyExtractor={(item) => item.id}
        style={{ padding: 24 }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default ExpensesList
