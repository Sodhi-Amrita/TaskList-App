import React from 'react'
import { useState } from 'react'

type searchProps = {
    onSearch: (title:string) => void
}

 const Search = ({onSearch}: searchProps) => {
    const [search, setSearch] = useState('');

    function handleChange(e: React.ChangeEvent<HTMLInputElement>)
    {
        setSearch(e.target.value)
        onSearch(e.target.value)
    }
  return (
    <div>
        <form className='searchForm'>
            
            <label> Search Tasks: </label>
            <input type="text" placeholder='Enter Title/Tasks' value={search} onChange={handleChange}/>
        </form>
    </div>
  )
}

export default Search;
