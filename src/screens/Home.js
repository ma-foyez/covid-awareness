import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import Text from '../components/master/Text';
import { colors } from '../theme/colors';
import { spacing } from '../theme/spacing';
import Ionicons from '@expo/vector-icons/Ionicons';
import { AntDesign } from '@expo/vector-icons';
import { Bangladesh, Distance } from '../../assets/svg';

const Home = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingTop: spacing[5] }}>
                    <AntDesign name="bars" size={24} color="white" />
                    <Ionicons name="notifications-outline" size={24} color="white" />
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingTop: spacing[5] }}>
                    <Text preset='h1' style={{ color: colors.white }}>Covid-19</Text>
                    <View style={styles.country}>
                        <Bangladesh />
                    </View>
                </View>

            </View>
        </SafeAreaView>
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
    header: {
        backgroundColor: colors.indigo,
        padding: spacing[5],
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
    },
    country: {

    }



})