import React from 'react'
import { ConnectedProps } from 'react-redux'
import { 
  View,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
  SectionList,
  Platform,
} from 'react-native'
import { Container, Header, Text, LoadingDialog } from '../../components'
import { Colors } from '../../styles'
import styles from './Styles'
import Utils from '../../services/shared/utils/Utils'

type Props = {
  onNavigateMenuItem: (item: string) => void,
}

const Menu = (props: Props) => {

    const header = () => (
        <Header style={{ backgroundColor: Colors.red,  }}
                title={'Menu'}
                titleStyle={{ fontSize: 18, color: Colors.white, padding: 4 }}
                
        />
    )
    
    const arraMenu = [
      "Profile",
      "Settings"
    ]

    return (
      <Container    safeAreaViewTopStyle={styles.safeArea}
                    statusBarStyle={'light'}
                    // scrollViewEnable={true}
                    header={header}
                    style={styles.container} >

              <FlatList 
                        // data={['Health & Beauty', 'TV & Home Appliances', 'Electronics Accessories', 'Fashion Accessories', 'Babies & Toys']}
                        data={arraMenu}
                        // numColumns={5}
                        renderItem={({ item }) => (
                          <TouchableOpacity onPress={Utils.multipleTapHandler(() => props.onNavigateMenuItem(item))} 
                                            style={{ flex: 1, borderBottomColor: 'lightgray', borderBottomWidth: 0.5}}>
                              <Text numberOfLines={2} style={{ fontSize: 15, paddingVertical: 18, }}> {item} </Text> 
                          </TouchableOpacity>
                        )}
                        keyExtractor={(item, index) => `flatlist-categories-${index}`}
                        />
              
        </Container>
    )
}

export default Menu