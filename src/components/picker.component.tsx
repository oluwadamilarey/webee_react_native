import {SelectList} from 'react-native-dropdown-select-list';
import React from 'react';

const AppPicker = () => {
  const [selected, setSelected] = React.useState('');

  const data = [
    {key: '1', value: 'Text'},
    {key: '2', value: 'CheckBox'},
    {key: '3', value: 'Date'},
    {key: '4', value: 'Number'},
  ];

  return (
    <SelectList
      setSelected={(val: any) => setSelected(val)}
      data={data}
      save="value"
      search={false}
    />
  );
};

export default AppPicker;
