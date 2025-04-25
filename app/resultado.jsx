import { View, Text, StyleSheet, Button } from 'react-native';
import React from 'react';
import { useLocalSearchParams, useRouter } from 'expo-router';

export default function resultado() {
    const router = useRouter();
    const { respostas } = useLocalSearchParams(); // Obtém as respostas da URL
    const respostasArray = JSON.parse(decodeURIComponent(respostas)); // Converte de volta para array
    const pontuacaoTotal = respostasArray.reduce((acc, curr) => acc + curr, 0);
    let feedbackGeral = '';
    if (pontuacaoTotal <= 10) {
        feedbackGeral =
            'Reflita seus hábitos alimentares, e lembre-se sempre que uma alimentação desregulada pode levar à obesidade, diabetes, hipertensão, problemas no coração, desnutrição, entre outros. Reveja sua dieta alimentar e tente melhorar, seu corpo e sua saúde agradecem.';
    } else if (pontuacaoTotal <= 20) {
        feedbackGeral =
            'Sua alimentação está boa, mas ainda não é a ideal. Analise seus hábitos alimentares e verifique o que pode mudar.';
    } else if (pontuacaoTotal <= 30) {
        feedbackGeral =
            'Parabéns, você mostrou que sabe cuidar de sua saúde fazendo escolhas inteligentes e equilibradas.';
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Resultado</Text>
            <Text style={styles.score}>Pontuação Total: {pontuacaoTotal}</Text>
            <Text style={styles.feedback}>{feedbackGeral}</Text>

            <View style={styles.table}>
                <Text style={styles.tableHeader}>Detalhes por Pergunta:</Text>
                {respostasArray.map((resposta, index) => (
                    <View key={index} style={[styles.tableRow, index % 2 === 0 ? styles.tableRowEven : styles.tableRowOdd]}>
                        <Text style={styles.tableCell}>Pergunta {index + 1}</Text>
                        <Text style={styles.tableCell}>Pontuação: {resposta}</Text>
                    </View>
                ))}
            </View>

            <View style={styles.buttonContainer}>
                <Button title="Refazer" onPress={() => router.push('/')} color="#007BFF" />
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
        backgroundColor: '#f5f5f5',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#333',
    },
    score: {
        fontSize: 18,
        marginBottom: 10,
        color: '#555',
    },
    feedback: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 20,
        color: '#666',
    },
    table: {
        width: '100%',
        marginTop: 20,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        overflow: 'hidden',
    },
    tableHeader: {
        fontSize: 18,
        fontWeight: 'bold',
        paddingVertical: 10,
        backgroundColor: '#333',
        color: '#fff',
        textAlign: 'center',
    },
    tableRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
        paddingHorizontal: 15,
    },
    tableRowEven: {
        backgroundColor: '#f9f9f9',
    },
    tableRowOdd: {
        backgroundColor: '#eaeaea',
    },
    tableCell: {
        fontSize: 16,
        color: '#555',
    },
    buttonContainer: {
        marginTop: 20,
        width: '100%',
        paddingHorizontal: 20,
    },
});