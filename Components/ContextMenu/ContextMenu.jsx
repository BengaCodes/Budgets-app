import React, { useState } from 'react'
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  TouchableWithoutFeedback,
  StyleSheet
} from 'react-native'

const ContextMenu = ({ show }) => {
  const [isContextMenuVisible, setContextMenuVisible] = useState(false)
  const [contextMenuPosition, setContextMenuPosition] = useState({ x: 0, y: 0 })

  const showContextMenu = (event) => {
    setContextMenuPosition({
      x: event.nativeEvent.pageX,
      y: event.nativeEvent.pageY
    })
    setContextMenuVisible(show)
  }

  const hideContextMenu = () => {
    setContextMenuVisible(false)
  }

  const handleMenuItemPress = (action) => {
    // Handle the selected menu item action
    console.log(`Selected action: ${action}`)
    hideContextMenu()
  }

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={showContextMenu}>
        <View style={styles.trigger}>
          <Text>Show Context Menu</Text>
        </View>
      </TouchableWithoutFeedback>

      <Modal
        transparent
        visible={isContextMenuVisible}
        onRequestClose={hideContextMenu}
      >
        <TouchableWithoutFeedback onPress={hideContextMenu}>
          <View style={styles.overlay} />
        </TouchableWithoutFeedback>

        <View
          style={[
            styles.contextMenu,
            { top: contextMenuPosition.y, left: contextMenuPosition.x }
          ]}
        >
          <TouchableOpacity onPress={() => handleMenuItemPress('Edit')}>
            <Text>Edit</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleMenuItemPress('Delete')}>
            <Text>Delete</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  trigger: {
    padding: 16,
    backgroundColor: 'lightblue'
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  contextMenu: {
    position: 'absolute',
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
    elevation: 5
  }
})

export default ContextMenu
