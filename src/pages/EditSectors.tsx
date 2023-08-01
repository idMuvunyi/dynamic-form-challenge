import React from 'react';
import {
  CustomButton,
  FormCheckBox,
  FormIntput,
  FormSelectBox,
  Modal,
} from '../components';

// edit sector page view

const EditSectors = ({
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
      <form action="" onSubmit={onSubmit}>
        <div className="w-90">
          <div className="flex flex-1 flex-col content-center">
            <h4 className="md:text-xl font-bold text-teal-900 flex p-5  mb-10 bg-orange-100 text-center sm:text-sm rounded-md">
              Made a mistake? Go ahead and edit as you like!
            </h4>
            <FormIntput name={userName} setName={setName} />
          </div>
          <FormSelectBox
            sectors={sectors}
            selectedSector={selectedSector}
            setSelectedSector={setSelectedSector}
          />
          <FormCheckBox
            isAgreed={isAgreed}
            setIsAgreed={setIsAgreed}
            isAddView={false}
          />
          <CustomButton title="Edit" additionalStyles="bg-orange-400" />
        </div>
      </form>
      <Modal isOpen={isOpen} closeModal={closeModal} isAddView={false} />
    </div>
  );
};

export default EditSectors;
