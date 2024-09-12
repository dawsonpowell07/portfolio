import { Metadata } from "next";
import Image from "next/image";
import { H1 } from "@/components/ui/H1";
import me from "@/assets/me.png";
import { H2 } from "@/components/ui/H2";
import { Bot } from "lucide-react";

export const metadata: Metadata = {
  title: "Dawson Powell - My Portfolio",
};
export default function Home() {
  return (
    <section className="space-y-16 bg-[url('/background.png')] bg-cover bg-center bg-no-repeat px-1 py-8">
      <section className="grid grid-cols-1 items-center gap-8 sm:grid-cols-2">
        <div className="space-y-3">
          <H1 className="text-center sm:text-start">Hi, I&apos;m Dawson 👋</H1>{" "}
          <p className="text-center sm:text-start">
            I&apos;m a computer science student who is passionate about making a
            positive impact through technology!
          </p>
        </div>
        <div className="flex justify-center">
          <Image
            src={me}
            alt="photo of me"
            height={300}
            width={300}
            className="aspect-square rounded-full border-2 object-cover shadow-md dark:border-foreground"
          />
        </div>
      </section>
      <section className="space-y-3 text-center">
        <H2>Feel Free To Exlore My Website</H2>
        <p>
          Look around and learn more about my experiences, education, hobbies, and more!
        </p>
      </section>
    </section>
  );
}
