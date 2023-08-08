import {View, Text} from 'react-native';
import React from 'react';
import MachineForm from '../components/machine.component';
import {useSelector} from 'react-redux';

const Machine = () => {
  const categories = useSelector((state: any) => state.categories.categories);
  return (
    <View>
      <Text>Create Machine</Text>
      <MachineForm categories={categories} />
    </View>
  );
};

export default Machine;
