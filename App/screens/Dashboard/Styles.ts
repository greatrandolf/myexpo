import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Dimensions, PixelRatio, Platform, StyleSheet } from 'react-native'
import { Colors } from '../../styles'
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    safeArea: {
        backgroundColor: Colors.red,
    },
    container: {
        flex: 1,
        backgroundColor: Colors.blue,
    },
    textFieldContainer: {
        flex: 19, 
        paddingTop: 10,
    },
    textField: (highlight: boolean) => ({
        fontSize: 18,
        height: 50,
        marginBottom: 4, 
        borderBottomWidth: highlight ? 2 : .5, 
        borderBottomColor: highlight ? Colors.darkgray : Colors.lightgray
    }),
    
} as any)

export default styles