import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import InputField from './input-component';

interface CategoryFieldProps {
  changeText: (newTitle: string) => void;
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
            <InputField label="Text" onChangeText={handleChangeText} />
          </View>

          <View style={styles.field_type_container}>
            <Text>CheckBox</Text>
          </View>
          <View style={styles.delete_button}>
            <Text>X</Text>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  delete_button: {
    marginHorizontal: 30,
    justifyContent: 'center',
  },
  category_title: {
    marginVertical: 15,
  },
  form_container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input_container: {
    flex: 1,
  },
  field_container: {
    flex: 1,
    flexDirection: 'row',
  },
  field_type_container: {
    marginHorizontal: 30,
    justifyContent: 'center',
  },
});

export default CategoryField;
