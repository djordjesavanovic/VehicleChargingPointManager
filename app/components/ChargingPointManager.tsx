import React, {useCallback, useState} from 'react';
import {View, StyleSheet} from 'react-native';

import {ChargingPoint} from '../models/ChargingPoint';
import {ChargingPointForm} from './ChargingPointForm/ChargingPointForm';
import ChargingPointList from './ChargingPointList';

import {useRealm} from '@realm/react';
import {useModal} from '../context/ModalContextProvider';
import {EmptyState} from "./EmptyState";

export const ChargingPointManager: React.FC<{
    chargingPoints: Realm.Results<ChargingPoint & Realm.Object>;
}> = ({chargingPoints}) => {
    const realm = useRealm();
    const {showModal, hideModal} = useModal();
    const [editingChargingPoint, setEditingChargingPoint] = useState<ChargingPoint & Realm.Object | null>(null);

    const handleAddChargingPoint = useCallback(
        (location: string, chargerType: string, status: string): void => {
            if (!location || !chargerType || !status) {
                return;
            }

            realm.write(() => {
                return realm.create('ChargingPoint', {
                    location,
                    chargerType,
                    status,
                    createdAt: new Date(),
                });
            });
        },
        [realm],
    );

    const handleEditChargingPoint = useCallback(
        (chargingPoint: ChargingPoint & Realm.Object, location: string, chargerType: string, status: string): void => {
            if (!location || !chargerType || !status) {
                return;
            }

            realm.write(() => {
                chargingPoint.location = location;
                chargingPoint.chargerType = chargerType;
                chargingPoint.status = status;
            });
        },
        [realm],
    );

    const handleDeleteChargingPoint = useCallback(
        (chargingPoint: ChargingPoint & Realm.Object): void => {
            realm.write(() => {
                realm.delete(chargingPoint);
            });
        },
        [realm],
    );

    const handleEdit = (chargingPoint: ChargingPoint & Realm.Object) => {
        setEditingChargingPoint(chargingPoint);
        showModal();
    };

    const handleFormSubmit = (location: string, chargerType: string, status: string) => {
        if (editingChargingPoint) {
            handleEditChargingPoint(editingChargingPoint, location, chargerType, status);
        } else {
            handleAddChargingPoint(location, chargerType, status);
        }
        setEditingChargingPoint(null);
        hideModal();
    };

    const handleModalDismiss = () => {
        setEditingChargingPoint(null);
        hideModal();
    };

    return (
        <>
            <View style={styles.content}>
                <ChargingPointForm
                    onSubmit={handleFormSubmit}
                    initialValues={editingChargingPoint ? {
                        location: editingChargingPoint.location,
                        chargerType: editingChargingPoint.chargerType,
                        status: editingChargingPoint.status,
                    } : null}
                    onDismiss={handleModalDismiss}
                />
                {chargingPoints.length === 0 ? (
                    <EmptyState/>
                ) : (
                    <ChargingPointList
                        chargingPoints={chargingPoints}
                        onDeleteChargingPoint={handleDeleteChargingPoint}
                        onEditChargingPoint={handleEdit}
                    />
                )}
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    content: {
        flex: 1,
        marginHorizontal: 10,
    },
    introText: {
        textAlign: 'center',
        fontSize: 18,
        marginTop: 20,
    },
});

export default ChargingPointManager;
