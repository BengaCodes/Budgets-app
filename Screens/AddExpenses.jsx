import React, { useRef, useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import { GlobalStyles } from '../constants/styles'
import { useDispatch, useSelector } from 'react-redux'
import { addExpense } from '../Store/expensesSlice'

const AddExpenses = ({ navigation }) => {
  const [desc, setDesc] = useState('')
  const [amount, setAmount] = useState('')

  const descInputRef = useRef(null)
  const amountInputRef = useRef(null)

  const handleNext = () => {
    amountInputRef.current.focus()
  }

  const handleDescChange = (text) => {
    setDesc(text)
  }

  const handleAmountChange = (text) => {
    setAmount(text)
  }

  const dispatch = useDispatch()
  const { expenses } = useSelector((state) => state.expenses)

  const handleExpenseCreation = () => {
    const newExpense = {
      id: `${expenses.length + 1}`,
      description: desc,
      amount: +amount,
      date: `${new Date().toISOString().split('T')[0]}`
    }
    dispatch(addExpense(newExpense))
    navigation.goBack()
    setDesc('')
    setAmount('')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Expense: </Text>
      <View style={styles.form}>
        <View>
          <TextInput
            ref={descInputRef}
            returnKeyType='next'
            onSubmitEditing={handleNext}
            style={styles.input}
            placeholder='Expense description'
            placeholderTextColor='white'
            cursorColor='white'
            value={desc}
            onChangeText={handleDescChange}
          />
          <TextInput
            ref={amountInputRef}
            returnKeyType='done'
            style={styles.input}
            placeholder='Expense amount'
            placeholderTextColor='white'
            cursorColor='white'
            keyboardType='numeric'
            value={amount}
            onChangeText={handleAmountChange}
          />
        </View>
        <View style={styles.btn}>
          <Button title='Create Expense' onPress={handleExpenseCreation} />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 16
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    color: 'white',
    textAlign: 'center'
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 2,
    padding: 10,
    borderColor: GlobalStyles.colors.accent500,
    color: 'white',
    width: 350
  },
  form: {
    marginTop: 16,
    gap: 12,
    alignItems: 'center'
  },
  btn: {
    width: 150,
    borderRadius: 8
  }
})

export default AddExpenses
