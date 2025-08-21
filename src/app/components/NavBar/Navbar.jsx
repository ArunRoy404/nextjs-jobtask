
import Logo from "../Logo/Logo";
import NavActions from "./NavActions";
import NavLinks from "./NavLinks";


const Navbar = () => {
    return (
        <nav className="py-3 fixed top-0 w-full backdrop-blur-2xl z-[1000]">
            <div className="z-100 w-full flex ">
                <div className="navbar container px-4 sm:px-6 lg:px-8 mx-auto flex justify-between">
                    <div className="flex items-center gap-20 flex-1">

                        {/* logo  */}
                        <Logo />
                    </div>

                    <div className="flex items-center gap-10">
                        {/* nav links  */}
                        <ul className="hidden md:block font-semibold menu menu-horizontal px-1 space-x-10">
                            <NavLinks />
                            {/* nav actions  */}
                        </ul>
                        <NavActions />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;  