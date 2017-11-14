import { StackNavigator } from 'react-navigation';
import HomeScreen  from '../screens/home';
import globalStyles from '../styles/GlobalStyles';

export default RootNavigator = StackNavigator({
    Home: { screen: HomeScreen },
},{
    navigationOptions: ({navigation})=>({
        headerStyle: globalStyles.headerStyle,
        headerTitleStyle: globalStyles.headerTitleStyle
    }),
    cardStyle: {
        backgroundColor: '#fff',
    }
});