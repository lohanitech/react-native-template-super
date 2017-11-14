import React from 'react';
import { Text } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import createStore from './store';
import RootNav from './navigators/RootNavigator';
import bootstrap from './bootstrap';

const { persistor, store } = createStore();

const onBeforeLift = () => {};
bootstrap();




// Root component
let App = () => {
  return (
    <Provider store={store}>
      <PersistGate
        loading={<Text>Loading..</Text>}
        onBeforeLift={onBeforeLift}
        persistor={persistor}>
        <RootNav />
      </PersistGate>
    </Provider>
  );

}



export default App;
