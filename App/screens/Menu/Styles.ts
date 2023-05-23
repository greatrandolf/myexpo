import { StyleSheet } from 'react-native'
import { Colors } from '../../styles'

const styles = StyleSheet.create({
    safeArea: {
        backgroundColor: Colors.red,
    },
    container: {
        flex: 1,
        backgroundColor: Colors.white,
        justifyContent: 'space-around',
    },
})

export default styles