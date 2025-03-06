import { NavLink, Outlet } from 'react-router-dom'



function RootLayout() {




    return (
        <div className='root-layout'>
            <header className='resize'> 
            
                <nav className='bg-black text-blue-300 aspect-auto'>
                   
                    <span className='flex items-center justify-center sm:gap-0.5 md:gap-10 lg:gap-20 xl:gap-36 2xl:gap-40'>
                        <img className='w-8 gap-10 text-9*1 font-extrabold rounded-full' src='src/assets/images/pic14.png' alt='logo' />
                        <NavLink className='hover:text-green-600' to='/'>Home</NavLink>
                        <NavLink className='hover:text-green-600' to='Projects'>Projects</NavLink>
                        <NavLink className='hover:text-green-600' to='Skills'>Skills</NavLink>
                        <img className='w-8 gap-10 text-9*1 font-extrabold rounded-full' src='src/assets/images/pic14.png' alt='logo' />
                    </span>

                </nav>
            </header>
            <main>
                <Outlet />
            </main>



        </div>


    )
}
export default RootLayout