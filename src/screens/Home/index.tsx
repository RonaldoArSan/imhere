import {useState} from 'react'
import { View, Text, TextInput, TouchableOpacity, FlatList, Alert} from "react-native";

import { styles } from "./styles";
import { Participants } from "../../components/Participants";

export default function Home() {
  const [participants, setParticipants]=useState<string[]>([])
  const[participantName,  setParticipantName]=useState('')



  function handleParticipantAdd() {
    if(participants.includes(participantName)){
      return Alert.alert('Participante ja Existe', 'Existe um participante com esse nome')
    }

    setParticipants(prevState =>[...prevState, participantName])
    setParticipantName('')
    
  }
function handleParticipantRemove(name: string){


Alert.alert('Remover', `Remover o participante ${name}?`, [
  {
    text: 'Sim',
    onPress:() =>setParticipants(prevState =>prevState.filter(participant=>participant !== name))
  },
  {
    text: 'Não',
    style: 'cancel'
  }

])
}

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do Evento</Text>
      <Text style={styles.eventDate}>Sexta, 20 de Outubro de 2023</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do Participante"
          placeholderTextColor={"#000000"}
          onChangeText={setParticipantName}
          value={participantName}
                  />
        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
      data={participants}
      keyExtractor={item=>item}
      renderItem={({item})=>(
        <Participants
        key={item}
        name={item}
        onRemove={()=>handleParticipantRemove(item)}
        />
      )}
      showsVerticalScrollIndicator={false}
      ListEmptyComponent={() =>(
        <Text style={styles.listEmptyText}>
          Não Ha Participantes cadastrados, Adicione participantes a sua lista de presença
        </Text>
      )}
      />
    
    </View>
  )
}
