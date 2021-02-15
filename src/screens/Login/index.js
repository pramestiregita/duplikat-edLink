import React, {useRef} from 'react';
import {View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import {Button} from 'native-base';
import {Formik} from 'formik';
import * as Yup from 'yup';
import Icon from 'react-native-vector-icons/FontAwesome5';

import styles from './style';

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Please input a valid email')
    .required('Please input your email'),
  password: Yup.string()
    .min(8, 'min. 8 karakter')
    .required('Please input your password'),
});

export default function Login({navigation}) {
  const password = useRef(null);

  return (
    <View style={styles.parent}>
      <Text style={styles.title}>Masuk</Text>
      <Text style={styles.subtitle}>
        Selamat Datang, masukkan emai dan kata sandi untuk masuk ke akun Anda
      </Text>
      <Formik
        validationSchema={loginSchema}
        initialValues={{email: '', password: ''}}
        onSubmit={(values) => console.log(values)}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <View style={styles.form}>
            <View style={styles.inputWrapper}>
              <Text style={styles.label}>Alamat Email</Text>
              <TextInput
                style={styles.input}
                placeholder="Masukkan alamat email"
                value={values.email}
                onBlur={handleBlur('email')}
                onChangeText={handleChange('email')}
                onSubmitEditing={() => password.current.focus()}
                keyboardType="email-address"
                autoCapitalize="none"
                blurOnSubmit={false}
              />
              {errors.email && touched.email ? (
                <View style={styles.alertWrapper}>
                  <Icon
                    style={styles.alertIcon}
                    name="exclamation-triangle"
                    size={9}
                  />
                  <Text style={styles.alert}>{errors.email}</Text>
                </View>
              ) : null}
            </View>
            <View style={styles.inputWrapper}>
              <Text style={styles.label}>Kata Sandi</Text>
              <TextInput
                secureTextEntry
                style={styles.input}
                placeholder="Masukkan kata sandi"
                value={values.password}
                onBlur={handleBlur('password')}
                onChangeText={handleChange('password')}
                onSubmitEditing={handleSubmit}
                ref={password}
              />
              {errors.password && touched.password ? (
                <View style={styles.alertWrapper}>
                  <Icon
                    style={styles.alertIcon}
                    name="exclamation-triangle"
                    size={9}
                  />
                  <Text style={styles.alert}>{errors.password}</Text>
                </View>
              ) : null}
            </View>
            <TouchableOpacity style={styles.forgotBtn}>
              <Text style={styles.forgotBtnText}>Lupa Kata Sandi?</Text>
            </TouchableOpacity>
            <Button
              onPress={() => navigation.navigate('BottomTab')}
              style={styles.loginBtn}
              block>
              <Text style={styles.loginBtnText}>masuk</Text>
            </Button>
          </View>
        )}
      </Formik>
      <View style={styles.bottomWrapper}>
        <Text style={styles.text}>Atau masuk dengan</Text>
        <Button style={styles.socialBtn} block>
          <Image
            style={styles.icon}
            source={require('../../assets/school.png')}
          />
          <Text style={styles.socialBtnText}>Siakad</Text>
        </Button>
        <Button style={styles.socialBtn} block>
          <Image
            style={styles.icon}
            source={require('../../assets/google.png')}
          />
          <Text style={styles.socialBtnText}>Google</Text>
        </Button>
        <View style={styles.signupWrapper}>
          <Text style={styles.text}>Belum punya akun?</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('Signup')}
            style={styles.signupBtn}>
            <Text style={styles.signupBtnText}>Daftar Sekarang</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
