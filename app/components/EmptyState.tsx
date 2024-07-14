import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text} from 'react-native-paper';

import {Icon} from "react-native-paper";

export const EmptyState = () => {
    return (
        <View style={styles.content}>
            <Icon size={50} source={'alert'}/>
            <Text variant={'headlineMedium'}>
                There is nothing here.
            </Text>
            <Text style={styles.paragraph}>
                Start adding new vehicle charging points by tapping the + button in the top right corner.
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    content: {
        flex: 1,
        marginHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    paragraph: {
        marginVertical: 10,
        textAlign: 'center',
        color: 'black',
        fontSize: 17,
        fontWeight: '500',
    }
});
