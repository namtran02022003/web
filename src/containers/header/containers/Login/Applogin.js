import './App.css'
function AppLogin({ onSetDisplay }) {
    return (
        <>
            <div className="positionfixed" id='login'>
                <div className='login-form'>
                    <form className='p-3'>
                        <h2 className='text-center'>login</h2>
                        <div className='py-2'>
                            <label className='py-2'>UserName:</label>
                            <input type="text" className='form-control' placeholder='Enter userName...'></input>
                        </div>
                        <div className='py-2'>
                            <label className='py-2'>Password:</label>
                            <input type="password" className='form-control' placeholder='Enter passwork...'></input>
                        </div>
                        <div className='py-3 d-grid  text-center'>
                            <button type='submit' className='btn rounded-4 btn-block btn-info'>login</button>
                        </div>
                        <div>
                            <p>forgot your passwork?</p>
                        </div>
                        <span>
                            <button onClick={onSetDisplay} type='button' className='btn-close'></button>
                        </span>
                    </form>
                </div>
            </div>
        </>
    )
}
export default AppLogin