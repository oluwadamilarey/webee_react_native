import React from 'react';
import TitleField from './title-field.component';
import InputField from './input-component';
import {Text, View} from 'react-native';

const MachineForm = ({category}: any) => {
  return (
    <>
      <TitleField changeText={newTitle => {}} />
      {category.fields.map((field: any, index: any) => (
        <View key={index}>
          <Text>{field.name}</Text>
          {field.type === 'Text' && <InputField label="Text" />}
        </View>
      ))}
    </>
  );
};

export default MachineForm;
