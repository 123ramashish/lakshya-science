import { Button, Label, Textarea, TextInput } from "flowbite-react";

export function Contact() {
  return (
    <>
      <div className="pt-36">
        <div className="max-w-md shadow-xl p-8 m-auto rounded-lg">
          <form action="#">
            <div className="mb-6 mt-3">
              <Label htmlFor="name" className="mb-2 block">
                Your Name
              </Label>
              <TextInput id="name" name="name" type="text" />
            </div>
            <div className="mb-6 mt-3">
              <Label htmlFor="email" className="mb-2 block">
                Your email
              </Label>
              <TextInput
                id="email"
                name="email"
                placeholder="name@company.com"
                type="email"
              />
            </div>
            <div className="mb-6">
              <Label htmlFor="subject" className="mb-2 block">
                Subject
              </Label>
              <TextInput
                id="subject"
                name="subject"
                placeholder="Let us know how we can help you"
              />
            </div>
            <div className="mb-6">
              <Label htmlFor="message" className="mb-2 block">
                Your message
              </Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Your message..."
                rows={4}
              />
            </div>
            <div className="mb-6">
              <Button type="submit" className="w-full">
                Send message
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
