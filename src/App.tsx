import React, { FormEvent, useEffect, useState } from 'react';
import './index.css';
import {
  CustomButton,
  FormCheckBox,
  FormIntput,
  FormSelectBox,
  Modal,
} from './components';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { collection, updateDoc, getDocs, doc } from '@firebase/firestore';
import { db } from './utils';

function App() {
  // get database instance
  const query = collection(db, 'sectors');
  // get access to firebase documents
  const [docs, loading, error] = useCollectionData(query);

  // initialize app states
  const [userName, setName] = useState<string>('');
  const [sectors, setSectors] = useState<object>({});
  const [chosenSector, setChosenSector] = useState<string>('');
  const [isAgreed, setIsAgreed] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (docs !== undefined) {
      const { name, termsAgreed, selectedSector } = docs[1];
      setName(name);
      setChosenSector(selectedSector);
      setIsAgreed(termsAgreed);
      setSectors(docs[0]);
    }
  }, [docs]);

  // submit the form to database
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // get reference to only the user details document
    const docReference = doc(db, 'sectors', 'userDetails');

    // update form data
    updateDoc(docReference, {
      name: userName,
      selectedSector: chosenSector,
      termsAgreed: isAgreed,
    })
      .then((res) => {
        setIsOpen(true);
      })
      .catch((err) => {
        alert('Sectors not update, Try again!');
      });
  };

  return (
    <main className="Container mx-auto p-10 flex flex-col justify-center items-center">
      <form action="" onSubmit={handleSubmit}>
        <div className="w-90">
          <div className="flex flex-1 flex-col content-center">
            <h4 className="md:text-xl font-bold text-teal-900 flex p-5  mb-10 bg-orange-100 text-center sm:text-sm rounded-md">
              Please enter your name and pick the Sectors you are currently
              involved in
            </h4>
            <FormIntput name={userName} setName={setName} />
          </div>
          <FormSelectBox
            sectors={sectors}
            selectedSector={chosenSector}
            setSelectedSector={setChosenSector}
          />
          <FormCheckBox isAgreed={isAgreed} setIsAgreed={setIsAgreed} />
          <CustomButton title="Save" />
        </div>
      </form>
      <Modal isOpen={isOpen} closeModal={() => setIsOpen(false)} />
    </main>
  );
}

export default App;
