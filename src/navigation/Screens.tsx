import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {
    Articles,
    BlankTemplate,
    CashBack,
    Components,
    Home,
    PaymentOptions,
    PhonePay,
    PrePayment,
    Pro,
    Profile,
    QRInfo,
    QRScanner,
    Register,
    SignIn,
    SignUp,
    TransactionDetail,
    UpiPay,
    UserProfile,
    Wallet
} from '../screens';
import {useScreenOptions, useTranslation} from '../hooks';

const Stack = createStackNavigator();

export default () => {
  const {t} = useTranslation();
  const screenOptions = useScreenOptions();

  return (
    <Stack.Navigator screenOptions={screenOptions.stack}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{title: t('navigation.home')}}
      />

      <Stack.Screen
        name="Components"
        component={Components}
        options={screenOptions.components}
      />

      <Stack.Screen
        name="Articles"
        component={Articles}
        options={{title: t('navigation.articles')}}
      />

      <Stack.Screen name="Pro" component={Pro} options={screenOptions.pro} />

      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Register"
        component={Register}
        options={{headerShown: false}}
      />

      <Stack.Screen
          name="QRScanner"
          component={QRScanner}
          options={{headerShown: false}}
      />

    <Stack.Screen
        name="BlankTemplate"
        component={BlankTemplate}
        options={screenOptions.back}
      />

  <Stack.Screen
          name="QRInfo"
          component={QRInfo}
          options={{headerShown: false}}
      />

    <Stack.Screen
          name="PhonePay"
          component={PhonePay}
          options={{headerShown: false}}
      />

    <Stack.Screen
          name="UpiPay"
          component={UpiPay}
          options={{headerShown: false}}
      />
        <Stack.Screen
            name="PrePayment"
            component={PrePayment}
            options={{headerShown: false}}
        />
        <Stack.Screen
            name="UserProfile"
            component={UserProfile}
            options={screenOptions.userProfile}
        />
        <Stack.Screen
            name="PaymentOptions"
            component={PaymentOptions}
            options={screenOptions.paymentOptions}
        />
        <Stack.Screen
            name="CashBack"
            component={CashBack}
            options={screenOptions.back}
        />
         <Stack.Screen
             name="TransactionDetail"
             component={TransactionDetail}
             options={screenOptions.transactionDetail}
        />
         <Stack.Screen
             name="Wallet"
             component={Wallet}
             options={screenOptions.back}
        />
        <Stack.Screen
             name="SignIn"
             component={SignIn}
             options={{headerShown: false}}
        />
        <Stack.Screen
             name="SignUp"
             component={SignUp}
             options={{headerShown: false}}
        />

    </Stack.Navigator>
  );
};
