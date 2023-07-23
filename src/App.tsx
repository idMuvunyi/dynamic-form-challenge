import React, { useState } from 'react';
import './index.css';
import {
  CustomButton,
  FormCheckBox,
  FormIntput,
  FormSelectBox,
} from './components';

function App() {
  // initialize name state as empty string
  const [name, setName] = useState<string>('');

  return (
    <main className="Container mx-auto p-10 flex flex-col justify-center items-center">
      <div className="w-90">
        <div className="flex flex-1 flex-col content-center">
          <h4 className="text-2xl font-bold text-teal-900">
            Please enter your name and pick the Sectors you are currently
            involved in
          </h4>
          <FormIntput name={name} setName={setName} />
        </div>
        <FormSelectBox />
        <FormCheckBox />
        <CustomButton title="Save" handleBtnClick={() => {}} />
      </div>
    </main>
  );
}

export default App;
