<script lang="ts">
  import { ChevronsDown } from "lucide-svelte";
  import { Separator } from "$lib/components/ui/separator";
</script>

<footer id="footer" class="container py-24 pb-16 sm:py-32 sm:pb-24">
  <div class="p-10 bg-muted/50 dark:bg-card border rounded-2xl">
    <div class="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
      <div class="col-span-full xl:col-span-2">

        <a href="/" class="flex font-bold items-center">
          <!-- <ChevronsDown class="bg-gradient-to-tr from-primary via-primary/70 to-primary rounded-lg w-9 h-9 mr-2 border text-white" /> -->
          <img src="/econ.svg">
          <h3 class="text-2xl">Supereconomics</h3>
        </a>
      </div>

      <div class="flex flex-col gap-2">
        <h3 class="font-bold text-lg">Info</h3>
        <div><a href="https://superphysics.org/social/economics" class="opacity-60 hover:opacity-100">Documentation</a></div>
      </div>

      <div class="flex flex-col gap-2">
        <h3 class="font-bold text-lg">System</h3>
        <div><a href="https://pantrypoints.com" class="opacity-60 hover:opacity-100">System</a></div>
      </div>

<!--       <div class="flex flex-col gap-2">
        <h3 class="font-bold text-lg">Help</h3>
        <div><a href="#contact" class="opacity-60 hover:opacity-100">Contact Us</a></div>
        <div><a href="#faq" class="opacity-60 hover:opacity-100">FAQ</a></div>
        <div><a href="#contact" class="opacity-60 hover:opacity-100">Feedback</a></div>
      </div> -->

      <div class="flex flex-col gap-2">
        <h3 class="font-bold text-lg">Socials</h3>
        <div><a href="https://www.facebook.com/supereconomics/" class="opacity-60 hover:opacity-100">Facebook</a></div>
      </div>
    </div>

    <Separator class="my-6" />
    
    <section>
      <h3>
        Built by 
        <a
          target="_blank"
          href="https://pantrypoints.com/about"
          class="text-primary transition-all border-primary hover:border-b-2"
          rel="noreferrer"
        >
          Pantrypoints Technologies
        </a>
      </h3>
    </section>
  </div>
</footer>
