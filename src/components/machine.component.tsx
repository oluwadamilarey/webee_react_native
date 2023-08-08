import React from 'react';
import TitleField from './title-field.component';
import InputField from './input-component';
import {View} from 'react-native-reanimated/lib/typescript/Animated';

const MachineForm = () => {
  return (
    <>
      <InputField label="Text" />
      <InputField label="Text" />
    </>
  );
};

export default MachineForm;
