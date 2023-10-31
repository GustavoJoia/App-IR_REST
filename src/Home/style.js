import { StyleSheet } from "react-native";

const style = StyleSheet.create({

    container:{
        flex: 1,
        backgroundColor: '#D9D9D9',
        alignItems: 'center',
        //justifyContent: 'center',
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
    titulo_area:{
        width: '75%',
        textAlign: 'left',
        marginBottom: '5%',
        marginTop: '10%',
    },
    titulo_span:{
        color: '#170073',
        fontSize: '2rem',
        fontWeight: 'bold'
    },
    titulo:{
        color: '#000',
        fontSize: '1.4rem',
        fontWeight: 'bold'
    },
    form:{
        backgroundColor: '#fff',
        width: '80%',
        height: '58%',
        borderRadius: '20%',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingTop: '10%',
        marginTop: '5%',
    },
    input:{
        borderBottomColor: '#000',
        borderBottomWidth: 1,
        color: 'rgba(29,28,28,0.58)',
        width: '80%',
        textAlign: 'center',
        height: '10%',
        fontSize: '1.2rem',
    },
    btn_area:{
        width: '85%',
        alignItems: 'flex-end',
        justifyContent: 'flex-end'
    },
    btn:{
        backgroundColor: '#170073',
        borderRadius: '50%',
        width: '15vw',
        height: '15vw',
        justifyContent: 'center',
        alignItems: 'center'
    },
    plus:{
        size: '1.5rem',
        color: '#fff'
    }

})

export default style