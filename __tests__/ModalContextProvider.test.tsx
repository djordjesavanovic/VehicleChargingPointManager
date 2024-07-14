import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { ModalProvider, useModal } from '../app/context/ModalContextProvider';
import { Text, Button } from 'react-native-paper';

const TestComponent = () => {
    const { visible, showModal, hideModal } = useModal();
    return (
        <>
            <Text>{visible ? 'Modal is visible' : 'Modal is hidden'}</Text>
            <Button onPress={showModal} testID="showButton">Show Modal</Button>
            <Button onPress={hideModal} testID="hideButton">Hide Modal</Button>
        </>
    );
};

describe('ModalContextProvider', () => {
    it('should show and hide modal correctly', () => {
        const { getByText, getByTestId } = render(
            <ModalProvider>
                <TestComponent />
            </ModalProvider>
        );

        fireEvent.press(getByTestId('showButton'));
        expect(getByText('Modal is visible')).toBeTruthy();

        fireEvent.press(getByTestId('hideButton'));
        expect(getByText('Modal is hidden')).toBeTruthy();
    });
});
