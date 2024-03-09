import { StyleSheet, View, Pressable, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function Button({label,theme,onPress}){
    if (theme === "primary"){
        return(
            <View style={[styles.buttonContainer, {borderWidth:4, borderColor:"#ffd33d", borderRadius: 18 }]}>
                <Pressable style={[styles.button, {backgroundColor:"#fff"}]} onPress={onPress}>
                    <FontAwesome  name="picture-o" size={18} color="#25292e" style={styles.buttonIcon}/>
                    <Text style={[styles.buttonLabel, {color:"#2529e"}]}>{label}</Text>
                </Pressable>     
            </View>
        );
    }
  if(theme ==="secondary"){
    return(
        <View style={[styles.buttonContainer,{borderRadius: 18, borderWidth:3, borderColor: "#FF00FF"}]}>
            <Pressable style={[styles.button, {backgroundColor:"#D8BFD8"}]} onPress={() =>alert('Image Uploaded')}>
                <FontAwesome name="upload" size={18} color={"#000000"} style={styles.buttonIcon}/>
                <Text style={[styles.buttonLabel, {color:"#000000"}]}>{label}</Text>
            </Pressable>
        </View>
    )
  }
    return(
        <View style={styles.buttonContainer}>
            <Pressable style={styles.button} onPress={() => alert('You have pressed  the button!')}>
                <Text style={styles.buttonLabel}>{label}</Text>
            </Pressable>
            
        </View>
    );
}

const styles = StyleSheet.create({

    buttonContainer: {
        width:320,
        height:68, 
        justifyContent:"center",  
        alignItems:"center",  
        padding:3,
        marginHorizontal:20,
        margin:3,
    },
    button: {
        width: '100%',
        height: '100%',
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        fontSize:53,
    },
    buttonIcon: {
        paddingRight: 8,
    },
    buttonLabel: {
        color:  "#fff",
        fontSize:16,
    },
});