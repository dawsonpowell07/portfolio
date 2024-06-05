import { H1 } from "@/components/ui/H1";
import { H2 } from "@/components/ui/H2";
import { H3 } from "@/components/ui/H3";
import { Metadata } from "next";
import Image from "next/image";
import capitalOne from "@/assets/logos/c1.jpeg";
import codepath from "@/assets/logos/codepath.jpeg";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projects and Experience",
  description: "My projects and experience.",
};

export default function Page() {
  return (
    <section className="space-y-6">
      <H1>Experience</H1>
      <section className="space-y-3">
        <hr className="border-muted" />
      </section>
      <section className="space-y-3">
        <div className="flex items-center space-x-3">
          <H2>Capital One Software Engineer Intern</H2>
          <Image
            src={capitalOne}
            alt="Capital One Logo"
            height={100}
            width={100}
            className="rounded-full border-2 object-cover shadow-md dark:border-foreground"
          />
        </div>
        <ul className="list-inside list-disc space-y-1">
          <li>
            I am currently a member of{" "}
            <span className="font-bold">
              Capital One&apos;s Technology Early Internship Program
            </span>
            , which is specifically for freshman and sophomore students. During
            the 10-week program, the first five weeks are spent learning best
            practices and various technologies used at Capital One, such as Go,
            Swift, React, AWS, and databases. I also get hands-on experience
            with Git, APIs, and full-stack development.
          </li>
          <li>
            My remaining five weeks will be spent working with multiple other
            interns. I cannot speak much about this right now, but we will
            utilize <span className="font-bold">Python and AWS</span> to build
            something that will be rolled out to the entire company!
          </li>
        </ul>
        <hr className="border-muted" />
      </section>

      <section className="space-y-3">
        <div className="flex items-center space-x-3">
          <H2>Codepath Technical Interview Prep Member</H2>
          <Image
            src={codepath}
            alt="Codepath Logo"
            height={100}
            width={100}
            className="rounded-full border-2 object-cover shadow-md dark:border-foreground"
          />
        </div>
        <ul className="list-inside list-disc space-y-1">
          <p className="py-1">
            The CodePath Technical Interview Prep Course is a comprehensive
            program designed to equip students and professionals with the skills
            needed to excel in technical interviews for software engineering
            roles. The course focuses on fundamental computer science concepts
            and problem-solving techniques that are commonly tested in coding
            interviews.
          </p>
          <H3 className="underline">Key Features</H3>
          <li>
            <span className="font-bold">Structured Curriculum:</span> The course
            offers a well-organized curriculum that covers essential topics such
            as data structures, algorithms, and system design.
          </li>
          <li>
            <span className="font-bold">Hands-On Practice:</span> Participants
            engage in extensive hands-on coding practice with a variety of
            problems, ranging from easy to advanced difficulty levels.
          </li>
          <li>
            <span className="font-bold">Mock Interviews:</span> The program
            includes mock interviews conducted by industry professionals. These
            sessions simulate real interview conditions, providing valuable
            feedback and helping participants build confidence.
          </li>
        </ul>
        <hr className="border-muted" />
      </section>
      <H1>My Projects</H1>
      <section className="space-y-3">
        <hr className="border-muted" />
      </section>
      <section className="space-y-3">
        <H2>Collective Groove</H2>
        <ul className="list-inside list-disc space-y-1">
          <section className="space-y-3">
            <p>
              <strong>Technologies Used:</strong> Python, Flask, Spotify API
            </p>
            <div className="display: flex; align-items: center;">
              <a
                href="https://drive.google.com/file/d/1sSnvuQxrMQYXYAmk_7pkwZOpcgdD2-Bu/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 text-primary hover:underline"
              >
                Project Demo
              </a>
            </div>
            <p>
              The CollectiveGroove project focused on creating a Spotify
              playlist with songs given by users through TikTok comments. By
              leveraging Python and Flask, the project implemented a dynamic
              playlist enrichment process that successfully adds songs to a
              specified playlist. The user experience was enhanced with OAuth2
              authentication, ensuring secure and uninterrupted access to
              Spotify&apos;s API resources. Additionally, a robust error
              handling system was developed to minimize disruptions, achieving a
              99% success rate for adding songs, even in cases of search query
              mismatches or API limitations.
            </p>
          </section>
        </ul>
        <hr className="border-muted" />
      </section>
      <section className="space-y-3">
        <H2>DistractionDefender</H2>
        <p>
          <strong>Technologies Used:</strong> React, HTML, JavaScript, CSS
        </p>
        <p>
          The DistractionDefender project involved developing and deploying a
          powerful Chrome extension designed to boost productivity during study
          sessions by blocking popular social media sites. Lightweight and
          efficient, DistractionDefender is optimized for performance and
          consumes minimal system resources, ensuring it won&apos;t slow
          browsing or interfere with other extensions. The extension
          successfully reduced time spent on social media platforms by users by
          an average of 30%, contributing to enhanced focus and productivity
          during study sessions.
        </p>
      </section>
    </section>
  );
}
