import React, {useRef, useState} from 'react';
import {View, Text, KeyboardAvoidingView, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import {useDispatch} from 'react-redux';
import {signin, signup} from '../../store/actions/auth.action';
import {colors} from '../../constants/theme';
import Input from '../../components/input/index';

const AuthScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isNotValid, setIsNotValid] = useState(true);
  const [isLogin, setIsLogin] = useState(true);
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const dispatch = useDispatch();

  const onChangeInput = (value, type) => {
    if (type === 'email') {
      setEmail(value);
    }
    if (type === 'password') {
      setPassword(value);
    }

    if (
      emailInputRef.current.state.validate &&
      passwordInputRef.current.state.validate
    ) {
      setIsNotValid(false);
    } else {
      setIsNotValid(true);
    }
  };

  const handleAuth = () => {
    if (isLogin) {
      dispatch(signin(email, password));
    } else {
      dispatch(signup(email, password));
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="height"
      keyboardVerticalOffset={50}
      enabled>
      <View style={styles.containerCard}>
        <Text style={styles.formTitle}>{isLogin ? 'Login' : 'Register'}</Text>
        <View style={styles.formContainer}>
          <Input
            ref={emailInputRef}
            label="Email"
            placeholder="Enter your email"
            placeholderTextColor={colors.placeholder}
            keyboardType="email-address"
            type="email"
            autoCapitalize="none"
            autoCorrect={false}
            onChangeInput={value => onChangeInput(value, 'email')}
            value={email}
            maxLength={60}
          />
          <Input
            ref={passwordInputRef}
            label="Password"
            placeholder="Enter your password"
            placeholderTextColor={colors.placeholder}
            type="password"
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry
            onChangeInput={value => onChangeInput(value, 'password')}
            value={password}
            maxLength={20}
          />
        </View>

        <TouchableOpacity
          onPress={() => handleAuth()}
         
          color={colors.primaryColor}
          style={styles.linkButton}>
          <Text style={styles.linkButtonText}>
            {isLogin ? 'Login' : 'Register'}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setIsLogin(!isLogin)}>
          <Text style={styles.linkText}>
            {isLogin ? '¿New here? Sign up' : '¿Already registered? Login'}
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default AuthScreen;
