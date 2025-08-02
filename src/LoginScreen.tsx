import React, { useState } from 'react';
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Alert,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';

type LoginScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Login'>;

type Props = {
  navigation: LoginScreenNavigationProp;
};

const LoginScreen: React.FC<Props> = ({ navigation }) => {
  const [usePhoneLogin, setUsePhoneLogin] = useState(false);

 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  
  const [phone, setPhone] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState('');

  const handleLogin = () => {
    if (usePhoneLogin) {
      if (otp === '1234') {
        navigation.navigate('Home');
      } else {
        Alert.alert('Invalid OTP');
      }
    } else {
      if (email === 'anupam@gmail.com' && password === '12345678') {
        navigation.navigate('Home');
      } else {
        Alert.alert('Invalid email or password');
      }
    }
  };

  const handleSendOtp = () => {
    if (phone.length == 10) {
      setOtpSent(true);
      Alert.alert('OTP Sent to your phone');
    } else {
      Alert.alert('Enter valid phone number');
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.png')} style={styles.logo} />
      <Text style={styles.title}>Welcome</Text>
      <Text style={styles.subtitle}>
        {usePhoneLogin ? 'Login with Phone Number' : 'Login with Email'}
      </Text>

      {usePhoneLogin ? (
        <>
          <TextInput
            style={styles.input}
            placeholder="Phone Number"
            keyboardType="phone-pad"
            value={phone}
            onChangeText={setPhone}
            placeholderTextColor="#999"
          />

          {otpSent && (
            <TextInput
              style={styles.input}
              placeholder="Enter OTP"
              keyboardType="number-pad"
              value={otp}
              onChangeText={setOtp}
              placeholderTextColor="#999"
            />
          )}

          {!otpSent ? (
            <TouchableOpacity style={styles.button} onPress={handleSendOtp}>
              <Text style={styles.buttonText}>Send OTP</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
          )}
        </>
      ) : (
        <>
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#999"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#999"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />

          <TouchableOpacity style={styles.button} onPress={handleLogin} activeOpacity={0.8}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </>
      )}

      {}
      <TouchableOpacity
        onPress={() => {
          setUsePhoneLogin(!usePhoneLogin);
          setOtpSent(false);
        }}
        style={{ marginTop: 20 }}
      >
        <Text style={{ color: '#fff', textAlign: 'center' }}>
          {usePhoneLogin ? 'Use Email Instead' : 'Use Phone Instead'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    paddingTop: 60,
    backgroundColor: '#4c669f',
    justifyContent: 'flex-start',
  },
  logo: {
    width: 130,
    height: 130,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    color: '#fff',
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 16,
    color: '#e0e0e0',
    textAlign: 'center',
    marginBottom: 30,
  },
  input: {
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  button: {
    height: 50,
    backgroundColor: '#3b5998',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    shadowColor: '#3b5998',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default LoginScreen;
