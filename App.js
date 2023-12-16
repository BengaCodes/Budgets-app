/* eslint-disable react/display-name */
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
// import { StyleSheet } from 'react-native'
import RecentExpenses from './Screens/RecentExpenses'
import MainScreen from './Screens/MainScreen'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'
import { Platform, SafeAreaView, StyleSheet } from 'react-native'
import { GlobalStyles } from './constants/styles'
import { Provider } from 'react-redux'
import { store } from './Store/store'
// import ManageExpenses from './Screens/ManageExpenses'
import AddExpenses from './Screens/AddExpenses'

const {
  colors: { primary500, primary700 }
} = GlobalStyles

const Stack = createNativeStackNavigator()

const Tab = createBottomTabNavigator()

function BottomTabs() {
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: primary700
      }}
      screenOptions={({ navigation }) => ({
        headerRight: () => {
          return (
            <Ionicons
              style={{ marginRight: 24, color: 'white' }}
              name='add-outline'
              size={24}
              onPress={() => navigation.navigate('AddExpenses')}
            />
          )
        }
      })}
    >
      <Tab.Screen
        name='Expenses'
        component={MainScreen}
        options={{
          title: 'All Expenses',
          tabBarStyle: {
            backgroundColor: primary500,
            height: Platform.OS !== 'ios' ? 80 : 100
          },
          tabBarLabelStyle: {
            color: 'white',
            fontWeight: 'bold',
            fontSize: 16,
            marginBottom: Platform.OS === 'android' ? 12 : null
          },
          tabBarActiveTintColor: '#FFB534',
          tabBarActiveBackgroundColor: '#FB8B24',
          tabBarIcon: () => (
            <Ionicons name='calculator-outline' color={'white'} size={24} />
          ),
          headerStyle: { backgroundColor: primary700 },
          headerTitleStyle: { color: 'white' }
        }}
      />
      <Tab.Screen
        name='Recent'
        component={RecentExpenses}
        options={{
          tabBarStyle: {
            backgroundColor: primary500,
            height: Platform.OS !== 'ios' ? 80 : 100
          },
          title: 'Recent',
          tabBarLabelStyle: {
            color: 'white',
            fontWeight: 'bold',
            fontSize: 16,
            marginBottom: Platform.OS === 'android' ? 12 : null
          },
          tabBarActiveTintColor: '#FFB534',
          tabBarActiveBackgroundColor: '#FB8B24',
          tabBarIcon: () => (
            <Ionicons name='hourglass-outline' color={'white'} size={24} />
          ),
          headerStyle: { backgroundColor: primary500 },
          headerTitleStyle: { color: 'white' }
        }}
      />
    </Tab.Navigator>
  )
}

export default function App() {
  return (
    <>
      <StatusBar style='light' />
      <SafeAreaView style={styles.container}>
        <Provider store={store}>
          <NavigationContainer>
            <Stack.Navigator
              screenOptions={{
                headerStyle: { backgroundColor: primary700 }
              }}
            >
              <Stack.Screen
                name='Bottom Tabs'
                component={BottomTabs}
                options={{
                  headerShown: false
                }}
              />
              <Stack.Screen
                name='All Expenses'
                component={MainScreen}
                options={{
                  headerStyle: { backgroundColor: primary500 }
                }}
              />
              <Stack.Screen
                name='Recent Expense'
                component={RecentExpenses}
                options={{
                  headerStyle: { backgroundColor: primary500 }
                }}
              />
              <Stack.Group screenOptions={{ presentation: 'modal' }}>
                <Stack.Screen
                  name='AddExpenses'
                  component={AddExpenses}
                  options={{
                    headerStyle: { backgroundColor: primary500 },
                    title: 'Add Expenses',
                    headerTitleStyle: { color: 'white' },
                    contentStyle: {
                      backgroundColor: primary700
                    }
                  }}
                />
              </Stack.Group>
            </Stack.Navigator>
          </NavigationContainer>
        </Provider>
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
