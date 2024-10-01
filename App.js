import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TextInput, Button } from 'react-native';
import Header from './Components/Header';

export default function App() {
  const [menuItem, setMenuItem] = useState('');
  const [menuList, setMenuList] = useState([]);

  // Function to add menu item
  const addMenuItem = () => {
    if (menuItem.trim()) {
      setMenuList([...menuList, { key: Math.random().toString(), name: menuItem }]);
      setMenuItem('');
    }
  };

  return (
    <View style={styles.container}>
      <Header title="Menu Items" />
      
      {/* Input field to add new menu item */}
      <TextInput
        style={styles.input}
        placeholder="Enter Menu Item"
        value={menuItem}
        onChangeText={(text) => setMenuItem(text)}
      />
      
      <Button title="Add Menu Item" onPress={addMenuItem} />
      
      {/* List of menu items */}
      <FlatList
        data={menuList}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <Text>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  input: {
    padding: 10,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 10,
  },
  listItem: {
    padding: 15,
    backgroundColor: '#f8f8f8',
    borderBottomwidth: 1,
    borderColor: '#eee',
  },
});
