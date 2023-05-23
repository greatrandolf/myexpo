import React from 'react'
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    SectionList,
    TextInput,
    ActivityIndicator,
    Dimensions,
} from  'react-native'
import env from '../../config'
import { Button, Container, Header } from '../../components'
import { Colors } from '../../styles'
import {strings} from "../../localization/strings";
import { Auth } from '../../models'
const { width, height } = Dimensions.get('window');
import { LoadingDialog } from '../../components'
import { getSystemVersion, getReadableVersion  } from 'react-native-device-info'
import styles from './Styles'

type Props = {
    route: any,
    onBack: () => void,
}

const Login = (props: Props) =>{

    const header = () => (
        <Header style={{ flexDirection: "row", alignItems: 'center', paddingLeft: 15, paddingVertical: 6, }}
                title={'Prairie State Gaming'} //'Prairie State Gaming'   
                titleStyle={{ fontSize: 18,   color: Colors.black, padding: 4, }}
                left={(
                    <Button style={{ backgroundColor: Colors.transparent }} 
                            title={'Back'} 
                            titleStyle={{  color: Colors.black, }}
                            onPress={props.onBack}  />
                )}
                leftContainerStyle={{ flex: .3, }}
        />
    )

    return(
        <Container  safeAreaViewTopStyle={styles.safeArea}
                    statusBarStyle={'light'}
                    scrollViewEnable={true}
                    header={header}
                    style={{ flex: 1, backgroundColor: 'blue' }} >
        </Container>
    )
}

export default Login