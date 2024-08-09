import React from "react";
import { FaHandPointRight } from "react-icons/fa";

export default function About() {
  return (
    <>
      <div className="py-28 px-12 lg:px-44">
        <div className="pt-12 mb-8 flex justify-center">
          <div className="flex items-center">
            <h2 className="font-bold text-3xl font-serif mr-8">
              Organizer: <br />
              <span className="font-semibold text-xl text-cyan-500">
                Om Prakash Singh
              </span>
            </h2>
            <img
              src="/images/people/profile-picture-5.jpg"
              alt="Organizer"
              className="rounded-full w-24 h-24"
            />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-cyan-600 text-4xl font-semibold text-center pb-8">
            Lakshay Science Institute
          </h2>
          <p className="tracking-wide leading-relaxed text-wrap flex text-justify items-center">
            <FaHandPointRight className="icon-size mr-4 text-cyan-500 text-4xl" />
            Lakshay Science Institute primarily focuses on{" "}
            <span className="text-cyan-600">student&apos;s dreams</span>,
            helping them achieve their aspirations. Our teachers employ modern
            methodologies and technologies that facilitate student&apos;s
            interaction with the real world, guiding them towards their future
            goals.
          </p>
          <p className="tracking-wide leading-relaxed text-wrap flex text-justify items-center">
            <FaHandPointRight className="icon-size mr-4 text-cyan-500 text-3xl" />
            Our teachers collaborate with guardians to support students who need
            extra help. For students who struggle academically, we provide
            additional classes and dedicated time to ensure they catch up and
            excel.
          </p>
          <p className="tracking-wide leading-relaxed text-wrap flex text-justify items-center">
            <FaHandPointRight className="icon-size mr-4 text-cyan-500 text-3xl" />
            We prepare students for{" "}
            <span className="text-cyan-600">competitive exams</span> at the{" "}
            <span className="text-cyan-600">Olympiad level</span>, ensuring they
            can tackle any challenge confidently. Our teaching spans from basic
            levels such as <span className="text-cyan-600">Nursery</span> to{" "}
            <span className="text-cyan-600">Intermediate</span>.
          </p>
          <p className="tracking-wide leading-relaxed text-wrap flex text-justify items-center">
            <FaHandPointRight className="icon-size mr-4 text-cyan-500 text-2xl" />
            We motivate students to achieve their{" "}
            <span className="text-cyan-600">goals</span> and{" "}
            <span className="text-cyan-600">reward</span> their achievements and
            performance with <span className="text-cyan-600">prizes</span>.
          </p>
        </div>

        <div className="flex flex-col gap-4 pt-12">
          <p className="tracking-wide leading-relaxed text-wrap flex text-justify items-center">
            <FaHandPointRight className="icon-size mr-4 text-cyan-500 text-5xl" />
            At <span className="text-cyan-600">Lakshay Science Institute</span>,
            we believe in holistic development, ensuring that our students not
            only excel academically but also develop critical thinking and
            problem-solving skills. We organize various workshops and seminars
            where experts from different fields share their knowledge and
            experiences, enriching our student&apos;s learning journey.
          </p>
          <p className="tracking-wide leading-relaxed text-wrap flex text-justify items-center">
            <FaHandPointRight className="icon-size mr-4 text-cyan-500 text-5xl" />
            Our state-of-the-art facilities provide an ideal learning
            environment, equipped with modern laboratories, libraries, and
            digital classrooms. We emphasize hands-on learning, encouraging
            students to engage in practical experiments and projects that
            enhance their understanding of scientific concepts.
          </p>
          <p className="tracking-wide leading-relaxed text-wrap flex text-justify items-center">
            <FaHandPointRight className="icon-size mr-4 text-cyan-500 text-5xl" />
            We also offer counseling and career guidance services to help
            students make informed decisions about their future. Our dedicated
            counselors work closely with students to identify their{" "}
            <span className="text-cyan-600">strengths</span> and{" "}
            <span className="text-cyan-600">interests</span>, guiding them
            towards suitable career paths and higher education opportunities.
          </p>
          <p className="tracking-wide leading-relaxed text-wrap flex text-justify items-center">
            <FaHandPointRight className="icon-size mr-4 text-cyan-500 text-2xl" />
            Join Lakshay Science Institute and be a part of a community that
            values excellence, innovation, and personal growth. Together, we can
            turn your dreams into reality.
          </p>
        </div>

        <div className="pt-12 flex flex-col gap-4">
          <h2 className="text-cyan-600 text-3xl font-semibold text-center pb-8">
            Why Choose Us?
          </h2>
          <p className="tracking-wide leading-relaxed text-wrap flex text-justify items-center">
            <FaHandPointRight className="icon-size mr-4 text-cyan-500 text-4xl" />
            Our institute stands out due to our dedicated and experienced
            faculty who are passionate about teaching and committed to the{" "}
            <span className="text-cyan-600">success of every student</span>.
            They continually update their knowledge and teaching methods to
            provide the best education possible.
          </p>
          <p className="tracking-wide leading-relaxed text-wrap flex text-justify items-center">
            <FaHandPointRight className="icon-size mr-4 text-cyan-500 text-5xl" />
            We believe in a personalized approach to education, understanding
            that each student is unique. Our small class sizes allow for
            individualized attention, ensuring that no student is left behind.
            We also foster a supportive and inclusive environment where students
            feel valued and encouraged to{" "}
            <span className="text-cyan-600">express themselves</span>.
          </p>
          <p className="tracking-wide leading-relaxed text-wrap flex text-justify items-center">
            <FaHandPointRight className="icon-size mr-4 text-cyan-500 text-4xl" />
            Extracurricular activities are an integral part of our curriculum.
            We offer a wide range of clubs and societies, from science and math
            clubs to arts and sports teams. These activities help students
            develop a well-rounded personality and enhance their{" "}
            <span className="text-cyan-600">social skills</span>.
          </p>
          <p className="tracking-wide leading-relaxed text-wrap flex text-justify items-center">
            <FaHandPointRight className="icon-size mr-4 text-cyan-500 text-5xl" />
            Our alumni network is strong and active, providing current students
            with mentorship opportunities and insights into various career
            paths. Many of our alumni have gone on to achieve great success in
            their respective fields, and they often return to share their
            experiences and guide our students.
          </p>
          <p className="tracking-wide leading-relaxed text-wrap flex text-justify items-center">
            <FaHandPointRight className="icon-size mr-4 text-cyan-500 text-5xl" />
            Community service is another important aspect of our educational
            philosophy. We encourage our students to give back to the community
            through various initiatives and volunteer programs. This not only
            helps them develop a sense of responsibility and empathy but also
            enhances their leadership skills.
          </p>
        </div>

        <div className="pt-12 flex flex-col gap-4">
          <h2 className="text-cyan-600 text-3xl font-semibold text-center pb-8">
            Our Vision and Mission
          </h2>
          <p className="tracking-wide leading-relaxed text-wrap flex text-justify items-center">
            <FaHandPointRight className="icon-size mr-4 text-cyan-500 text-4xl" />
            Our vision is to create a nurturing environment that fosters
            intellectual growth and holistic development. We strive to be a
            leading institution that prepares students to be critical thinkers,
            innovative problem-solvers, and responsible global citizens.
          </p>
          <p className="tracking-wide leading-relaxed text-wrap flex text-justify items-center">
            <FaHandPointRight className="icon-size mr-4 text-cyan-500 text-4xl" />
            Our mission is to provide high-quality education that meets the
            evolving needs of society. We are committed to continuous
            improvement, leveraging the latest{" "}
            <span className="text-cyan-600">educational technologies</span> and
            methodologies to enhance the learning experience.
          </p>
          <p className="tracking-wide leading-relaxed text-wrap flex text-justify items-center">
            <FaHandPointRight className="icon-size mr-4 text-cyan-500 text-4xl" />
            We aim to cultivate a passion for lifelong learning in our students,
            encouraging them to pursue their interests and develop new skills
            throughout their lives. By doing so, we hope to empower them to make{" "}
            <span className="text-cyan-600">meaningful contributions</span> to
            the world and lead fulfilling lives.
          </p>
        </div>
      </div>
    </>
  );
}
