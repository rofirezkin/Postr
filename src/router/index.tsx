// In App.js in a new project

import * as React from 'react';
import {TransitionPresets, createStackNavigator} from '@react-navigation/stack';
import Home from '../pages/HomeScreen/HomeScreen';
import PostScreen from '../pages/PostScreen/PostScreen';
import ReplyScreen from '../pages/ReplyScreen/ReplyScreen';
import i18n from '../locale/i18n';
import {GlobalContext} from '../services/globalContext';

export type RootStackParamList = {
  HomeScreen: undefined;
  ReplyScreen:
    | {
        id: number;
        username: string;
        name: string;
        avatar: string;
        description: string;
      }
    | undefined;
  PostScreen:
    | {
        username: string;
        name: string;
        avatar: string;
      }
    | undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

function Router() {
  const {language} = React.useContext(GlobalContext);
  console.log('lanfsbnfsbnsf ', language);

  i18n.locale = language;
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="HomeScreen"
        component={Home}
      />
      <Stack.Screen
        options={{
          headerShown: false,
          ...TransitionPresets.ModalPresentationIOS,
        }}
        name="PostScreen"
        component={PostScreen}
      />
      <Stack.Screen
        options={{
          headerShown: false,
          ...TransitionPresets.ModalPresentationIOS,
          ...TransitionPresets.ModalSlideFromBottomIOS,
        }}
        name="ReplyScreen"
        component={ReplyScreen}
      />
    </Stack.Navigator>
  );
}

export default Router;
