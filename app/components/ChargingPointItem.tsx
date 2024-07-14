import React from 'react';
import Realm from 'realm';
import {Text, StyleSheet} from 'react-native';
import {Card, IconButton, Avatar, Icon, Menu} from 'react-native-paper';

import {ChargingPoint} from '../models/ChargingPoint';

type ChargingPointItemProps = {
    chargingPoint: ChargingPoint & Realm.Object;
    onDelete: () => void;
    onEdit: () => void;
};

const chargerTypeIconMap = (chargerType: string) => {
    switch (chargerType) {
        case 'fast':
            return <><Icon size={15} source={'battery-charging-high'}/> <Text>Fast</Text></>;
        case 'standard':
            return <><Icon size={15} source={'battery-charging-medium'}/> <Text>Standard</Text></>;
        case 'slow':
            return <><Icon size={15} source={'battery-charging-low'}/> <Text>Slow</Text></>;
        default:
            return <><Icon size={15} source={'battery-charging-high'}/> <Text>N/A</Text></>;
    }
}

const statusIconMap = (status: string) => {
    switch (status) {
        case 'available':
            return <><Icon size={15} source={'check-circle-outline'}/> <Text>Available</Text></>;
        case 'occupied':
            return <><Icon size={15} source={'pause-circle-outline'}/> <Text>Occupied</Text></>;
        case 'offline':
            return <><Icon size={15} source={'close-circle-outline'}/> <Text>Offline</Text></>;
        default:
            return <><Icon size={15} source={'help-circle-outline'}/> <Text>N/A</Text></>;
    }
}

const subtitleContent = (chargingPoint: ChargingPoint) => {
    return (
        <>
            {chargerTypeIconMap(chargingPoint.chargerType)}
            {' - '}
            {statusIconMap(chargingPoint.status)}
        </>
    );
}

const renderMenu = (visible: boolean, openMenu: () => void, closeMenu: () => void, onDelete: () => void, onEdit: () => void, props: any) => {
    return (
        <Menu
            visible={visible}
            onDismiss={closeMenu}
            anchor={<IconButton {...props} icon="dots-vertical" onPress={openMenu}/>}
        >
            <Menu.Item onPress={() => {
                onEdit();
                closeMenu();
            }} title="Edit"/>
            <Menu.Item onPress={onDelete} title="Delete"/>
        </Menu>
    )
}

export const ChargingPointItem = React.memo<ChargingPointItemProps>(
    ({chargingPoint, onDelete, onEdit}) => {
        const [visible, setVisible] = React.useState(false);
        const openMenu = () => setVisible(true);

        const closeMenu = () => setVisible(false);
        return (
            <>
                <Card style={styles.card} mode={'contained'}>
                    <Card.Title
                        titleVariant={'titleMedium'}
                        title={chargingPoint.location}
                        subtitle={subtitleContent(chargingPoint)}
                        left={(props) => <Avatar.Icon {...props} icon="car-electric"/>}
                        right={(props) => renderMenu(visible, openMenu, closeMenu, onDelete, onEdit, props)}
                    />
                </Card>
            </>
        );
    },
);

const styles = StyleSheet.create({
    card: {
        marginVertical: 5,
    }
});
