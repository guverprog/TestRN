import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {changeCurrentId} from '../redux/reducerList';
const ListPersonsItem = ({
  name,
  id,
  item,
  onPress,
  backgroundColor,
  textColor,
}) => {
  dispatch = useDispatch();
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        [dispatch(changeCurrentId(id)), onPress()];
      }}>
      <View
        accessibilityRole="button"
        style={[styles.container, backgroundColor]}>
        <Image
          source={{
            uri: `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`,
          }}
          resizeMode="cover"
          style={styles.img}
        />
        <Text style={[styles.text, textColor]}>{name}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderRadius: 5,
    borderWidth: 1,
    marginTop: 10,
    width: '80%',
    marginLeft: '10%',
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
  },
  img: {
    width: 40,
    height: 40,
    position: 'absolute',
    top: 15,
    left: 10,
  },
});
export default ListPersonsItem;
