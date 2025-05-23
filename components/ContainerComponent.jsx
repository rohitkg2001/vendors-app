import { SafeAreaView, StatusBar } from 'react-native'
import { styles } from '../styles/components.styles'
import { PRIMARY_COLOR } from '../styles/constant'


export default function ContainerComponent({ children, ...propStyle }) {
    return (
        <SafeAreaView style={[styles.container, { ...propStyle }]}>
            <StatusBar backgroundColor={PRIMARY_COLOR} />
            {children}
        </SafeAreaView>
    )
}