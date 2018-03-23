import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

const QUERY = gql`
  query ($name: String) { 
    GetFortuneCookie { 
      message
    }
    Hello (name: $name) {
      message
    }
  }
`;

class Hello extends React.Component {
  render(){
    // data é a resposta do graphql em json
    const { data } = this.props

    // se esta carregando
    if (data.loading) {
      return (<Text>Loading</Text>) 
    }

    // se falhou
    if (data.error) {
      return (<Button title="refresh" onPress={() => this.setState({dummy: 1})}>Refresh</Button>) // todo: inserir botao refresh
    }

    let hello = data.Hello.message
    let fortune = data.GetFortuneCookie.message
    
    return (
      <View>
          <Text>{hello}</Text>
          <Text>{fortune}</Text>
      </View>
    );
  }
}

export default graphql(QUERY,{
  options: ({ name }) => {return { variables: { name: name }}}
})(Hello);