import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import InputField from './input-component';

interface CategoryFieldProps {
  changeText: (newTitle: string) => void;
  type: any;
  name: any;
  handleDelete: any;
}

const CategoryField: React.FC<CategoryFieldProps> = props => {
  const handleChangeText = (newTitle: string) => {
    props.changeText(newTitle);
  };

  return (
    <>
      <View style={styles.form_container}>
        <View style={styles.field_container}>
          <View style={styles.input_container}>
            <InputField label="Field" onChangeText={handleChangeText} />
          </View>

          <View style={styles.field_type_container}>
            <View style={styles.text_type_container}>
              <Text>{props.type}</Text>
            </View>
          </View>
          <View style={styles.delete_button}>
            <Button onPress={props.handleDelete} title="X" />
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  delete_button: {
    marginHorizontal: 2,
    justifyContent: 'center',
    fontSize: 15,
  },
  category_title: {
    marginVertical: 15,
  },
  form_container: {
    flex: 1,
  },
  input_container: {
    flex: 1,
  },
  field_container: {
    flex: 1,
    flexDirection: 'row',
    borderWidth: 0.5,
    borderColor: '#1E1E1E',
    marginVertical: 10,
    marginHorizontal: 19,
    borderRadius: 3,
  },
  field_type_container: {
    marginHorizontal: 6,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 4,
  },
  text_type_container: {
    borderWidth: 1,
    borderRadius: 13,
    padding: 10,
  },
});

export default CategoryField;
