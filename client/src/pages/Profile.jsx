import { Card, Button, Label, Modal, TextInput } from "flowbite-react";
import { useState } from "react";

export default function Profile() {
  // State to control modal visibility
  const [openModal, setOpenModal] = useState(false);

  // State to manage profile data
  const [profileData, setProfileData] = useState({
    name: "Bonnie Green",
    email: "bonnie.green@example.com",
    phone: "1234567890",
    class: "Class 1",
    subject: "Math",
    dream: "Engineer",
    address: "123 Street Name",
    password: "", // You might not want to pre-fill this
  });

  // Handlers to update profile data
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setProfileData({
      ...profileData,
      [id]: value,
    });
  };

  // Handler to submit profile updates
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the updated data to your backend
    console.log("Updated Profile Data:", profileData);
    setOpenModal(false); // Close the modal after submitting
  };

  return (
    <>
      <div className="flex flex-wrap pt-44 items-center justify-center pb-12">
        <Card className="max-w-sm ml-44">
          <div className="flex flex-col items-center pb-10">
            <img
              alt="Profile"
              height="96"
              src="/images/people/profile-picture-3.jpg"
              width="96"
              className="mb-3 rounded-full shadow-lg"
            />
            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
              {profileData.name}
            </h5>
            <span>{profileData.phone}</span>
            <span>{profileData.class}</span>
            <span>{profileData.dream}</span>
            <span>{profileData.address}</span>
            <div className="mt-4 flex space-x-3 lg:mt-6">
              <Button onClick={() => setOpenModal(true)}>Edit</Button>
            </div>
          </div>
        </Card>

        <Modal
          show={openModal}
          size="md"
          popup
          onClose={() => setOpenModal(false)}
        >
          <Modal.Header />
          <Modal.Body>
            <div className="space-y-6">
              <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                Update your Profile
              </h3>

              <form onSubmit={handleSubmit}>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="name" value="Your name" />
                  </div>
                  <TextInput
                    id="name"
                    value={profileData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="email" value="Your email" />
                  </div>
                  <TextInput
                    id="email"
                    value={profileData.email}
                    onChange={handleInputChange}
                    placeholder="name@company.com"
                    required
                  />
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="phone" value="Your Phone Number" />
                  </div>
                  <TextInput
                    id="phone"
                    value={profileData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="class" value="Your class" />
                  </div>
                  <TextInput
                    id="class"
                    value={profileData.class}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="subject" value="Subject Teach" />
                  </div>
                  <TextInput
                    id="subject"
                    value={profileData.subject}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="dream" value="Your Dream" />
                  </div>
                  <TextInput
                    id="dream"
                    value={profileData.dream}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="address" value="Your Address" />
                  </div>
                  <TextInput
                    id="address"
                    value={profileData.address}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="password" value="Your password" />
                  </div>
                  <TextInput
                    id="password"
                    type="password"
                    placeholder="***********"
                    onChange={(e) =>
                      setProfileData({
                        ...profileData,
                        password: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="w-full mt-6">
                  <Button type="submit">Submit</Button>
                </div>
              </form>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
}
