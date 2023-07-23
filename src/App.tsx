import React, { useState } from 'react';
import './index.css';
import {
  CustomButton,
  FormCheckBox,
  FormIntput,
  FormSelectBox,
} from './components';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { collection } from '@firebase/firestore';
import { db } from './utils';

function App() {
  const query = collection(db, 'sectors');
  const [docs, loading, error] = useCollectionData(query);

  console.log('all data', docs);
  // initialize name state as empty string
  const [userName, setName] = useState<string>('');
  const [updatedData, setData] = useState<[]>([]);

  console.log(userName);
  return (
    <main className="Container mx-auto p-10 flex flex-col justify-center items-center">
      <div className="w-90">
        <div className="flex flex-1 flex-col content-center">
          <h4 className="text-2xl font-bold text-teal-900 ">
            Please enter your name and pick the Sectors you are currently
            involved in
          </h4>
          <FormIntput name={docs ? docs[1].name : userName} setName={setName} />
        </div>
        <FormSelectBox sectors={docs ? docs[0] : []} />
        <FormCheckBox isAgreed={docs ? docs[1].termsAgreed : false} />
        <CustomButton title="Save" handleBtnClick={() => {}} />
      </div>
    </main>
  );
}

export default App;
