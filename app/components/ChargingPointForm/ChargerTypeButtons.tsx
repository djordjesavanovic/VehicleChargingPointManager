import React from 'react';
import {View, StyleSheet} from 'react-native';
import {SegmentedButtons, Text} from 'react-native-paper';

type ChargerTypeButtonsProps = {
    value: string;
    onValueChange: (value: string) => void;
};

export const ChargerTypeButtons: React.FC<ChargerTypeButtonsProps> = ({value, onValueChange}) => (
    <View style={styles.formRow}>
        <Text variant="labelLarge" style={{marginBottom: 10}}>Charger Type</Text>
        <SegmentedButtons
            value={value}
            onValueChange={onValueChange}
            buttons={[
                {
                    icon: 'battery-charging-high',
                    value: 'fast',
                    label: 'Fast',
                },
                {
                    icon: 'battery-charging-medium',
                    value: 'standard',
                    label: 'Standard',
                },
                {
                    icon: 'battery-charging-low',
                    value: 'slow',
                    label: 'Slow'
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
