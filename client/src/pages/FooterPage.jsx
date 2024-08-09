import { Footer } from "flowbite-react";
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";
import logo from "../assets/logo.gif";
export function FooterPage() {
  return (
    <Footer container className="bg-[#0e7490] rounded-none sm:w-full">
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <Footer.Brand src={logo} name="Lakshay Science" />
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="about" className="text-black" />
              <Footer.LinkGroup col className="text-black">
                <Footer.Link href="/abput">About the Institue</Footer.Link>
                <Footer.Link href="contact">Contact us</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow us" className="text-black" />
              <Footer.LinkGroup col className="text-black">
                <Footer.Link href="#">Youtube</Footer.Link>
                <Footer.Link href="#">Facebook</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" className="text-black" />
              <Footer.LinkGroup col className="text-black">
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright
            href="#"
            by="Lakshya Science"
            year={2024}
            className="text-black"
          />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="#" icon={BsFacebook} className="text-blue-500" />
            <Footer.Icon
              href="#"
              icon={BsInstagram}
              className="text-pink-500"
            />
            <Footer.Icon href="#" icon={BsTwitter} className="text-sky-400" />
            <Footer.Icon href="#" icon={BsYoutube} className="text-red-500" />
          </div>
        </div>
      </div>
    </Footer>
  );
}
