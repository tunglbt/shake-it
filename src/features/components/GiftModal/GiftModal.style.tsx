import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderRadius: 15,
        height: 300,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnClose: {
        position: 'absolute',
        right: 20,
        top: 20,
        zIndex: 1000,
        backgroundColor: 'gray',
        borderRadius: 50,
        width: 35,
        height: 35,
        alignItems: 'center',
        justifyContent: 'center'
    },
    message: {
        fontSize: 18,
        marginTop: 20
    },
    point: {
        fontSize: 18,
        marginTop: 10,
        fontWeight: '500'
    }


});

export default styles;
