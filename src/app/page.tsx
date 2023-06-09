import { Inter } from "next/font/google";
import Link from "next/link";
import { TbBrandNextjs, TbBrandTailwind } from "react-icons/tb";
import {VscGithubInverted} from "react-icons/vsc"

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-20">
      <div className="grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
        <Link
          href="/examples/QuotesGen"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_self"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Random Quote Machine{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 text-sm opacity-50`}>
            An inspiring quote generator.
          </p>
        </Link>

        <Link
          href="/examples/MarkdownPreviewer"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_self"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Markdown Previewer{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 text-sm opacity-50`}>A markdown previewer.</p>
        </Link>

        <Link
          href="/examples/DrumMachine"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_self"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Drum Machine{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 text-sm opacity-50`}>A Drum Machine.</p>
        </Link>

        <Link
          href="/examples/JavaScriptCalculator"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_self"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            JavaScript Calculator{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 text-sm opacity-50`}>A JavaScript Calculator.</p>
        </Link>

        <Link
          href="/examples/Pomodoroclock"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_self"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            25 + 5 Clock{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 text-sm opacity-50`}>
            Basically a fancy Pomodoro Clock.
          </p>
        </Link>
      </div>
      <div className="absolute w-screen flex items-center justify-center gap-2 bottom-1 h-8">
        <div className="m-0 text-sm opacity-80">made with </div>
        <Link href="https://nextjs.org/">
          <TbBrandNextjs className="opacity-50" />
        </Link>
        <Link href="https://tailwindcss.com/">
          <TbBrandTailwind className=" opacity-50" />
        </Link>

        <div className="m-0 text-sm opacity-80">code available on</div>
        <Link href="https://github.com/franzbruno95/freeCodeCamp-Exames-frontEnd">
          <VscGithubInverted className="opacity-50" />
        </Link>
      </div>
    </main>
  );
}
