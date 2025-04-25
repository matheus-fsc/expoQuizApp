import { View, Text, StyleSheet, Button } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-web';
import { router } from 'expo-router';

export default function quiz() {
    const [perguntas, setPerguntas] = React.useState([
        {
            texto: "Quantos copos de água você bebe por dia?",
            opcoes: [
                { texto: "a) Não bebo muita água", valor: 1 },
                { texto: "b) Menos de quatro copos", valor: 2 },
                { texto: "c) Mais de cinco copos", valor: 3 },
            ],
        },
        {
            texto: "Quantas vezes por dia você come? (conte também os lanches da manhã e da tarde)",
            opcoes: [
                { texto: "a) Uma ou duas vezes por dia", valor: 1 },
                { texto: "b) De três a quatro vezes por dia", valor: 2 },
                { texto: "c) Mais de cinco vezes por dia", valor: 3 },
            ],
        },
        {
            texto: "Como costuma ser seu café da manhã?",
            opcoes: [
                { texto: "a) Café preto e no máximo um biscoitinho", valor: 1 },
                { texto: "b) Café com leite, pão branco, margarina, queijo e presunto", valor: 2 },
                { texto: "c) Frutas e sucos naturais, cereais integrais, tapioca, pão integral", valor: 3 },
            ],
        },
        {
            texto: "Qual é, em média, a quantidade de frutas que você consome por dia?",
            opcoes: [
                { texto: "a) Não como frutas nem bebo suco natural de frutas todos os dias", valor: 1 },
                { texto: "b) Três unidades", valor: 2 },
                { texto: "c) Duas ou menos unidades", valor: 3 },
            ],
        },
        {
            texto: "O que você leva de lanche para a escola/trabalho?",
            opcoes: [
                { texto: "a) Não levo nenhum tipo de lanche", valor: 1 },
                { texto: "b) Chocolates, pães, bolachas recheadas, salgadinhos, refrigerante", valor: 2 },
                { texto: "c) Frutas, iogurte, barrinha de cereal, sanduíche de pão integral", valor: 3 },
            ],
        },
        {
            texto: "Você consome algum tipo de verdura ou legume todos os dias?",
            opcoes: [
                { texto: "a) Não consumo verdura nem legumes", valor: 1 },
                { texto: "b) Duas ou menos vezes por semana", valor: 2 },
                { texto: "c) Todos os dias", valor: 3 },
            ],
        },
        {
            texto: "Quantas vezes por semana você come carne vermelha?",
            opcoes: [
                { texto: "a) Todos os dias", valor: 1 },
                { texto: "b) Não consumo carne vermelha", valor: 2 },
                { texto: "c) Duas vezes ou mais", valor: 3 },
            ],
        },
        {
            texto: "Quantas vezes por semana você pratica atividades físicas?",
            opcoes: [
                { texto: "a) Todos os dias", valor: 3 },
                { texto: "b) Duas vezes ou mais", valor: 2 },
                { texto: "c) Não pratico nenhuma atividade física", valor: 1 },
            ],
        },
        {
            texto: "Qual tipo de gordura é mais utilizado na sua casa para cozinhar os alimentos?",
            opcoes: [
                { texto: "a) Gordura animal ou manteiga", valor: 1 },
                { texto: "b) Óleos vegetais (óleo de soja, girassol, algodão, canola)", valor: 3 },
                { texto: "c) Margarina ou gordura vegetal", valor: 2 },
            ],
        },
        {
            texto: "Você costuma tomar refrigerantes com qual frequência?",
            opcoes: [
                { texto: "a) Não tomo refrigerantes", valor: 3 },
                { texto: "b) Três ou menos vezes por semana", valor: 2 },
                { texto: "c) Todos os dias", valor: 1 },
            ],
        },
    ]);

    const [index, setIndex] = React.useState(0);
    const [resposta, setResposta] = React.useState([]);
    const perguntaAtual = perguntas[index];

    const salvarResposta = (valor) => {
        const novasRespostas = [...resposta];
        novasRespostas[index] = valor;
        setResposta(novasRespostas);
    };

    const setarResposta = (valor) => {
        salvarResposta(valor);

        if (index + 1 < perguntas.length) {
            setIndex(index + 1);
        } else {
            const respostasString = JSON.stringify(resposta); // Converte o array para string
            router.push({
                pathname: '/resultado',
                query: { respostas: encodeURIComponent(respostasString) }, // Codifica e envia o parâmetro
            });
        }
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>

            <Text style={styles.questionText}>Pergunta {index + 1} de {perguntas.length}</Text>

            <Text style={styles.question}>{perguntaAtual.texto}</Text>

            {perguntaAtual.opcoes.map((opcao, i) => (
                <View key={i} style={styles.buttonContainer}>
                    <Button title={opcao.texto} onPress={() => setarResposta(opcao.valor)} />
                </View>
            ))}

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        justifyContent: 'center',
    },
    questionText: {
        fontSize: 16,
        marginBottom: 10,
        textAlign: 'center',
        color: '#555',
    },
    question: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        color: '#333',
    },
    buttonContainer: {
        marginVertical: 8,
    }
});