import { Navbar } from 'flowbite-react';

const NavbarComponenet = () => {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand>
        <img src="src/assets/react.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite React</span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="#">
          About
        </Navbar.Link>
        <Navbar.Link>Services</Navbar.Link>
        <Navbar.Link>Pricing</Navbar.Link>
        <Navbar.Link>Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarComponenet
