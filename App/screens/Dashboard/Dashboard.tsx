import React, { useEffect, useState } from 'react'
import { ConnectedProps } from 'react-redux'
import {
  View,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
  SectionList,
  ActivityIndicator,
  ScrollView,
  Dimensions,
  Platform,
  PixelRatio,
} from 'react-native'
import { images, lotties } from '../../constants'
import { 
    Container,
    Header,
    Text,
    Button,
    LottieView
} from '../../components'
import { Colors } from '../../styles'
import styles from './Styles'
import { Auth, } from '../../models'
import DateString from 'moment'
const { width, height } = Dimensions.get('window')
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { strings } from '../../localization/strings'
import Apps from '../../../Apps'


type Props = {
  toggleDrawer: () => void,
  onLogin: () => void,
}

const Dashboard = (props: Props) => {
    const insets = useSafeAreaInsets();

    const header = () => (
        <Header style={{ flexDirection: "row", alignItems: 'center', paddingLeft: 15, paddingVertical: 6, }}
                title={'Prairie State Gaming'} //'Prairie State Gaming'   
                titleStyle={{ fontSize: 18,   color: Colors.black, padding: 4, }}
                left={(
                    <Button style={{ backgroundColor: Colors.transparent }} 
                            title={'Back'} 
                            titleStyle={{  color: Colors.black, }}
                            onPress={props.toggleDrawer}  />
                )}
                leftContainerStyle={{ flex: .3, }}
        />
    )

    return (
        <Container    safeAreaViewTopStyle={styles.safeArea}
                    statusBarStyle={"light"}
                    // scrollViewEnable={true}
                    header={header}
                    style={styles.container} >

                <View style={{ flex: 1, backgroundColor: Colors.red, paddingTop: height/3, }}>
                    <View style={{ flex: 1, borderTopLeftRadius: 20, borderTopRightRadius: 20, backgroundColor: '#F7F5EB' }} >
                        <View style={{ flex: 1, margin: 15, marginTop: 25, borderColor: Colors.lightgray, borderWidth: 0.5, borderRadius: 15, paddingVertical: 15, paddingHorizontal: 10, backgroundColor: 'white'  }}>

                            <View style={{ flex: 1, padding: 10, paddingRight: 0, }} >
                                <View style={{ flex:1,  marginHorizontal: 0, marginTop: -10, flexDirection: 'row',  }}>
                                    <View style={styles.textFieldContainer}>
                                        <TextInput
                                            style={styles.textField(false)}
                                        />
                                        <Text style={{ paddingBottom: 5, color: Colors.lightgray }}>
                                            {`Email / Phone`}
                                        </Text>
                                    </View>
                                    <View style={{ flex: 1, justifyContent: 'flex-end', }}>
                                        
                                    </View>
                                </View>
                                <View style={{ flex:1,  marginHorizontal: 0, marginTop: -0, flexDirection: 'row',  }}>
                                    <View style={styles.textFieldContainer}>
                                        <TextInput
                                            maxLength={4}
                                            style={styles.textField(false)}
                                            keyboardType='number-pad'
                                        />
                                        <Text style={{ paddingBottom: 5, color: Colors.lightgray }}>
                                            {`Pin`}
                                        </Text>
                                    </View>
                                </View>
                                <View style={{ flex: 1, marginRight: 10, bottom: 15,  alignItems: 'flex-end' }}>
                                    <TouchableOpacity   style={{ padding: 15, paddingTop: 30, justifyContent: 'center', alignItems: 'center', }}
                                                        onPress={() => { }}>
                                        <Text style={{ color: Colors.lightgray, fontSize: 13, textAlign: 'center' }}>
                                            {`Forgot Pin?`}
                                        </Text>
                                    </TouchableOpacity>
                                </View>

                                <View style={{ flex: 1,  flexDirection: 'row'}}>

                                    <View style={{ flex: 1, margin: 10}}>
                                        <TouchableOpacity   style={{ padding: 8, backgroundColor: Colors.lightBrown, borderColor: Colors.brown, borderWidth: 2, borderRadius: 20,  justifyContent: 'center', alignItems: 'center', }}
                                                            >
                                            <Text style={{ color: Colors.black, fontSize: 16, textAlign: 'center' }}>
                                                {`Register`}
                                            </Text>
                                        </TouchableOpacity>
                                    </View>

                                    <View style={{ flex: 1, margin: 10}}>
                                    <TouchableOpacity onPressIn={props.onLogin} style={{ padding: 8, backgroundColor: Colors.brown, borderColor: Colors.brown, borderWidth: 2, borderRadius: 20,  justifyContent: 'center', alignItems: 'center', }}
                                                        onPress={() => {}}>
                                        <Text style={{ color: Colors.black, fontSize: 16, textAlign: 'center' }}>
                                            {`Sign In`}
                                        </Text>
                                    </TouchableOpacity>
                                    </View>
                                </View>

                            </View>
                        </View>
                        <Text style={{ fontSize: 14, color: Colors.lightgray, alignSelf: 'center'}}>
                            {`Version: 4.0.3`}
                        </Text>
                    </View>
                </View>
        </Container>
    )
}

export default Dashboard
