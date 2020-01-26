import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../store/translate/action";

const View = styled.View`
  width: 100%;
  padding: 100px;
`;

const Text = styled.Text`
  text-align: center;
`;
const Input = styled.TextInput`
  width: 100%;
  border: 1px;
`;

const Button = styled.TouchableOpacity`
  width: 100%;
`;
const HomeScreen = () => {
  const dispatch = useDispatch();
  const { translate } = useSelector(state => state.translate);
  const [transValue, setTransValue] = useState({
    source: "ko",
    target: "vi",
    text: ""
  });
  const onChange = e => {
    const { text } = e.nativeEvent;
    setTransValue({ ...transValue, text });
  };

  const onPress = () => {
    dispatch(actions.index(transValue));
  };
  return (
    <>
      <View>
        <Input
          name="transeText"
          onChange={onChange}
          value={transValue.text}
          placeholder="말을 해라"
        ></Input>
        <Button onPress={onPress}>
          <Text>번역하기</Text>
        </Button>
      </View>
      <View>
        <Text>번역 결과: {translate.translatedText}</Text>
      </View>
    </>
  );
};

export default HomeScreen;
