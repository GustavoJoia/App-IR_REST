import { StyleSheet } from "react-native";

const style = StyleSheet.create({

    container:{
        width: '100%',
        height: '80%',
        backgroundColor: '#fff',
        borderRadius: 20,
        //alignItems: 'center',
        justifyContent: 'center',
        padding: '10%'
    },
    nome:{
        fontWeight: '500',
        fontSize: '1.1rem',
    },
    info_area:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: '5%',
        alignItems: 'center'
    },
    btn:{
        width: '9vw',
        height: '9vw',
        borderRadius: '50%',
        backgroundColor: '#D9D9D9',
        justifyContent: 'center',
        alignItems: 'center'
    },
    perc:{
        fontSize: '1.2rem'
    }

})

export default style