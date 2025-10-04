<script lang="ts">
  import { Avatar, AvatarFallback, AvatarImage } from "$lib/components/ui/avatar";
  import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "$lib/components/ui/card";
  import * as Carousel from "$lib/components/ui/carousel";
  import { Star } from "lucide-svelte";
  import type { CarouselAPI } from "$lib/components/ui/carousel/context";
  import Autoplay from "embla-carousel-autoplay";

  interface ReviewProps {
    image: string;
    name: string;
    userName: string;
    comment: string;
    rating: number;
  }

  const reviewList: ReviewProps[] = [
    {
      image: "https://www.pantrypoints.com/avatars/dhanjoo.jpg",
      name: "Dhanjoo Ghista",
      userName: "University 2020 Foundation President.",
      comment:
        "I very much like this work: A Research Proposal For The Formalization Of The Science Of Supereconomics And The Establishment Of A Points-Based Economic System",
      rating: 5.0,
    },
    {
      image: "https://www.pantrypoints.com/avatars/gavin.jpg",
      name: "Gavin Kennedy", 
      userName: "A world expert on Adam Smith",
      comment:
        "I believe it is developing into a worthwhile project",
      rating: 4.0,
    },
    {
      image: "/mordeno.jpg",
      name: "Jose Mordeno", 
      userName: "Chairman of a small NGO",
      comment:
        "It has helped our NGO very much during the pandemic!",
      rating: 5.0,
    },    
  ];

  let api = $state<CarouselAPI>();
  const plugin = Autoplay({ delay: 4000, stopOnInteraction: true });
</script>

<section id="testimonials" class="container py-24 sm:py-32">
  <div class="text-center mb-8">
    <h2 class="text-lg text-primary text-center mb-2 tracking-wider">
      Testimonials
    </h2>

    <h2 class="text-3xl md:text-4xl text-center font-bold mb-4">
      People Say
    </h2>
  </div>

  <Carousel.Root
    opts={{
      align: "start",
      loop: true,
    }}
    plugins={[plugin]}
    class="relative w-[80%] sm:w-[90%] lg:max-w-screen-xl mx-auto"
    setApi={(emblaApi) => (api = emblaApi)}
    onmouseenter={plugin.stop}
    onmouseleave={plugin.reset}
  >
    <Carousel.Content class="-ml-4">
      {#each reviewList as review (review.name)}
        <Carousel.Item class="pl-4 md:basis-1/2 lg:basis-1/3">
          <Card class="bg-muted/50 dark:bg-card h-full">
            <CardContent class="p-6 h-full flex flex-col">
              <div class="flex-1">
                <div class="flex gap-1 mb-6">
                  {#each Array(5) as _}
                    <Star class="size-4 fill-primary text-primary" />
                  {/each}
                </div>

                <p class="mb-6">"{review.comment}"</p>
              </div>

              <div class="flex items-center gap-4 pt-6 border-t">
                <Avatar>
                  <AvatarImage
                    src={review.image}
                    alt={`Avatar of ${review.name}`}
                  />
                  <AvatarFallback>
                    {review.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>

                <div class="flex flex-col">
                  <CardTitle class="text-lg">{review.name}</CardTitle>
                  <CardDescription>{review.userName}</CardDescription>
                </div>
              </div>
            </CardContent>
          </Card>
        </Carousel.Item>
      {/each}
    </Carousel.Content>
    <Carousel.Previous />
    <Carousel.Next />
  </Carousel.Root>
</section>
