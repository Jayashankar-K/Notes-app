import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProfileInfo from '../Cards/ProfileInfo';
import SearchBar from '../SearchBar/SearchBar';
import NoteImg from "/note.png"

const Navbar = ({ userInfo, onSearchNote, handleClearSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const onLogout = () => {
    localStorage.clear();
    navigate('/login');
  };

  const handleSearch = () => {
    if (searchQuery) {
      onSearchNote(searchQuery);
    }
  };

  const onClearSearch = () => {
    setSearchQuery('');
    handleClearSearch();
  };

  return (
    <div className='bg-gray-200 flex flex-col sm:flex-row sm:items-center sm:justify-between px-6 py-2 drop-shadow'>
      <div className='flex items-center justify-start w-full sm:w-auto'>
        <img src={NoteImg} className='w-10 h-10 mr-2'></img> {/* Adjusted margin for spacing */}
        <h2 className='text-xl font-medium text-black py-2'>Quick Notes</h2>
        {userInfo && (
          <div className='sm:hidden ml-auto'> {/* Aligns ProfileInfo to the right */}
            <ProfileInfo userInfo={userInfo} onLogout={onLogout} />
          </div>
        )}
      </div>
      <div className='w-full sm:w-auto mt-2 sm:mt-0'>
        {userInfo && (
          <SearchBar
            value={searchQuery}
            onChange={({ target }) => setSearchQuery(target.value)}
            handleSearch={handleSearch}
            onClearSearch={onClearSearch}
            fullWidth={true} // Ensure the SearchBar covers full width on smaller screens
          />
        )}
      </div>
      {userInfo && (
        <div className='hidden sm:flex'>
          <ProfileInfo userInfo={userInfo} onLogout={onLogout} />
        </div>
      )}
    </div>
  );
};

export default Navbar;
