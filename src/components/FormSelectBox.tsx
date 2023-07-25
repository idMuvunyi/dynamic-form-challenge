import React, { Fragment, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';

const FormSelectBox = ({ sectors }: any) => {
  const [selected, setSelected] = useState('');

  const sectorArray = Object.keys(sectors).map((key) => [
    { title: key, options: sectors[key] },
  ]);

  // Extract sector option with sub-option
  const SectorOptionWithChildren = (option: any) => {
    return Object.keys(option).map((key: any) => [
      { title: key, subOptions: option[key] },
    ]);
  };

  return (
    <div className="w-85">
      <label htmlFor="select" className="font-normal text-teal-900 text-sm">
        Sectors
      </label>
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative mt-1 z-10">
          <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
            <span className="block truncate">{selected}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {sectorArray?.map((sector: any) =>
                sector.map((content: any, index: number) => (
                  <Listbox.Option
                    placeholder="Service"
                    disabled
                    key={index}
                    value={content.title}
                    className={({ active }) =>
                      `relative cursor-default select-none pl-5 pr-4 `
                    }
                  >
                    {({ selected }) => (
                      <>
                        <span className={`block truncate font-semibold`}>
                          {content.title}
                        </span>
                        {selected ? (
                          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}

                        {content.options.map(
                          (option: string | object, index: number) => (
                            <>
                              <Listbox.Option
                                key={index}
                                disabled={typeof option !== 'string'}
                                value={
                                  typeof option === 'string'
                                    ? option
                                    : SectorOptionWithChildren(option).map(
                                        (opt) =>
                                          opt.map((innerOpt) => innerOpt.title)
                                      )
                                }
                                className={({ active }) =>
                                  `relative cursor-default select-none py-1 pl-5 pr-4 ${
                                    active
                                      ? 'bg-amber-100 text-amber-900'
                                      : 'text-gray-900'
                                  }`
                                }
                              >
                                {typeof option === 'string'
                                  ? option
                                  : SectorOptionWithChildren(option).map(
                                      (opt) =>
                                        opt.map((innerOpt) => (
                                          <div key={innerOpt.title}>
                                            <span>{innerOpt.title}</span>
                                            {innerOpt.subOptions.map(
                                              (item: string) => (
                                                <Listbox.Option
                                                  key={item}
                                                  value={item}
                                                  className={({ active }) =>
                                                    `relative cursor-default select-none py-1 pl-10 pr-4 ${
                                                      active
                                                        ? 'bg-amber-100 text-amber-900'
                                                        : 'text-gray-900'
                                                    }`
                                                  }
                                                >
                                                  {item}
                                                </Listbox.Option>
                                              )
                                            )}
                                          </div>
                                        ))
                                    )}
                              </Listbox.Option>
                            </>
                          )
                        )}
                      </>
                    )}
                  </Listbox.Option>
                ))
              )}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};

export default FormSelectBox;
