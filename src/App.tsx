import React, { FormEvent, useEffect, useState } from 'react';
import './index.css';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { collection, updateDoc, doc } from '@firebase/firestore';
import { db } from './utils';
import { AddSectors, EditSectors } from './pages';

// Page layout container
const PageLayout = () => (
  <main className="Container mx-auto p-10 flex flex-col justify-center items-center">
    <Outlet />
  </main>
);

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
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageLayout />}>
          <Route
            index
            element={
              <AddSectors
                userName={userName}
                setName={setName}
                sectors={sectors}
                selectedSector={chosenSector}
                setSelectedSector={setChosenSector}
                isAgreed={isAgreed}
                setIsAgreed={setIsAgreed}
                isOpen={isOpen}
                closeModal={() => setIsOpen(false)}
                onSubmit={handleSubmit}
              />
            }
          />
          <Route
            path="edit"
            element={
              <EditSectors
                userName={userName}
                setName={setName}
                sectors={sectors}
                selectedSector={chosenSector}
                setSelectedSector={setChosenSector}
                isAgreed={isAgreed}
                setIsAgreed={setIsAgreed}
                isOpen={isOpen}
                closeModal={() => setIsOpen(false)}
                onSubmit={handleSubmit}
              />
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
