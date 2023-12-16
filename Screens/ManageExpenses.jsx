import React from 'react'
import { View, Text, Button } from 'react-native'

const ManageExpenses = ({ navigation }) => {
  return (
    <View>
      <Text>Manage Expenses</Text>
      <Button title='Go back' onPress={() => navigation.goBack()} />
    </View>
  )
}

export default ManageExpenses
