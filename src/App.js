import './App.css';
import Pages from './views/pages';
import createClient from './services/apollo';
import { ApolloProvider } from '@apollo/client';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const client = createClient();
function App() {
  return (
    <ApolloProvider client={client}>
      <Pages />
      <ToastContainer />
    </ApolloProvider>
  );
}

export default App;
