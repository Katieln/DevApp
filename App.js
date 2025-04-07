
import Navigator from './src/navigation/Navigator';

import { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import Store from './src/Store/Store';
import { useDB } from './src/hooks/useDB';



export default function App() {

  const [categorySelected, setCategorySelected] = useState('');
  const [itemIdSelected, setItemIdSelected] = useState("");

  const { initDB } = useDB();

  useEffect(() => {
    initDB();
  }, []);

  return (


    <Provider store={Store}>
        <Navigator />
      </Provider>




  );
}


