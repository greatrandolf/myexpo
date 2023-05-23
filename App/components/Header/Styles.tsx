import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingTop: 23,
        paddingBottom: 12,
        backgroundColor: 'white',
        // shadowColor: '#000',
        // shadowOffset: { width: 0, height: 2 },
        // shadowOpacity: 0.2,
        // shadowRadius: 2,
        // elevation: 1,
        // alignItems: 'center',
        // justifyContent: 'center'
    },
    title: {
        flex: 1,
        fontSize: 22,
        textAlign: 'center',
    },
    defaultRightStyle: {
        height: 30,
        flexDirection: 'row', 
        justifyContent: 'flex-end'
    },
});

export default styles;