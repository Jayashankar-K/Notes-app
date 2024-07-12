import React from 'react';
import { FaSearch, FaTimes } from 'react-icons/fa';

const SearchBar = ({ value, onChange, handleSearch, onClearSearch, fullWidth }) => {
  return (
    <div className={`flex items-center ${fullWidth ? 'w-full' : 'w-80'} px-4 bg-slate-100 rounded-md`}>
      <input
        type="text"
        placeholder='Search Notes'
        className='w-full text-sm bg-transparent py-2 outline-none'
        value={value}
        onChange={onChange}
      />
      {value && (
        <FaTimes
          className='text-xl text-slate-500 cursor-pointer hover:text-black ml-3'
          onClick={onClearSearch}
        />
      )}
      <FaSearch
        className='text-slate-400 cursor-pointer hover:text-black ml-3'
        onClick={handleSearch}
      />
    </div>
  );
};

export default SearchBar;
