import React, {useState, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {Modal, Portal, Text, IconButton, Divider, Button} from 'react-native-paper';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {LocationInput} from './LocationInput';
import {ChargerTypeButtons} from './ChargerTypeButtons';
import {StatusButtons} from './StatusButtons';
import {useModal} from '../../context/ModalContextProvider';

type ChargingPointFormProps = {
    onSubmit: (location: string, chargerType: string, status: string) => void;
    initialValues?: { location: string, chargerType: string, status: string } | null;
    onDismiss: () => void;
};

export const ChargingPointForm: React.FC<ChargingPointFormProps> = ({onSubmit, initialValues, onDismiss}) => {
    const [location, setLocation] = useState('');
    const [chargerType, setChargerType] = useState('');
    const [status, setStatus] = useState('');
    const [isChanged, setIsChanged] = useState(false);

    const {visible} = useModal();

    useEffect(() => {
        if (initialValues) {
            setLocation(initialValues.location);
            setChargerType(initialValues.chargerType);
            setStatus(initialValues.status);
            setIsChanged(false);
        } else {
            resetForm();
        }
    }, [initialValues, visible]);

    const handleSubmit = () => {
        onSubmit(location, chargerType, status);
        resetForm();
    };

    const handleInputChange = (setter: React.Dispatch<React.SetStateAction<string>>, value: string) => {
        setter(value);
        if (initialValues) {
            setIsChanged(
                value !== initialValues.location ||
                chargerType !== initialValues.chargerType ||
                status !== initialValues.status
            );
        }
    };

    const resetForm = () => {
        setLocation('');
        setChargerType('');
        setStatus('');
        setIsChanged(false);
    };

    const handleDismiss = () => {
        resetForm();
        onDismiss();
    };

    const containerStyle = {backgroundColor: 'white', padding: 20, marginHorizontal: 20};
    const isFormValid = location && chargerType && status;

    return (
        <Portal>
            <Modal visible={visible} onDismiss={handleDismiss} contentContainerStyle={styles.container}
                   dismissable={false}>
                <KeyboardAwareScrollView>
                    <View style={styles.modalHeader}>
                        <Text variant={'titleMedium'}>
                            {initialValues ? 'Edit Charging Point' : 'Add Charging Point'}
                        </Text>
                        <IconButton
                            mode={'contained'}
                            icon="close"
                            size={15}
                            onPress={handleDismiss}
                        />
                    </View>
                    <LocationInput
                        value={location}
                        onChangeText={(value) => handleInputChange(setLocation, value)}
                        editable={!initialValues}
                    />
                    <ChargerTypeButtons
                        value={chargerType}
                        onValueChange={(value) => handleInputChange(setChargerType, value)}
                    />
                    <StatusButtons
                        value={status}
                        onValueChange={(value) => handleInputChange(setStatus, value)}
                    />
                    <Divider style={styles.formRow}/>
                    <View style={styles.formRow}>
                        <Button
                            icon="content-save"
                            mode="contained"
                            onPress={handleSubmit}
                            disabled={!isFormValid || (initialValues && !isChanged)}
                        >
                            Save
                        </Button>
                    </View>
                </KeyboardAwareScrollView>
            </Modal>
        </Portal>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        padding: 20,
        marginHorizontal: 20
    },
    formRow: {
        marginBottom: 15,
    },
    modalHeader: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginBottom: 10
    },
    submit: {
        width: 50,
        height: '100%',
        marginLeft: 20,
    },
});
