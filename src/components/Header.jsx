import { Avatar, Dropdown, Navbar } from "flowbite-react";

import logo from "../assets/logo.gif";
export default function Header() {
  return (
    <Navbar fluid rounded className="fixed w-full z-40  shadow-md mb-4">
      <Navbar.Brand href="./">
        <img src={logo} className="m-5 h-12  rounded-full" alt="" />
      </Navbar.Brand>
      <div className="flex md:order-2 px-4">
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
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">
              name@flowbite.com
            </span>
          </Dropdown.Header>
          <Dropdown.Item>Education</Dropdown.Item>
          <Dropdown.Item>Profile</Dropdown.Item>

          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="/" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="achivement">Achivement</Navbar.Link>
        <Navbar.Link href="admission">Admission</Navbar.Link>
        <Navbar.Link href="/class">Class</Navbar.Link>
        <Navbar.Link href="/result">Result</Navbar.Link>
        <Navbar.Link href="/about">About</Navbar.Link>
        <Navbar.Link href="/contact">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
