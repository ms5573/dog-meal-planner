import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#E4E4E4',
    padding: 30,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 10,
  },
  text: {
    fontSize: 12,
    marginBottom: 5,
  },
});

const MealPlanTemplate = ({ dogData, mealPlan }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.title}>Custom Meal Plan for Your Dog</Text>
        <Text style={styles.subtitle}>Dog Information:</Text>
        <Text style={styles.text}>Size: {dogData.size}</Text>
        <Text style={styles.text}>Age: {dogData.age}</Text>
        <Text style={styles.text}>Breed: {dogData.breed}</Text>
        <Text style={styles.text}>Activity Level: {dogData.activityLevel}</Text>
        <Text style={styles.text}>Dietary Preferences: {dogData.dietaryPreferences.join(', ')}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.subtitle}>Recommended Meal Plan:</Text>
        {mealPlan.map((meal, index) => (
          <View key={index}>
            <Text style={styles.text}>Meal {index + 1}: {meal.name}</Text>
            <Text style={styles.text}>Portion: {meal.portion}</Text>
            <Text style={styles.text}>Ingredients: {meal.ingredients.join(', ')}</Text>
          </View>
        ))}
      </View>
    </Page>
  </Document>
);

export default MealPlanTemplate;