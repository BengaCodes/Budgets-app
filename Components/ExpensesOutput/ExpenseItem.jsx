import React from 'react'
import { StyleSheet, Text, View, Pressable } from 'react-native'
import { GlobalStyles } from '../../constants/styles'
import { useDispatch } from 'react-redux'
import { deleteExpense } from '../../Store/expensesSlice'
import moment from 'moment/moment'
// import ContextMenu from '../ContextMenu/ContextMenu'

// function expenseContextMenu(show) {
//   console.log('pressed')
//   return <ContextMenu show={show} />
// }

const ExpenseItem = ({ item }) => {
  const dispatch = useDispatch()

  return (
    <Pressable onLongPress={() => dispatch(deleteExpense(item.id))}>
      <View style={styles.expContainer}>
        <View style={styles.descBox}>
          <Text
            style={[styles.descText, { fontWeight: 'bold', color: 'white' }]}
          >
            {item.description}
          </Text>
          <Text style={styles.descText}>
            {moment(item.date).format('DD MMM YYYY')}
          </Text>
        </View>
        <View style={styles.amtTextCont}>
          <Text style={styles.amtText}>
            {new Intl.NumberFormat('en-GB', {
              currency: 'GBP',
              style: 'currency'
            }).format(item.amount)}
          </Text>
        </View>
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  expContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    backgroundColor: GlobalStyles.colors.primary200,
    height: 75,
    marginBottom: 12,
    padding: 12,
    alignItems: 'center',
    borderRadius: 8
  },
  descBox: {
    justifyContent: 'space-between',
    gap: 4
  },
  descText: {
    color: GlobalStyles.colors.primary50
  },
  amtTextCont: {
    backgroundColor: 'white',
    width: 80,
    height: 40,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center'
  },
  amtText: {
    color: GlobalStyles.colors.primary700,
    fontWeight: 'bold'
  }
})

export default ExpenseItem
