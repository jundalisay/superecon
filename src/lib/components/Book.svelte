<script lang="ts">
  import { Button } from "$lib/components/ui/button";
  import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle
  } from "$lib/components/ui/card";
  import { Badge } from "$lib/components/ui/badge";

  const ProService = {
    YES: 1,
    NO: 0,
  } as const;

  type ProServiceType = typeof ProService[keyof typeof ProService];

  interface ServiceProps {
    title: string;
    pro: ProServiceType;
    description: string;
  }

</script>

<section id="book" class="container py-24 sm:py-32">
<!--   <h2 class="text-lg text-primary text-center mb-2 tracking-wider">
    Check out the Book
  </h2>

  <h2 class="text-3xl md:text-4xl text-center font-bold mb-4">
    
  </h2> -->
<!--   <h3 class="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
    We complete your health
  </h3> -->

  <div class="grid sm:grid-cols-2 lg:grid-cols-2 gap-4 w-full lg:w-[60%] mx-auto">
    <div class="m-auto">


      <h2 class="text-lg text-primary mb-2 tracking-wider">Check out our book</h2>
      <h2 class="text-3xl md:text-4xl font-bold mb-4">
        Supereconomics in a Nutshell
      </h2>
      <p class="text-xl text-muted-foreground mb-8">
        Our book explains Supereconomics in a few chapters
      </p>
        <a href="https://play.google.com/store/books/details?id=6bhGEQAAQBAJ&pli=1">
            <Button class="w-full">
              Check it out
            </Button>          
        </a>

    </div>


    <div>
      <img src="/sebook.jpg" class="rounded-2xl p-4" alt="Supereconomics book">
      <a href="">
        
      </a>

    </div>

  </div>
</section>
