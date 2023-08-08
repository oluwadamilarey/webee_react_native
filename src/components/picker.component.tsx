import {SelectList} from 'react-native-dropdown-select-list';
import React from 'react';
import {Field, FieldType} from '../redux/types';
interface AppPickerProps {
  onTypeChange: (newType: any) => void;
  handleChange: () => void;
}
const AppPicker: React.FC<AppPickerProps> = props => {
  const [selected, setSelected] = React.useState('');

  const fieldTypeOptions = {
    string: 'String',
    number: 'Number',
    Date: 'Date',
    boolean: 'Boolean',
  } as const; //readonly mapping

  const data = Object.keys(fieldTypeOptions).map(key => ({
    key,
    value: fieldTypeOptions[key as keyof typeof fieldTypeOptions],
  }));
  return (
    <SelectList
      setSelected={(val: any) => props.onTypeChange(val)}
      data={data}
      save="value"
      search={false}
      onSelect={props.handleChange}
    />
  );
};

export default AppPicker;
