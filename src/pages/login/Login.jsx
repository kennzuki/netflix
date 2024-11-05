const Login = () => {
  return (
    <div className="p-8  bg-[url('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.RJuYKiQ1F8UycaCM_p5YuwHaEK%26pid%3DApi&f=1&ipt=564c4463e3621908315c4c144accac85c55a3a690fd8fa3f265eb2912fe5bbff&ipo=images')] bg-cover h-screen ">
      <h1 className='text-red-600 uppercase text-3xl font-bold absolute '>
        Netflix
      </h1>
      <section className='bg-[rgba(0,0,0,0.75)] w-[350px] m-auto p-4 rounded-xl flex flex-col gap-4'>
        <h2 className='text-white capitalize text-xl mb-4'>Sign Up</h2>
        <form
          action=''
          className='flex flex-col gap-4  m-auto [&_input]:border [&_input]:rounded-xl [&_input]:py-2 [&_input]:px-3 [&_input]:bg-[#333333] [&_input]:text-gray-300'
        >
          <input type='text' className='' placeholder='Name' />
          <input type='email' className='' placeholder='Email' />
          <input type='password' className='' placeholder='Password' />
          <button className='py-2 px-3 bg-[#e50914] text-white rounded-xl cursor-pointer'>
            sign Up
          </button>
          <div className='flex justify-between gap-4'>
            <div className=''>
              <input type='checkbox' className='mr-2' />
              <label htmlFor='' className='text-gray-300'>
                Remember Me
              </label>
            </div>

            <p className='underline text-white'>Need Help</p>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Login;
