import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { GlobalStyles } from '../../constants/styles'

const ExpensesSummary = ({ period, sum = 11.99 }) => {
  return (
    <View style={styles.container}>
      <Text>{period}</Text>
      <Text
        style={{ color: GlobalStyles.colors.primary400, fontWeight: 'bold' }}
      >
        {new Intl.NumberFormat('en-GB', {
          style: 'currency',
          currency: 'GBP'
        }).format(sum)}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '87%',
    padding: 12,
    backgroundColor: GlobalStyles.colors.primary50,
    borderRadius: 8,
    alignSelf: 'center',
    marginTop: 20
  }
})

export default ExpensesSummary
