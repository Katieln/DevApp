import { StyleSheet } from 'react-native';
import { color } from './color'; // Archivo con colores centralizados

const style = StyleSheet.create({
    containerHeader: {
        marginTop: 30,
        height: 100,
        width: '100%',
        backgroundColor: color.lila,
        justifyContent: 'center',
        alignItems: 'center'
    },

    containerApp: {
        flex: 1,
        backgroundColor: color.bluebase, 
        alignItems: 'center',
        justifyContent: 'flex-start',
        width   : '100%',
    },

    containerList: {
        backgroundColor: color.blue2,
        flex: 1,
        height: '100%',
        width   : '100%',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
    },

    card: {
        backgroundColor: color.blue2,
        padding: 6,
        paddingLeft: 50,
        paddingRight: 50,
        margin: 2,
        shadowColor: color.black,
        alignItems: 'center',
       
    },

    image: {
        height: 120,
        width: 100,
        borderRadius: 8,
      },

    detail:{
        backgroundColor: color.blue4,
        flex: 1,
      }

});

export default style;
