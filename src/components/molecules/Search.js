import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

export default function Search() {
  return (
    <div className="bg-white mt-4 mx-4 p-5 box-border flex flex-col lg:flex-row lg:justify-between">
      <div>
        <h1 className="text-torquise text-xl font-bold">PERSONNEL LIST</h1>
        <p className="text-[#444444]">List of all personnels</p>
      </div>
      <div className="lg:flex">
        <input
          type="text"
          placeholder="Find Personnels"
          className="p-2 my-2 border border-[#444444]"
        />
        {/* <FontAwesomeIcon icon={faMagnifyingGlass} color="white" /> */}
        <button
          type="button"
          className="flex items-center justify-between bg-torquise p-3 lg:ml-3 lg:my-2"
        >
          <p className="text-white font-bold pr-3">ADD PERSONNEL</p>
          <FontAwesomeIcon icon={faPlus} color="white" />
        </button>
      </div>
    </div>
  );
}
