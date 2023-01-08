import { View } from "react-native"

export default function Card({children, style}) {
  return (
    <View style={[styles.cardContainer, style]}>{children}</View>
    )
}

const styles = ({
  cardContainer: {
    backgroundColor: '#72063c',
    marginTop: 50,
    marginHorizontal: 24,
    padding: 16,
    borderRadius: 8,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 1,
    alignItems: 'center',

  },
})
