import { H1 } from "@/components/ui/H1";
import { H2 } from "@/components/ui/H2";
import { Metadata } from "next";
import Image from "next/image";
import bball from "@/assets/bball.png";

export const metadata: Metadata = {
  title: "About me",
  description: "Information about me.",
};

export default function Page() {
  return (
    <section className="space-y-6">
      <H1>About Me</H1>
      <section className="space-y-3">
        <hr className="border-muted" />
      </section>

      <section className="space-y-3">
        <div className="flex items-center space-x-3">
          <H2>Who am I?</H2>
        </div>
        <p>
          My name is Dawson Powell I am currently a college student who is
          passionate about technology! I have been developing my skills since high school and have had lots of fun learning all kinds
          of stuff.
        </p>
        <hr className="border-muted" />
      </section>

      <section className="space-y-3">
        <div className="flex items-center space-x-3">
          <H2>Education</H2>
        </div>
        <p>
          I attend Clemson University and on pace to graduate in 2026 with a
          bachelor of science in computer science. I currently have a 4.0 GPA
          and have taken/taking classes such as algorithms and data structures,
          intro to software development, and more!
        </p>
        <ul className="list-inside list-disc space-y-1"></ul>
        <hr className="border-muted" />
      </section>

      <section className="space-y-3">
        <div className="flex items-center space-x-3">
          <H2>Goals</H2>
        </div>
        <p>
          I hope to one day find a job where I can utilize technology to
          positively impact the world. One remarkable thing about technology is
          that you can impact millions of people&apos;s lives just through code,
          and I hope to one day do that.
        </p>
        <ul className="list-inside list-disc space-y-1"></ul>
        <hr className="border-muted" />
      </section>

      <section className="space-y-3">
        <div className="flex items-center space-x-3">
          <H2>Hobbies</H2>
        </div>
        <p>
          Besides programming and classes, I love playing and watching
          basketball, which has always been my favorite sport. I also enjoy
          reading and watching movies. My favorite books of all time are either
          the Dune or Scythe series, and my favorite film of all time is Star
          Wars: Revenge of the Sith.
        </p>
        <ul className="list-inside list-disc space-y-1"></ul>
        <Image
          src={bball}
          alt="picture of me with friends"
          height={300}
          width={300}
          className="mt-3 w-full  rounded border-2 object-cover shadow-md dark:border-foreground"
        />
        <hr className="border-muted" />
      </section>
    </section>
  );
}
