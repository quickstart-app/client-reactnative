import React from 'react';
import { ApolloProvider } from 'react-apollo'
import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-client-preset'
import Hello from './components/hello'
import { StyleSheet, View } from 'react-native';


// const httpLink = new HttpLink({ uri: 'http://localhost:3000/graphql' })
const httpLink = new HttpLink({ uri: 'https://client-react.herokuapp.com/graphql' });

this.client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <View style={styles.container}>
          <Hello name="World!" />
        </View>
      </ApolloProvider>
    );
  }
}


