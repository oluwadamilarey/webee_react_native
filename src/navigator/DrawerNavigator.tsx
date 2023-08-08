import React, {useEffect} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import CategoryScreen from '../screens/category.screen';
import {useDispatch, useSelector} from 'react-redux';
import Machine from '../screens/machine.screen';
import {loadCategory} from '../redux/category/actions';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  const categories = useSelector((state: any) => state.categories) as any;
  const dispatch = useDispatch() as any;

  useEffect(() => {
    dispatch(loadCategory() as any);
  }, []);
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Category" component={CategoryScreen} />
        <Drawer.Screen name="Machine" component={Machine} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default DrawerNavigator;
