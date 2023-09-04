import React,{ useState } from 'react';
import { useDispatch } from 'react-redux';
import { getData } from '../actions';
import { useNavigate } from 'react-router-dom';
import Header from './header';



function Search() {
    const navigate = useNavigate();
    const [input, setInput] = useState('');
 
  const dispatch = useDispatch()
 
 function handleSubmit(e) {
    e.preventDefault();
    dispatch(getData(input))
    if(input.trim()){
        navigate(`/search/${input}`)
    }
  }
  return (
    <>
   <Header title={'Search Github Repos'}/>
    <div className='search-container'>
   
    <form className="search-bar" onSubmit={handleSubmit}>
       
      <input
      value={input}
      type="search"
      name="search"
      pattern=".*\S.*"
      onChange={(e) => setInput(e.target.value)}
       required/>
       < button 
       className="search-btn"
       type="submit"
      >
        <span>Search</span>
      </button>
      </form>
      
      </div>
    
    </>
  )
}
export default Search;