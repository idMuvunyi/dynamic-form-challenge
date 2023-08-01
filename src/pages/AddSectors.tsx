import React from 'react';
import {
  CustomButton,
  FormCheckBox,
  FormIntput,
  FormSelectBox,
  Modal,
} from '../components';

// add sector page view

const AddSectors = ({
  userName,
  setName,
  sectors,
  selectedSector,
  setSelectedSector,
  isAgreed,
  setIsAgreed,
  isOpen,
  closeModal,
  onSubmit,
}: any) => {
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="w-90">
          <div className="flex flex-1 flex-col content-center">
            <h4 className="md:text-xl font-bold text-teal-900 flex p-5  mb-10 bg-orange-100 text-center sm:text-sm rounded-md">
              Please enter your name and pick the Sectors you are currently
              involved in
            </h4>
            <FormIntput name={userName} setName={setName} isAddView={true} />
          </div>
          <FormSelectBox
            sectors={sectors}
            selectedSector={selectedSector}
            setSelectedSector={setSelectedSector}
          />
          <FormCheckBox
            isAgreed={isAgreed}
            setIsAgreed={setIsAgreed}
            isAddView={true}
          />
          <CustomButton title="Save" additionalStyles="bg-teal-500" />
        </div>
      </form>
      <Modal isOpen={isOpen} closeModal={closeModal} isAddView={true} />
    </div>
  );
};

export default AddSectors;
