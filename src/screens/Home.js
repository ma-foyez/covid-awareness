import React from 'react';
import { Pressable, SafeAreaView, StyleSheet, Touchable, View } from 'react-native';
import Text from '../components/master/Text';
import { colors } from '../theme/colors';
import { spacing } from '../theme/spacing';
import Ionicons from '@expo/vector-icons/Ionicons';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

// import { Bangladesh, Distance } from '../../assets/svg';
import Bangladesh from './../../assets/svg/Bangladesh';

const Home = () => {
    return (
        <SafeAreaView style={styles.container}>
            {/* Header Section Start  */}
            <View style={styles.header}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingTop: spacing[5] }}>
                    <AntDesign name="bars" size={24} color="white" />
                    <Ionicons name="notifications-outline" size={24} color="white" />
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingTop: spacing[5] }}>
                    <Text preset='h1' style={{ color: colors.white }}>Covid-19</Text>
                    <View style={styles.country}>
                        {/* <Bangladesh /> */}
                    </View>
                </View>
                <Text preset='h4' style={{ color: colors.white, marginVertical: spacing[5] }}>Are you feeling sick?</Text>
                <Text style={{ color: colors.white, marginVertical: 5, lineHeight: 20, opacity: 0.8 }}>If you feel sick with any of covid-19 symptoms please call or SMS us immediately for help.</Text>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: spacing[5] }}>
                    <Pressable style={styles.callBtn}>
                        <Ionicons name="call" size={24} color={colors.white} />
                        <Text preset='h5' style={{ color: colors.white, marginLeft: spacing[2] }}>Call Now</Text>
                    </Pressable>
                    <Pressable style={styles.messageBtn}>
                        <Feather name="message-circle" size={24} color={colors.white} />
                        <Text preset='h5' style={{ color: colors.white, marginLeft: spacing[2] }}>Call Now</Text>
                    </Pressable>
                </View>
            </View>
            {/* Header Section Close  */}

            <View>
                <Text preset='h3'>Prevention</Text>
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
        paddingVertical: spacing[7],
        padding: spacing[6],
        borderBottomLeftRadius: spacing[9],
        borderBottomRightRadius: spacing[9],
    },
    callBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.radical_red,
        padding: spacing[4],
        borderRadius: spacing[8]
    },
    messageBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.blue,
        padding: spacing[4],
        borderRadius: spacing[8]
    }



})