import './input.css'
import { memo } from 'react'
function Input(){
    return(
        <>
        <input 
        placeholder="search..."
        className='input_search'
        />
        <button type='button' className='btn btn-info'>search</button>
        </>
    )
}
export default memo(Input)