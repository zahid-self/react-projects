import React from 'react';
import Form from './components/form/Form';
import Layout from './components/layout/Layout';
import TopCard from './components/topCard/TopCard';
import Transactions from './components/transactions/Transactions';
import TransactionTitle from './components/ui/TransactionTitle';

function App() {
  return (
   <Layout>
       <div className="main">
            <div className="container">
                <TopCard/>
                <Form/>
                <TransactionTitle/>
                <Transactions/>
            </div>
        </div>
   </Layout>
  );
}

export default App;
