import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,  
        justifyContent: 'center', 
        alignItems: 'center',
    },
    circleContent: {
        alignItems: 'center', 
        justifyContent: 'center', 
        transform: [{ rotate: '180.5deg'}] 
    },
    titleText: {
        position: 'absolute', 
        fontSize: 15, 
        fontWeight: 'bold', 
    },
    subtitleText: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingVertical: 10,
    },

    triangle: {
        borderStyle: 'solid', 
        backgroundColor: 'transparent', 
        borderLeftColor: 'transparent', 
        borderRightColor: 'transparent',
    }
});

export default styles;