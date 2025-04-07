
import Navigator from './src/navigation/Navigator';

import { useState } from 'react';
import { Provider } from 'react-redux';
import Store from './src/Store/Store';



export default function App() {

  const [categorySelected, setCategorySelected] = useState('');
  const [itemIdSelected, setItemIdSelected] = useState("");

  // const { initDB } = useDB();

  // useEffect(() => {
  //   initDB();
  // }, []);

  return (


    <Provider store={Store}>
        <Navigator />
      </Provider>




  );
}


