import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import navigationStack from './navigators';
import { createAppContainer } from 'react-navigation';

const Root = createAppContainer(navigationStack);

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Root/>
            </Provider>
        );
    }
}
