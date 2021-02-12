import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import Icon from 'react-native-vector-icons/FontAwesome5';

import styles from './style';
import {Button} from 'native-base';

const verificationSchema = Yup.object().shape({
  code: Yup.string()
    .required('Please insert verification code')
    .max(5, 'Please insert a valid code'),
});

export default function Verification() {
  const email = 'demo@mail.com';

  return (
    <View style={styles.parent}>
      <Text style={styles.title}>Verifikasi Akun</Text>
      <Text style={styles.subtitle}>
        Kami telah mengirimkan kode verifikasi ke email {email}. Silahkan cek
        kotak masuk email Anda
      </Text>
      <Formik
        validationSchema={verificationSchema}
        initialValues={{code: ''}}
        onSubmit={(values) => console.log(values)}>
        {({handleBlur, handleChange, handleSubmit, errors}) => (
          <View style={styles.form}>
            <TextInput
              style={styles.input}
              placeholder="XLROT"
              onBlur={handleBlur('code')}
              onChangeText={handleChange('code')}
              onSubmitEditing={handleSubmit}
              autoCapitalize="characters"
            />
            {errors.code ? (
              <View style={styles.alertWrapper}>
                <Icon
                  style={styles.alertIcon}
                  name="exclamation-triangle"
                  size={9}
                />
                <Text style={styles.alert}>{errors.code}</Text>
              </View>
            ) : null}
            <Button style={styles.nextBtn} block>
              <Text style={styles.nextBtnText}>Lanjutkan</Text>
            </Button>
          </View>
        )}
      </Formik>
      <View style={styles.resendWrapper}>
        <Text style={styles.text}>Belum dapat email?</Text>
        <TouchableOpacity style={styles.resendBtn}>
          <Text style={styles.resendBtnText}>Kirim Ulang</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
