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
  const [name, setName] = useState<string>(docs ? docs[1].name : '');
  const [updatedData, setData] = useState<[]>([]);

  return (
    <main className="Container mx-auto p-10 flex flex-col justify-center items-center">
      <div className="w-90">
        <div className="flex flex-1 flex-col content-center">
          <h4 className="text-2xl font-bold text-teal-900 ">
            Please enter your name and pick the Sectors you are currently
            involved in
          </h4>
          <FormIntput name={name} setName={setName} />
        </div>
        <FormSelectBox sectors={docs ? docs[0] : []} />
        <FormCheckBox />
        <CustomButton title="Save" handleBtnClick={() => {}} />
      </div>
    </main>
  );
}

export default App;
