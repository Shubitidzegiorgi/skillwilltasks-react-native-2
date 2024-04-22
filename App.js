import React, { useState } from "react";
import {
  Button,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  TextInput,
} from "react-native";

import contacts, { compareNames } from "./contacts";
import ContactsList from "./ContactsList";

export default function App() {
  const [showContacts, setShowContacts] = useState(false);
  const [sortedContacts, setSortedContacts] = useState(contacts);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleContacts = () => {
    setShowContacts((prev) => !prev);
  };

  const sort = () => {
    setSortedContacts((prev) => [...prev.sort(compareNames)]);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    const filteredContacts = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(query.toLowerCase())
    );
    setSortedContacts(filteredContacts);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Button title="Toggle contacts" onPress={toggleContacts} />
      <Button title="Sort" onPress={sort} />
      <TextInput
        style={styles.input}
        placeholder="Search..."
        onChangeText={handleSearch}
        value={searchQuery}
      />
      {showContacts && <ContactsList contacts={sortedContacts} />}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: StatusBar.currentHeight + 10,
    paddingHorizontal: 10,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
});
