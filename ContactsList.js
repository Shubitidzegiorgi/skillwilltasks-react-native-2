import React from "react";
import { Text, SectionList } from "react-native";
import Row from "./Row";

const renderItem = ({ item }) => <Row {...item} />;

const renderSectionHeader = (obj) => <Text>{obj.section.title}</Text>;

const ContactsList = ({ contacts }) => {
  const contactsByLetter = contacts.reduce((obj, contact) => {
    const firstLetter = contact.name[0].toUpperCase();
    return {
      ...obj,
      [firstLetter]: [...(obj[firstLetter] || []), contact],
    };
  }, {});

  const sections = Object.keys(contactsByLetter)
    .sort()
    .map((letter) => ({
      title: letter,
      data: contactsByLetter[letter],
    }));

  return (
    <SectionList
      sections={sections}
      renderSectionHeader={renderSectionHeader}
      renderItem={renderItem}
    />
  );
};

export default ContactsList;