import { createStackNavigator } from 'react-navigation';
import ExamplePage from './pages/ExamplePage';
import ExampleOtherPage from './pages/ExampleOtherPage';

export default createStackNavigator({
    Example: {
        screen: ExamplePage
    },
    ExampleOther: {
        screen: ExampleOtherPage
    }
}, {
    initialRouteName: "Example"
});
