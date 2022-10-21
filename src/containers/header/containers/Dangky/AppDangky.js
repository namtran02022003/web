function AppDangky({ onSetDisplay }) {
    return (
        <>
            <div className="positionfixed" id='dangky'>
                <div className='login-form'>
                    <form className='p-3'>
                        <h2 className='text-center'>dangky</h2>
                        <div className='py-2'>
                            <label className='py-2'>UserName:</label>
                            <input type="text" className='form-control' placeholder='Enter userName...'></input>
                        </div>
                        <div className='py-2'>
                            <label className='py-2'>Password:</label>
                            <input type="password" className='form-control' placeholder='Enter passwork...'></input>
                        </div>
                        <div className='py-2'>
                            <label className='py-2'>re-enter paswork:</label>
                            <input type="password" className='form-control' placeholder='re-enter passwork...'></input>
                        </div>
                        <div className='py-3 d-grid  text-center'>
                            <button type='submit' className='btn rounded-4 btn-block btn-info'>dang ky</button>
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
export default AppDangky