import React from 'react';
import { StyleSheet, View } from 'react-native';
import Text from './master/Text';
import { spacing } from './../theme/spacing';

const AwareCard = ({ data }) => {
    return (
        <View style={styles.awareCard}>
            <View>
                <data.icon />
            </View>
            <Text preset='h5' style={{textAlign: 'center'}}>{data.title}</Text>

        </View>
    );
};

export default AwareCard;


const styles = StyleSheet.create({
    awareCard: {
       flexDirection: 'column',
       justifyContent: 'center',
       alignItems: 'center',
       marginRight: spacing[1]
    },

})