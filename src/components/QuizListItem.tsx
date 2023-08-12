import {View, Text, Pressable, Image} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
//types import
import {QuizListData} from '../types/types';
import {UseNavigationProp} from '../navigation/navigationType';

const QuizListItem = ({data, index}: {data: QuizListData; index: number}) => {
  const navigation = useNavigation<UseNavigationProp<'Profile'>>();
  return (
    <View
      className={`w-1/2 h-[200px] flex-grow relative ${
        index % 2 === 0 ? 'pr-3' : 'pl-3'
      }`}>
      <Pressable
        className="w-full h-full bg-gray-50 rounded-2xl shadow-md shadow-gray-700 items-start justify-center px-3"
        onPress={() => navigation.navigate('Quiz', {data: data})}>
        <View>
          <Image
            source={data.url}
            style={{width: 100, height: 100, resizeMode: 'contain'}}
          />
        </View>
        <View className="pl-2">
          <Text className="font-semibold text-2xl text-gray-950">
            {data.category.toLocaleUpperCase()}
          </Text>
          <Text className="text-xs font-semibold">Level 1</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default QuizListItem;
