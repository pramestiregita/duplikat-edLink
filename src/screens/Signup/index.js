import React, {useRef} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import {Button} from 'native-base';
import {Formik} from 'formik';
import * as Yup from 'yup';
import Icon from 'react-native-vector-icons/FontAwesome5';

import styles from './style';

const singupSchema = Yup.object().shape({
  email: Yup.string()
    .email('Please input a valid email')
    .required('Please input your email'),
  name: Yup.string().required('Please insert your name'),
  password: Yup.string()
    .min(8, 'min. 8 karakter')
    .required('Please input your password'),
  confrimPassword: Yup.string()
    .required('Please input your password')
    .oneOf([Yup.ref('password'), null], "Password doesn't match"),
});

export default function Signup({navigation}) {
  const name = useRef(null);
  const password = useRef(null);
  const confrimPassword = useRef(null);

  const doSignup = (values) => {
    console.log(values);
    navigation.navigate('Verification');
  };

  return (
    <ScrollView style={styles.parent}>
      <Text style={styles.title}>Daftar Baru</Text>
      <Text style={styles.subtitle}>
        Silahkan melengkapi data di bawah ini untuk daftar akun edLink
      </Text>
      <Formik
        validationSchema={singupSchema}
        initialValues={{
          email: '',
          name: '',
          password: '',
          confrimPassword: '',
        }}
        onSubmit={(values) => doSignup(values)}>
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
                onSubmitEditing={() => name.current.focus()}
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
              <Text style={styles.label}>Nama Lengkap</Text>
              <TextInput
                style={styles.input}
                placeholder="Masukkan nama Anda"
                value={values.name}
                onBlur={handleBlur('name')}
                onChangeText={handleChange('name')}
                onSubmitEditing={() => password.current.focus()}
                autoCapitalize="words"
                blurOnSubmit={false}
                ref={name}
              />
              {errors.name && touched.name ? (
                <View style={styles.alertWrapper}>
                  <Icon
                    style={styles.alertIcon}
                    name="exclamation-triangle"
                    size={9}
                  />
                  <Text style={styles.alert}>{errors.name}</Text>
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
                onSubmitEditing={() => confrimPassword.current.focus()}
                blurOnSubmit={false}
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
            <View style={styles.inputWrapper}>
              <Text style={styles.label}>Konfirmasi Kata Sandi</Text>
              <TextInput
                secureTextEntry
                style={styles.input}
                placeholder="Ketik ulang kata sandi"
                value={values.confrimPassword}
                onBlur={handleBlur('confrimPassword')}
                onChangeText={handleChange('confrimPassword')}
                onSubmitEditing={handleSubmit}
                ref={confrimPassword}
              />
              {errors.confrimPassword && touched.confrimPassword ? (
                <View style={styles.alertWrapper}>
                  <Icon
                    style={styles.alertIcon}
                    name="exclamation-triangle"
                    size={9}
                  />
                  <Text style={styles.alert}>{errors.confrimPassword}</Text>
                </View>
              ) : null}
            </View>
            <Button style={styles.signupBtn} block>
              <Text style={styles.signupBtnText}>daftar sekarang</Text>
            </Button>
          </View>
        )}
      </Formik>
      <View style={styles.bottomWrapper}>
        <Text style={styles.text}>Atau daftar dengan</Text>
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
        <View style={styles.loginWrapper}>
          <Text style={styles.text}>Sudah punya akun?</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('Login')}
            style={styles.loginBtn}>
            <Text style={styles.loginBtnText}>Masuk Sekarang</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
