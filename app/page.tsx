import Image from "next/image";
import Link from "next/link";

import Counter from "../components/Counter";

export default function Home() {
  return (
    <section className="py-20">
      <div className="container h-full">
        <div className="fle flex-col items-center justify-center">
          <h1 className="mb-8 text-center text-3xl font-bold text-blue-500">
            Hello world!
          </h1>
          <Counter />
          <div className="flex items-center justify-between">
            <Image
              src="/images/promo.jpeg"
              alt="Logo"
              width={400}
              height={400}
              priority
              className="h-auto w-[400px]"
            />
            <div className="h-[440px] w-[400px] bg-[url('/images/promo.jpeg')] bg-cover bg-center bg-no-repeat"></div>
          </div>
        </div>
        <Link
          href="/admin-shop"
          className="mt-8 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
        >
          to Admin Shop Page
        </Link>
      </div>
    </section>
  );
}
