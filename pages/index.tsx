import type { NextPage } from "next";
import Head from "next/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Card, CardBody, CardFooter, CardHeader } from "../components/Card";
import { Navbar } from "../components/Navbar";
import styles from "../styles/Home.module.css";
import { Modal } from "../components/Modal";
import { useState } from "react";

const Home: NextPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactMessage, setContactMessage] = useState("");

  const onContactSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("onContactSubmit");
    if (contactName === "" || contactEmail === "" || contactMessage === "") {
      alert("Please fill out all fields");
      return;
    }
    try {
      await fetch("/api/hello", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: contactName,
          email: contactEmail,
          message: contactMessage,
        }),
      });
      setIsOpen(true);
      setContactName("");
      setContactEmail("");
      setContactMessage("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Amal Rajan</title>
        <meta
          name="description"
          content="Hi, I'm Amal a Fontend Engineer specialized in JavaScript, React and TypeScript"
        />
        <meta
          name="og:title"
          content="Amal Rajan"
          key="title"
          property="og:title"
        />
        <meta
          name="og:description"
          content="Hi, I'm Amal a Fontend Engineer specialized in JavaScript, React and TypeScript"
          key="description"
          property="og:description"
        />
        <meta
          name="og:image"
          content="/android-chrome-512x512.png"
          key="image"
          property="og:image"
        />
        <meta
          name="og:url"
          content="https://amalrajan.dev"
          key="url"
          property="og:url"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      <header className="flex justify-end py-2" style={{ minHeight: "6rem" }}>
        <Navbar />
      </header>
      <main className="container max-w-3xl">
        <div className="mt-16 w-fit">
          <h1 className="text-6xl mb-3">Amal Rajan</h1>
          <h2 className="text-3xl text-gray-500">Front End Developer</h2>
        </div>

        <div className="mt-8 flex gap-x-10">
          <a
            href="https://github.com/amalrajan30"
            target={"_blank"}
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/amal-rajan/"
            target={"_blank"}
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>

        <div className="mt-8">
          <p>
            Hi, my name is Amal. I work as a software engineer at Techionsoft. I
            love to try out new things and learn new cool stuff. Currently, I am
            specialized in JavaScript, React, and TypeScript. If I am not in
            front of my laptop, I will be reading a book, playing some music, or
            doing both!
          </p>

          <button
            className="mt-10 border-blue-500 border rounded py-2 px-10
          hover:bg-blue-500 hover:text-white"
          >
            <a href="#contact">Contact Me</a>
          </button>
        </div>

        {/* About section */}
        <section id="about" className="mt-12">
          <h2 className="font-bold text-2xl">About Me</h2>
          <p className="mt-4">
            Hi, my name is Amal. I am 25 years old front-end developer
            who&apos;s always interested in trying out new tech and solving
            interesting problems. I also have an eye for security and try to
            reduce the attack surfaces as low as possible.I graduated from the
            University of Calicut in 2020 with Bachelor&apos;s degree in
            computer science.
            <br /> At work, I build and maintain internal tools for our clients
            and sometimes work with our client&apos;s teams to help them with
            their projects. <br /> Apart from this, I like to tinger with
            Android and learn about its internal working. I also love to make
            some quirky Android apps that meet my specific requirements.
          </p>

          <div className="mt-4 w-full">
            <p>Here are some of the technologies I work with:</p>

            <div className="flex gap-x-16 py-2 px-7">
              <ul className="list-disc">
                <li>JavaScript</li>
                <li>React.js</li>
                <li>TypeScript</li>
              </ul>

              <ul className="list-disc">
                <li>Node.js</li>
                <li>Next.js</li>
                <li>Express</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Experience section */}
        <section id="experience" className="mt-12">
          <h2 className="font-bold text-2xl">Experience</h2>
          <h3 className="mt-3 text-lg">
            <span className="font-bold">Software Engineer</span>
            <span className="text-gray-500"> @ </span>
            <span className="font-bold">Tecionsoft</span>
          </h3>
          <h4 className="text-sm mt-1">October 2019 -- Present</h4>
          <ul className="list-disc py-2 px-7">
            <li className="py-1">
              Create reusable and accessible React components with
              TypeScript/JavaScript
            </li>
            <li className="py-1">
              Build and maintain multiple internal tools that are built with
              React, TypeScript and JavaScript that use third party and internal
              APIs
            </li>
            <li className="py-1">
              Helped the team to migrate from client-side rendering to
              server-side rendering in Next.js and reduce page load time by an
              average of 40%
            </li>
            <li className="py-1">
              Introduced and helped the team to adopt cache management library
              react-query that helped to improve the user experience of the app
            </li>
            <li className="py-1">
              Build browser extensions using React and TypeScript for the
              client&apos;s team, which doubled their workflow speed
            </li>
            <li className="py-1">
              Helped the team to get up to speed in testing React applications
              with Jest and React Testing Library
            </li>
            <li className="py-1">
              Created automation programs using Puppeteer with Node.js for
              various testing scenarios and monitoring
            </li>
            <li className="py-1">
              Build a search service from scratch using Node.js and TypeScript
              that queries Elasticsearch instance
            </li>
            <li className="py-1">
              Communicate with clients and other engineering teams daily
            </li>
            <li className="py-1">
              Deploy and manage client&apos;s cloud servers
            </li>
          </ul>
        </section>

        {/* Projects section */}
        <section id="projects" className="mt-12">
          <h2 className="font-bold text-2xl">Some Things I&apos;ve Built</h2>

          <div className="mt-12 flex flex-wrap justify-center w-full gap-x-5 gap-y-7">
            <Card className="w-full md:w-1/3 p-3">
              <CardHeader>
                <h3 className="text-lg font-semibold">Typing Test</h3>
              </CardHeader>
              <CardBody>
                <p>
                  A typing website which provides real-time feedback on typos,
                  speed and accuracy. Build with React.js and TypeScript.
                </p>
              </CardBody>
              <CardFooter>
                <a
                  aria-label="check out the project"
                  target="_blank"
                  rel="noreferrer"
                  href="https://typing-test-hrz.pages.dev"
                  className="btn border-none hover:cursor-pointer flex items-center max-h-10"
                >
                  <span>
                    <FontAwesomeIcon
                      width={16}
                      icon={faArrowUpRightFromSquare}
                    />
                  </span>
                </a>
                <a
                  aria-label="go to the github repo"
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/amalrajan30/typing-test"
                  className="btn border-none hover:cursor-pointer flex items-center max-h-10"
                >
                  <span>
                    <FontAwesomeIcon width={16} icon={faGithub} />
                  </span>
                </a>
              </CardFooter>
            </Card>

            <Card className="w-full md:w-1/3 p-3">
              <CardHeader>
                <h3 className="text-lg font-semibold">Sleep Tracker</h3>
              </CardHeader>
              <CardBody>
                <p>
                  A web app that lets users track and analyze their sleep. Build
                  with Remix, TypeScript, TailwindCSS and Prisma.
                </p>
              </CardBody>
              <CardFooter>
                {/* <a className="btn hover:cursor-pointer">Check it out</a> */}
                <a
                  aria-label="go to the github repo"
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/amalrajan30/sleep-tracker"
                  className="btn border-none hover:cursor-pointer max-h-10"
                >
                  <span>
                    <FontAwesomeIcon width={16} icon={faGithub} />
                  </span>
                </a>
              </CardFooter>
            </Card>

            <Card className="w-full md:w-1/3 p-3">
              <CardHeader>
                <h3 className="text-lg font-semibold">Kindle Highlights</h3>
              </CardHeader>
              <CardBody>
                <p>
                  A Node.js script scraps all the kindle highlights from a given
                  account and shows a randomly saved highlight in the terminal.
                </p>
              </CardBody>
              <CardFooter>
                <a
                  aria-label="check out the project"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.npmjs.com/package/kindle-highlight"
                  className="btn border-none hover:cursor-pointer max-h-10"
                >
                  <span>
                    <FontAwesomeIcon
                      width={16}
                      icon={faArrowUpRightFromSquare}
                    />
                  </span>
                </a>
                <a
                  aria-label="go to the github repo"
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/amalrajan30/kindle-highlight"
                  className="btn border-none hover:cursor-pointer"
                >
                  <span>
                    <FontAwesomeIcon width={16} icon={faGithub} />
                  </span>
                </a>
              </CardFooter>
            </Card>
          </div>
        </section>

        {/* Contact section */}
        <section id="contact" className="mt-12">
          <h2 className="font-bold text-2xl">Contact</h2>
          <div className="mt-4">
            <p>
              Fell free to get in touch with me if you have any questions or
              want to work together.
            </p>

            <Card className="mt-4 hover:scale-100">
              <CardBody>
                <form onSubmit={onContactSubmit}>
                  <div className="flex flex-wrap gap-x-4 gap-y-4">
                    <div className="w-full">
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium leading-5 text-gray-700"
                      >
                        Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        className="form-input mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out"
                        placeholder="Enter your name"
                        value={contactName}
                        onChange={(e) => setContactName(e.target.value)}
                      />
                    </div>
                    <div className="w-full">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium leading-5 text-gray-700"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        className="form-input mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out"
                        placeholder="Enter your email"
                        value={contactEmail}
                        onChange={(e) => setContactEmail(e.target.value)}
                      />
                    </div>
                    <div className="w-full">
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium leading-5 text-gray-700"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        required
                        className="form-textarea mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out"
                        placeholder="Enter your message"
                        value={contactMessage}
                        onChange={(e) => setContactMessage(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="mt-4 w-1/6 pb-4 flex items-center justify-end">
                    <button
                      type="submit"
                      className="btn hover:cursor-pointer w-full"
                    >
                      Send
                    </button>
                  </div>
                </form>
              </CardBody>
            </Card>
          </div>
        </section>

        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} />
      </main>

      <footer className="mt-20 p-6">
        <div className="flex justify-center">
          <p className="text-sm text-gray-500">
            <span>
              Made with{" "}
              <a href="https://nextjs.org/" target="_blank" rel="noreferrer">
                Next.js
              </a>
              ,{" "}
              <a
                href="https://tailwindcss.com/"
                target="_blank"
                rel="noreferrer"
              >
                Tailwind CSS
              </a>{" "}
              and <span className="text-red-500">???</span> by{" "}
              <a href="https://amalrajan.dev">Amal</a>
            </span>
            <span className="text-gray-500"> | </span>
            <span>
              <a href="https://github.com/amalrajan30/portfolio/blob/main/pages/index.tsx">
                Edit this page on GitHub
              </a>
            </span>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
