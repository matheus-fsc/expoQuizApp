import { View, Text, Button, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function Home() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bem-vindo ao Quiz!</Text>
            <Text style={styles.subtitle}>Avalie seus habitos alimentares</Text>
            <View style={styles.buttonContainer}>
                <Button title="Começar Quiz" onPress={() => router.push('/quiz')} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#f0f4f8',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
        color: '#333',
    },
    subtitle: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 30,
        color: '#666',
    },
    buttonContainer: {
        width: '100%',
        marginTop: 10,
    }
});
