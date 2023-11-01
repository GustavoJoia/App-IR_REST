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
        fontWeight: 'bold',
        textAlign: 'center'
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
    },
    form:{
        backgroundColor: '#fff',
        width: '80%',
        height: '50%',
        borderRadius: '20%',
        alignItems: 'center',
        //justifyContent: 'space-between',
        paddingTop: '10%',
        marginTop: '5%',
        marginBottom: '10%',
        paddingBottom: '8%',
    },
    info_area:{
        marginBottom: '10%',
    },
    nome:{
        fontWeight: '500',
        fontSize: '1.3rem',
        textAlign: 'left',
        color: 'rgba(29,28,28,0.57)'
    },
    span:{
        color: '#170073',
    },
    normal:{
        textAlign: 'center',
        fontSize: '1.4rem'
    },
    desc:{
        textAlign: 'center',
        fontSize: '1.3rem',
        maxWidth: '80%',
    },
    edit_btn:{
        backgroundColor: 'rgba(255,255,255,0.6)',
        width: '100%',
        height: '15vw',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
    },
    delete_btn:{
        backgroundColor: '#D10000',
        width: '100%',
        height: '15vw',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        marginBottom: '2%',
    },
    icon:{
        size: '2.1rem',
        color: '#000'
    },
    btn_area:{
        width: '60%',
        alignItems: 'center'
    },
    btn_label:{
        fontSize: '1.3rem',
        fontWeight: '500'
    }

})

export default style