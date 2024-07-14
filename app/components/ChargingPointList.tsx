import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import {Realm} from '@realm/react';

import {ChargingPoint} from '../models/ChargingPoint';
import {ChargingPointItem} from './ChargingPointItem';

type ChargingPointListProps = {
    chargingPoints: Realm.Results<ChargingPoint & Realm.Object>;
    onDeleteChargingPoint: (chargingPoint: ChargingPoint & Realm.Object) => void;
    onEditChargingPoint: (chargingPoint: ChargingPoint & Realm.Object) => void;
};

export const ChargingPointList: React.FC<ChargingPointListProps> = ({
                                                                        chargingPoints,
                                                                        onDeleteChargingPoint,
                                                                        onEditChargingPoint,
                                                                    }) => {
    return (
        <View style={styles.listContainer}>
            <FlatList
                data={chargingPoints}
                keyExtractor={chargingPoint => chargingPoint._id.toString()}
                renderItem={({item}) => (
                    <ChargingPointItem
                        chargingPoint={item}
                        onDelete={() => onDeleteChargingPoint(item)}
                        onEdit={() => onEditChargingPoint(item)}
                    />
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    listContainer: {
        flex: 1,
        justifyContent: 'center',
    },
});

export default ChargingPointList;
