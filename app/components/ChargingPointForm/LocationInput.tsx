import React from 'react';
import {View, StyleSheet} from 'react-native';
import {TextInput, Text} from 'react-native-paper';

type LocationInputProps = {
    value: string;
    onChangeText: (text: string) => void;
    editable: boolean;
};

export const LocationInput: React.FC<LocationInputProps> = ({value, onChangeText, editable}) => (
    <View style={styles.formRow}>
        <Text variant="labelLarge" style={{marginBottom: 10}}>Location</Text>
        <TextInput
            dense
            mode={'outlined'}
            value={value}
            placeholder="Enter location"
            onChangeText={onChangeText}
            autoCorrect={false}
            autoCapitalize="none"
            editable={editable}
        />
    </View>
);

const styles = StyleSheet.create({
    formRow: {
        marginBottom: 15,
    },
});
