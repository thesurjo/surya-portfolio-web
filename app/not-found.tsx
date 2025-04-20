import { Footer, Header } from "@/global/page"
import Link from "next/link"

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between md:mt-0">
      <Header />
      <section className="h-screen w-full flex flex-col justify-center items-center">
        <div className="flex flex-row items-center">
          <span className="text-6xl font-jetbrains">&lt;  </span>
          <h1 className="text-9xl font-extrabold text-white tracking-widest">404!</h1>
          <span className="text-6xl font-jetbrains"> /&gt;</span>
        </div>
        <Link href="/" className="text-black text-2xl font-bold">
        <button className="mt-5">
          <div
            className="relative inline-block text-sm font-medium text-[#e30052] group active:text-orange-500 focus:outline-none focus:ring"
          >
            <span
              className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#FF6A3D] group-hover:translate-y-0 group-hover:translate-x-0"
            ></span>

            <span className="relative block px-8 py-3 bg-[#fafbfd] border ">
              <div className="text-black text-2xl font-bold">Back </div>
            </span>
          </div>
        </button>
        </Link>
      </section>
      <Footer />
    </main>
  )
}