import { NavLink, Outlet } from 'react-router-dom'



function RootLayout() {




    return (
        <div className='root-layout'>
            <header>
                <nav>
                   
                    <span className='bar'>
                        <img className='logo' src='src/assets/images/pic14.png' alt='logo' />
                        <NavLink to='/'>Home</NavLink>
                        <NavLink to='Projects'>Projects</NavLink>
                        <NavLink to='Skills'>Skills</NavLink>
                        <img className='logo' src='src/assets/images/pic14.png' alt='logo' />
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