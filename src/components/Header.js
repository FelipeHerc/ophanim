import React, { useState } from 'react';
import { View, StyleSheet, Image, Modal, TouchableHighlight, Text, Alert, Linking } from 'react-native';
import Logo from '../../assets/jtp.png';
import Emergency from '../../assets/police.png';
import colors from '../styles/colors';
import GradientButton from 'react-native-gradient-buttons';
import AppContext from '../context/AppContext';

const sosMessage = (trip) => {
  var messageBody = `https://api.whatsapp.com/send?phone=5511950256396&text=Ol%C3%A1%20CCO%2C%20estou%20com%20uma%20emerg%C3%AAncia%2C%20Contrato%3A%20${trip.contract}%20Veiculo%3A%20${trip.vehicle}%20Motorista%3A%20${trip.driver}`.replace(/ /g, '%20');

  return messageBody;
}

export default function Header() {
  const [modalVisible, setModalVisible] = useState(false);

  return(
    <AppContext.Consumer>
      {
        context => (
          <View style={styles.header}>
            <Modal
              animationType="slide"
              transparent={false}
              visible={modalVisible}
              onRequestClose={() => {
                setModalVisible(false);
              }}>
              <View style={styles.modal}>
                <Image
                  style={styles.siren}
                  source={Emergency}
                />

                <Text style={styles.modalText}>Deseja realmente enviar um SOS?</Text>

                <View style={styles.modalButtonBox}>
                  <TouchableHighlight
                    style={styles.modalButton}
                    underlayColor={colors.darkRed}
                    onPress={() => {
                      setModalVisible(!modalVisible);
                      Linking.openURL(sosMessage(context.trip));
                    }}>
                    <Text style={styles.modalText}>Sim</Text>
                  </TouchableHighlight>

                  <TouchableHighlight
                    style={styles.modalButton}
                    underlayColor={colors.darkRed}
                    onPress={() => {
                      setModalVisible(!modalVisible);
                    }}>
                    <Text style={styles.modalText}>Não</Text>
                  </TouchableHighlight>
                </View>
              </View>
            </Modal>

            <Image
              style={styles.JtpLogo}
              source={Logo}
            />
            <View style={styles.button}>
              <GradientButton
                text="SOS"
                textStyle={{ fontSize: 14 }}
                gradientBegin={colors.red}
                gradientEnd={colors.red}
                gradientDirection="vertical"
                height={40}
                width={65}
                radius={3}
                impact
                impactStyle='Bold'
                onPressAction={() => {
                  setModalVisible(true);
                }}
              />
            </View>
          </View>
        )
      }
    </AppContext.Consumer>
  )
}

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: colors.deepBlue,
    width: '100%',
    padding: 5,
  },
  JtpLogo: {
    justifyContent: 'center',
    width: 90,
    height: 40,
    marginLeft: 10,
  },
  button: {
    marginRight: 10,
  },
  modal: {
    backgroundColor: colors.red,
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  modalText: {
    fontFamily: 'ubuntuBold',
    fontSize: 30,
    color: colors.white,
    textAlign: 'center'
  },
  siren: {
    width: 200,
    height: 200
  },
  modalButton: {
    borderWidth: 4,
    borderColor: colors.white,
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 15,
    marginHorizontal: 20
  },
  modalButtonBox: {
    flexDirection: 'row',
  }
});
