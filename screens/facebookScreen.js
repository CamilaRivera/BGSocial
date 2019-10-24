import * as Facebook from 'expo-facebook';
import React from 'react';
import {
  View,
  Button,
  Alert
} from 'react-native';
import { useNavigation } from 'react-navigation-hooks';

async function loginWithFacebook() {
  try {
    const {
      type,
      token,
      expires,
      permissions,
      declinedPermissions,
    } = await Facebook.logInWithReadPermissionsAsync('561305434657781', {
      permissions: ['public_profile'],
    });
    if (type === 'success') {
      // Get the user's name using Facebook's Graph API
      const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
      Alert.alert('Logged in!', `Hi ${(await response.json()).name}!`);
    } else {
      // type === 'cancel'
    }
  } catch ({ message }) {
    alert(`Facebook Login Error: ${message}`);
  }
}

export default function fbScreen() {
  const { navigate } = useNavigation();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button
        onPress={() => loginWithFacebook()}
        title="Login with facebook"
      >
      </Button>
      <Button
        onPress={() => navigate('Auth')}
        title="authScreen"
      >
      </Button>
    </View>
  );
}

