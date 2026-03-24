import { View, Text, FlatList, SectionList, StyleSheet } from 'react-native';
import React from 'react';

const data = [
  { id: '1', value: 'ayesha' },
  { id: '2', value: 'tuba' },
  { id: '3', value: 'fatima' },
];

const sectionData = [
  {
    title: 'Development Skills',
    data: ['React Native', 'JavaScript', 'Node.js'],
  },
  {
    title: 'CS Core Subjects',
    data: ['Operating Systems', 'Data Structures', 'Automata'],
  },
];

const Flat_List = () => {
  // For the FlatList
  const renderItem = ({ item }) => (
    <View style={styles.itemBox}>
      <Text>{item.value}</Text>
    </View>
  );

  // For the SectionList
  const renderSectionItem = ({ item }) => (
    <View style={styles.itemBox}>
      <Text>{item}</Text> 
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>FlatList Example</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />

      <Text style={styles.title}>SectionList Example</Text>
      <SectionList
        sections={sectionData}
        keyExtractor={(item, index) => item + index}
        renderItem={renderSectionItem}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.headerText}>{title}</Text>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 10,
    backgroundColor: '#fff', // Changed from red so you can actually see the text
    height: 400, // Give it a height so it doesn't push the App buttons away
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  headerText: {
    fontSize: 18,
    backgroundColor: '#3498db',
    color: 'white',
    padding: 5,
  },
  itemBox: {
    padding: 5,
    borderBottomWidth: 1,
    borderColor: '#eee'
  }
});

export default Flat_List;