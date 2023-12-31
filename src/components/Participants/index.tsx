import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

type Props ={
  name: string;
  onRemove:()=> void;
}


export function Participants({name, onRemove}): JSX.Element {
  
  return (
    <View style={styles.container}>
      <Text style={styles.name}>
        {name}
      </Text>
      <TouchableOpacity style={styles.button} onPress={onRemove} >
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
    </View>
  );
}
