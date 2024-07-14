import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import {theme} from './styles/theme';
import {App} from './App';

import {RealmProvider} from '@realm/react';
import {schemas} from './models';

export const AppWrapper = () => {
    return (
        <PaperProvider theme={theme}>
            <RealmProvider schema={schemas}>
                <App/>
            </RealmProvider>
        </PaperProvider>
    );
};
