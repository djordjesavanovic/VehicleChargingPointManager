import React from 'react';

import {ChargingPoint} from './models/ChargingPoint';
import {ChargingPointManager} from './components/ChargingPointManager';

import {useQuery} from '@realm/react';
import {Appbar} from 'react-native-paper';
import {ModalProvider, useModal} from "./context/ModalContextProvider";

const AppContent = () => {
    const chargingPoints = useQuery(ChargingPoint, collection => collection.sorted('createdAt'));
    const {showModal} = useModal();

    return (
        <>
            <Appbar.Header>
                <Appbar.Content title="Vehicle Charging Points"/>
                <Appbar.Action icon="plus" onPress={showModal}/>
            </Appbar.Header>
            <ChargingPointManager chargingPoints={chargingPoints}/>
        </>
    );
};

export const App = () => (
    <ModalProvider>
        <AppContent/>
    </ModalProvider>
);
