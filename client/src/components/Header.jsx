import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { useSelector } from "react-redux";
import logo from "../assets/logo.gif";
// import { useSelector } from "react-redux";
export default function Header() {
  const { user } = useSelector((state) => state.education);
  return (
    // <div className={theme}>
    <Navbar fluid rounded className="fixed w-full z-40  shadow-md mb-4">
      <Navbar.Brand href="./">
        <img src={logo} className="m-5 h-12  rounded-full" alt="" />
      </Navbar.Brand>

      <Navbar.Collapse>
        <Navbar.Link href="/" active>
          Home
        </Navbar.Link>
        {/* <Navbar.Link href="/achivement">Achivement</Navbar.Link> */}
        <Navbar.Link href="/admission">Admission</Navbar.Link>
        <Navbar.Link href="/class">Class</Navbar.Link>
        <Navbar.Link href="/result">Result</Navbar.Link>
        <Navbar.Link href="/about">About</Navbar.Link>
        <Navbar.Link href="/contact">Contact</Navbar.Link>
      </Navbar.Collapse>
      <div className="flex justify-center items-center border-2 border-[#0e7490] rounded-lg mb-2">
        <input
          id="search"
          type="search"
          className="border-none outline-none focus:outline-none p-2 bg-gray-200 rounded-l-md"
        />

        <button type="submit" className="bg-[#0e7490] border-none p-2">
          Search
        </button>
      </div>
      {user ? (
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar
              alt="User settings"
              img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              rounded
            />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">{user.name}</span>
            <span className="block truncate text-sm font-medium">
              {user.email}
            </span>
          </Dropdown.Header>
          {user.teacher && (
            <Dropdown.Item href="/dashboard">Dashboard</Dropdown.Item>
          )}
          <Dropdown.Item href="/profile">Profile</Dropdown.Item>

          <Dropdown.Divider />
          <Dropdown.Item href="/signout">Sign out</Dropdown.Item>
        </Dropdown>
      ) : (
        <a
          href="/signin"
          className="text-xl font-semibold p-2 rounded-lg hover:bg-[#1b434e] bg-[#0e7490]"
        >
          Login
        </a>
      )}
      <div className="flex md:order-2 px-4">
        <Navbar.Toggle />
      </div>
    </Navbar>
    // </div>
  );
}
