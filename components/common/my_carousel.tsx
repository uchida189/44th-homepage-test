'use client';

import React, { useCallback, useState } from 'react';
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
// import { Card, CardContent } from '@shadcn/ui/card';

interface CustomCarouselProps {
  // items: {
  //   title: string;
  //   content: string;
  //   imageUrl: string;
  // }[];
  items: React.ReactNode[];
}

export default function CustomCarousel({ items }: CustomCarouselProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  const onSlideChange = useCallback(() => {
    if (!api) {
      return;
    }
    setCurrent(api.selectedScrollSnap() + 1);
  }, [api]);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on('select', onSlideChange);
    api.on('settle', onSlideChange);

    return () => {
      api.off('select', onSlideChange);
      api.off('settle', onSlideChange);
    };
  }, [api, onSlideChange]);

  const onPageClick = useCallback(
    (index: number) => {
      if (!api) return;
      api.scrollTo(index);
    },
    [api]
  );

  return (
    // <div className="flex flex-col items-center">
    <div className="relative">
      <Carousel
        setApi={setApi}
        className="w-full max-w-[calc(100vw-10rem)] "
        // className='w-full'
        opts={{
          align: 'start',
        }}
      >
        <CarouselContent>
          {items.map((item, index) => (
            <CarouselItem key={index} className="w-full">
              <div className="w-[calc(100vw-10rem)]">
                {/* <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="object-cover w-ful h-full"
                    />
                    <span className="text-4xl font-semibold">
                      {item.title}
                    </span>
                  </CardContent>
                </Card> */}
                {item}
                {/* <p className="text-center mt-2">{item}</p> */}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      {/* ページネーション */}
      <div className="flex items-center justify-center mt-4 space-x-2">
        {Array.from({ length: count }).map((_, index) => (
          <button
            key={index}
            onClick={() => onPageClick(index)}
            className={`h-3 w-3 rounded-full transition-colors ${
              current - 1 === index ? 'bg-[#A08703]' : 'border border-[#A08703]'
            }`} // primary は Tailwind CSS の設定に合わせた色
          />
        ))}
      </div>

      {/* 現在のページ番号 (オプション) */}
      {/* <div className="text-center mt-2 text-sm">
        Page {current} of {count}
      </div> */}
    </div>
  );
}
// 'use client'
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel"
// import {
//   Pagination,
//   PaginationContent,
//   PaginationEllipsis,
//   PaginationItem,
//   PaginationLink,
// } from "@/components/ui/pagination"

// export default function MyCarousel() {
//   return (
//     <div className="flex flex-col items-center">
//       <Carousel className="w-full max-w-[calc(100vw-10rem)] ">
//         <CarouselContent>
//           <CarouselItem>
//             <CustomCarouselItem title="Item 1" />
//           </CarouselItem>
//           <CarouselItem>
//             <CustomCarouselItem title="Item 2" />
//           </CarouselItem>
//           <CarouselItem>
//             <CustomCarouselItem title="Item 3" />
//           </CarouselItem>
//         </CarouselContent>
//         <CarouselPrevious/>
//         <CarouselNext />
//       </Carousel>
//       <Pagination>
//         <PaginationContent>
//           <PaginationItem>
//             <PaginationLink href="#">1</PaginationLink>
//           </PaginationItem>
//           <PaginationItem>
//             <PaginationEllipsis />
//           </PaginationItem>
//         </PaginationContent>
//       </Pagination>
//     </div>
//   )
// }

// interface CustomCarouselItemProps {
//   title: string
// }

// function CustomCarouselItem(props: CustomCarouselItemProps) {
//   return (
//     <div className="flex items-center justify-center w-ful h-32 bg-gray-200 dark:bg-gray-800 rounded-lg">
//       <p>{props.title}</p>
//     </div>
//   )
// }