import React, { useEffect, useRef, useState } from 'react';
import {
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
  Animated,
  View,
  TouchableOpacity,
} from 'react-native';
import { PropsWithChildren } from 'react';
import { COLOR_PALETTE } from '@/constants/theme';
import CustomText from './custom-text';
import CustomIcon from '../icon/custom-icon';
import { getFontStyle } from '@/lib/util';

type Props = PropsWithChildren<{
  isVisible: boolean;
  title?: string;
  onClose: () => void;
  height?: number | `${number}%`;
}>;

export default function OptionModal({
  isVisible,
  children,
  onClose,
  title,
  height,
}: Props) {
  const [modalVisible, setModalVisible] = useState(isVisible);
  const translateY = useRef(new Animated.Value(200)).current;
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (isVisible) {
      setModalVisible(true);
      Animated.parallel([
        Animated.timing(translateY, {
          toValue: 0,
          duration: 200,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 1,
          duration: 200,
          useNativeDriver: true,
        }),
      ]).start();
    } else {
      Animated.parallel([
        Animated.timing(translateY, {
          toValue: 300,
          duration: 200,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 0,
          duration: 200,
          useNativeDriver: true,
        }),
      ]).start(() => {
        setModalVisible(false);
      });
    }
  }, [isVisible, opacity, translateY]);

  return (
    <Modal
      animationType="none"
      transparent={true}
      visible={modalVisible}
    >
      <TouchableWithoutFeedback onPress={onClose}>
        <Animated.View style={[styles.overlay, { opacity }]}>
          <TouchableWithoutFeedback>
            <Animated.View
              style={[
                styles.modalContent,
                { transform: [{ translateY }], height: height },
              ]}
            >
              {title && (
                <View style={styles.titleContainer}>
                  <CustomText style={styles.title}>{title}</CustomText>
                  <TouchableOpacity onPress={onClose}>
                    <CustomIcon
                      name="X"
                      color={COLOR_PALETTE.gray20}
                    />
                  </TouchableOpacity>
                </View>
              )}
              <View style={styles.childrenContainer}>{children}</View>
            </Animated.View>
          </TouchableWithoutFeedback>
        </Animated.View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}

const title18 = getFontStyle('title18');
const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    width: '100%',
    backgroundColor: COLOR_PALETTE.gray100,
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
    paddingTop: 16,
    paddingBottom: 20,
    position: 'absolute',
    bottom: 0,
  },
  titleContainer: {
    height: 50,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontFamily: title18.fontFamily,
    fontSize: title18.fontSize,
    lineHeight: title18.lineHeight,
    color: COLOR_PALETTE.gray10,
  },

  childrenContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
});
