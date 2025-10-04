<script lang="ts">
  import {
    Crown,
    Vegan,
    Ghost,
    Puzzle,
    Squirrel,
    Cookie,
    Drama
  } from "lucide-svelte";

  interface SponsorsProps {
    icon: 'crown' | 'vegan' | 'cookie';
     // | 'puzzle' | 'squirrel' | 'cookie' | 'drama';
    name: string;
  }

  const sponsors: SponsorsProps[] = [
    { icon: "crown", name: "Vegetarian Bread" },
    { icon: "vegan", name: "Soya Inc" },
    { icon: "cookie", name: "Agri Inc" },

  ];

  const iconMap = {
    crown: Crown,
    vegan: Vegan,
    cookie: Cookie
    // puzzle: Puzzle,
    // squirrel: Squirrel,
    // cookie: Cookie,
    // drama: Drama,
  };
</script>

<section id="sponsors" class="max-w-[75%] mx-auto pb-24 sm:pb-32">
  <h2 class="text-lg md:text-xl text-center mb-6">Our Platinum Sponsors</h2>

  <div class="mx-auto overflow-hidden">
    <div class="flex animate-marquee gap-12">
      {#each sponsors as { icon, name }}
        <div class="flex items-center text-xl md:text-2xl font-medium whitespace-nowrap">
          <svelte:component this={iconMap[icon]} class="mr-2" strokeWidth={3} />
          {name}
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  @keyframes marquee {
    from { transform: translateX(0); }
    to { transform: translateX(-50%); }
  }

  .animate-marquee {
    animation: marquee 25s linear infinite;
  }

  .animate-marquee:hover {
    animation-play-state: paused;
  }
</style>
