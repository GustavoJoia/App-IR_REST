import { StyleSheet } from "react-native";

const style = StyleSheet.create({

    container:{
        flex: 1,
        backgroundColor: '#D9D9D9',
        alignItems: 'center',
        justifyContent: 'center',
    },
    blue_elipse:{
        backgroundColor: '#170073',
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: '50%',
        borderTopLeftRadius: '30%',
        borderTopRightRadius: '30%',
    },
    titulo_span:{
        color: '#170073',
        fontSize: '2rem',
        fontWeight: 'bold'
    },
    right:{
        size: '1.5rem',
        color: '#000'
    },
    search_bar:{
        width: '80%',
        height: '5%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        //backgroundColor: '#fff',
        borderRadius: 20,
        marginTop: '5%',
        marginBottom: '5%',
        borderWidth: 1,
    },
    search:{
        height: '100%',
        width: '90%',
    },
    list:{
        width: '80%',
        maxHeight: '72%',
    }

})

export default style