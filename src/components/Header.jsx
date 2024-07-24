import { Avatar, Dropdown, Navbar } from "flowbite-react";

import logo from "../assets/logo.gif";
export default function Header() {
  return (
    <Navbar fluid rounded className="fixed w-full z-40  shadow-md mb-4">
      <Navbar.Brand href="./">
        <img src={logo} className="m-5 h-16  rounded-full" alt="" />
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
          <Dropdown.Item>Profile</Dropdown.Item>

          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <div className="hover:bg-gray-200 rounded-lg px-2">
          <Navbar.Link
            href="/"
            active
            className="hover:text-green-400  text-lg"
          >
            Home
          </Navbar.Link>
        </div>
        <div className="hover:bg-gray-200 rounded-lg px-2 active:text-green-400 hover:text-green-400">
          <Navbar.Link href="/about" className="  text-lg">
            About
          </Navbar.Link>
        </div>
        <div className="hover:bg-gray-200 rounded-lg px-2">
          <Navbar.Link className="hover:text-green-400  text-lg">
            <Dropdown label="Features" inline className="">
              <Dropdown.Item href="/clean" className="hover:text-green-400  ">
                Clean
              </Dropdown.Item>
              <Dropdown.Item href="/plant" className="hover:text-green-400  ">
                Plant
              </Dropdown.Item>
              <Dropdown.Item className="hover:text-green-400  ">
                Farming
              </Dropdown.Item>
              <Dropdown.Item href="/news" className="hover:text-green-400  ">
                News
              </Dropdown.Item>
            </Dropdown>
          </Navbar.Link>
        </div>
        <div className="hover:bg-gray-200 rounded-lg px-2">
          <Navbar.Link href="/donate" className="hover:text-green-400  text-lg">
            Donate
          </Navbar.Link>
        </div>
        <div className="hover:bg-gray-200 rounded-lg px-2">
          <Navbar.Link className="hover:text-green-400  text-lg">
            <Dropdown label="Join" inline className="">
              <Dropdown.Item href="/clean" className="hover:text-green-400  ">
                Clean-up
              </Dropdown.Item>
              <Dropdown.Item href="/plant" className="hover:text-green-400  ">
                Plantation
              </Dropdown.Item>
              <Dropdown.Item className="hover:text-green-400  ">
                Farming
              </Dropdown.Item>
              <Dropdown.Item href="/news" className="hover:text-green-400  ">
                News
              </Dropdown.Item>
            </Dropdown>
          </Navbar.Link>
        </div>
        <div className="hover:bg-gray-200 rounded-lg px-2">
          <Navbar.Link
            href="/contact"
            className="hover:text-green-400  text-lg"
          >
            Contact
          </Navbar.Link>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
}
