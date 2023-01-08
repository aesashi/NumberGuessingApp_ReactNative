import { View, Text } from "react-native"

export default function Title({children, style}) {
  return (
    <View style={styles.titleContainer}>
      <Text style={[styles.title, style]}>{children}</Text>
    </View>
    )
}

const styles = ({
  titleContainer: {
    marginTop: 100,
    marginHorizontal: 24,
    backgroundColor: 'black',
    padding: 8,
    borderRadius: 8,
  },
  title : {
    fontSize: '34',
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
})
