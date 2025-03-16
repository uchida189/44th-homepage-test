import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import MyCarousel from "@/components/common/my_carousel";

async function getData() {
  const res = await fetch('https://script.google.com/macros/s/AKfycbzpLCnEcBi8_vPZdO6CA9_vxCaBjklEcoceNtEB2hzhzpr589MOk3KNpIiEOjDtboyx5g/exec');
  if (!res.ok) {
    throw new Error("Failed to get data")
  }
  const data = await res.json();
  return data
}

function CustomCarouselItem() {
  return (
    <div className="flex items-center justify-center w-full h-32 bg-gray-200 dark:bg-gray-800 rounded-lg">
      <p>Item</p>
    </div>
  )
}

export default async function Home() {
  const items = [
    <CustomCarouselItem/>,
    <CustomCarouselItem/>,
    <CustomCarouselItem/>,
    <CustomCarouselItem/>,
    <CustomCarouselItem/>,
    // {
    //   title: 'Item 1',
    //   content: 'Description of item 1.',
    //   imageUrl: '/image1.jpg', // 画像のパス
    // },
    // {
    //   title: 'Item 2',
    //   content: 'Description of item 2.',
    //   imageUrl: '/image2.jpg',
    // },
    // {
    //   title: 'Item 3',
    //   content: 'Description of item 3.',
    //   imageUrl: '/image3.jpg',
    // },
    // {
    //   title: 'Item 4',
    //   content: 'Description of item 4.',
    //   imageUrl: '/image4.jpg',
    // },
    // {
    //   title: 'Item 5',
    //   content: 'Description of item 5.',
    //   imageUrl: '/image5.jpg',
    // },
  ];
  const data = await getData();
  console.log(data)
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="https://nextjs.org/icons/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <MyCarousel items={items}/>
        {/* <Carousel className="w-full max-w-[calc(100vw-10rem)] ">
          <CarouselContent>
            <CarouselItem><CustomCarouselItem/></CarouselItem>
            <CarouselItem>...</CarouselItem>
            <CarouselItem>...</CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel> */}
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              app/page.tsx
            </code>
            .
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>
        {/* <div>
          {data.map((item, index:number) => (
            <div key={index}>
              <p>{item['投稿日時']}</p>
            </div>
          ))}
        </div> */}
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="https://nextjs.org/icons/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
