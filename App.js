import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import axios from 'axios';

const CurrencyConverter = () => {
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('BRL');
  const [amount, setAmount] = useState('1');
  const [result, setResult] = useState('');

  const convertCurrency = async () => {
    const response = await axios.get(`https://api.exchangerate.host/convert?from=${fromCurrency}&to=${toCurrency}&amount=${amount}`);
    setResult(response.data.result.toFixed(2));
  };

  return (
    <View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <TextInput
          value={amount}
          onChangeText={setAmount}
          style={{ padding: 10, borderWidth: 1, flex: 1 }}
        />
        <Text style={{ padding: 10 }}>{fromCurrency}</Text>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <TextInput
          value={result.toString()}
          style={{ padding: 10, borderWidth: 1, flex: 1 }}
          editable={false}
        />
        <Text style={{ padding: 10 }}>{toCurrency}</Text>
      </View>
      <TouchableOpacity onPress={convertCurrency} style={{ backgroundColor: 'blue', padding: 10, borderRadius: 5 }}>
        <Text style={{ color: 'white', textAlign: 'center' }}>Convert</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CurrencyConverter;