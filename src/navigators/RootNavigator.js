import { StackNavigator, DrawerNavigator } from 'react-navigation';
import { HomeScreen, ComponentListScreen, LoginScreen }  from '../screens';
import globalStyles from '../styles/GlobalStyles';

const stackNavOptions = {
    navigationOptions: ({navigation})=>({
        headerStyle: globalStyles.headerStyle,
        headerTitleStyle: globalStyles.headerTitleStyle
    }),
    headerType: 'screen',
    cardStyle: {
        backgroundColor: '#fff',
    }
};

export default RootNavigator = DrawerNavigator({
    Components: { 
        screen: StackNavigator({
            First: {screen: ComponentListScreen}
        },stackNavOptions)
    },
    Home: { 
        screen: StackNavigator({
            First: {screen:HomeScreen}
        },stackNavOptions)
    },
    Login: {
        screen: LoginScreen
    }
});