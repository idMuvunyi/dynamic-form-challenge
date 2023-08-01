import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';

interface ModalProps {
  isOpen: boolean;
  isAddView: boolean;
  closeModal: () => void;
  styles?: string;
}

const Modal = ({ isOpen, isAddView, closeModal, styles }: ModalProps) => {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex   justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-md font-medium leading-6 text-teal-900"
                  >
                    {isAddView
                      ? 'Sector Saved successfully'
                      : 'Information updated Successfully'}
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      {isAddView
                        ? ' You have successfully saved your sector and name in our database. Thank you !'
                        : 'You have successfully updated your sector and name in our database. Thank you !'}
                    </p>
                  </div>

                  <div className="mt-4 flex justify-between">
                    <button
                      type="button"
                      className={`inline-flex justify-center rounded-md border border-transparent bg-teal-500 px-4 py-1 text-sm font-medium text-white hover:bg-teal-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2`}
                      onClick={closeModal}
                    >
                      Ok
                    </button>
                    <Link to={isAddView ? '/edit' : '/'}>
                      <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent bg-teal-500 px-4 py-1 text-sm font-medium text-white hover:bg-teal-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2"
                        onClick={closeModal}
                      >
                        {isAddView ? 'Edit Info' : 'Go Back'}
                      </button>
                    </Link>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Modal;
