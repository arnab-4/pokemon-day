import config_values from '../utilities/config';
import {  Fragment, useState, useEffect } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid';

function Filter(props){
    const [filterValue, setFilterValue] = useState("none");

    useEffect(()=>{
        props.onFilter(filterValue);
    }, [filterValue])


    return (        
        <div className = 'my-4'>
            <Listbox value = { filterValue }  onChange={ setFilterValue }>
                <div className="relative mt-1">
                    <Listbox.Button className="relative p-2 font-medium text-amber-600 bg-amber-100 hover:bg-amber-200 rounded-lg shadow-lg cursor-pointer">
                        <span className = 'flex items-center px-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clipRule="evenodd" />
                            </svg>
                            { filterValue === "none" ? "Region" : filterValue }
                        </span>
                    </Listbox.Button>

                    <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >

                        <Listbox.Options className="absolute w-48 py-1 mt-1 text-base bg-white rounded-md shadow-lg max-h-60">
                            <Listbox.Option className = "px-2 mt-1 hover:bg-amber-300"
                                key = { "none" } value = { "none" }
                            >
                                All
                            </Listbox.Option>
                            
                            { 
                                config_values.REGIONS.map(region => (
                                    <Listbox.Option className = "px-2 mt-1 hover:bg-amber-300"
                                        key={ region.id }
                                        value={ region.name }
                                    >
                                        { region.name }
                                    </Listbox.Option>
                            ))}
                        </Listbox.Options>
                    </Transition>
                </div>
            </Listbox>
      </div>
    )
}


export default Filter;