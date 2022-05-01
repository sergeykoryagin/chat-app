import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';

export const App = () => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle='light-content' />
            <View>
                <Text>Text</Text>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
