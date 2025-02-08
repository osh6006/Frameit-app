import React, { useEffect, useRef, useState } from 'react';
import {
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
  Animated,
} from 'react-native';
import { PropsWithChildren } from 'react';
import { COLOR_PALETTE } from '@/constants/theme';

type Props = PropsWithChildren<{
  isVisible: boolean;
  onClose: () => void;
}>;

export default function OptionModal({ isVisible, children, onClose }: Props) {
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
              style={[styles.modalContent, { transform: [{ translateY }] }]}
            >
              {children}
            </Animated.View>
          </TouchableWithoutFeedback>
        </Animated.View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}

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
    backgroundColor: '#464C55',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    color: '#fff',
    fontSize: 16,
  },
});
