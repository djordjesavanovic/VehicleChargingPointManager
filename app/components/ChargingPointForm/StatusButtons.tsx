import React from 'react';
import {View, StyleSheet} from 'react-native';
import {SegmentedButtons, Text} from 'react-native-paper';

type StatusButtonsProps = {
    value: string;
    onValueChange: (value: string) => void;
};

export const StatusButtons: React.FC<StatusButtonsProps> = ({value, onValueChange}) => (
    <View style={styles.formRow}>
        <Text variant="labelLarge" style={{marginBottom: 10}}>Availability</Text>
        <SegmentedButtons
            value={value}
            onValueChange={onValueChange}
            buttons={[
                {
                    icon: 'pause-circle-outline',
                    value: 'occupied',
                    label: 'Occupied',
                },
                {
                    icon: 'check-circle-outline',
                    value: 'available',
                    label: 'Available',
                },
                {
                    icon: 'close-circle-outline',
                    value: 'offline',
                    label: 'Offline'
                },
            ]}
        />
    </View>
);

const styles = StyleSheet.create({
    formRow: {
        marginBottom: 15,
    },
});
