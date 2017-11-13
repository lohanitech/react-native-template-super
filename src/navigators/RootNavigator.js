import { StackNavigator } from 'react-navigation';
import HomeScreen  from '../screens/home';

export default RootNavigator = StackNavigator({
    Home: { screen: HomeScreen },
},{
    cardStyle: {
        backgroundColor: '#fff',
    }
});