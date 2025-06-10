import React, { FlatList, View, StyleSheet, Text, Button } from 'react-native';
import auth from '@react-native-firebase/auth';
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';
import Item from '@/components/item';
 
const Page = () => {
    const user = auth().currentUser;
 
    const tarefas = [
        { titulo: "tarefa 001" },
        { titulo: "tarefa 002" },
        { titulo: "tarefa 003" }
    ];
 
    return (
        <View>
            <Text>Bem-Vindo {user?.email}</Text>
            <Button title="Sair"
                onPress={() => auth().signOut()}
            />
            <Item  
                data={tarefas} 
                onDelete={()=> alert("fazer a função de deletar")} 
                onEdit={()=> alert("fazer a função de Editar")}  
            />  

            {/* --- BOTÃO ADICIONADO (SEM ALTERAR NADA MAIS) --- */}
            <Button 
                title="BntAdicionar" 
                onPress={() => alert("Função de adicionar será implementada aqui")}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 23,
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
});
 
export default Page;