<script lang="ts">
  import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardFooter,
  } from "$lib/components/ui/card";

  import LinkedInIcon from "$lib/icons/LinkedInIcon.svelte";
  import GithubIcon from "$lib/icons/GithubIcon.svelte";
  import XIcon from "$lib/icons/XIcon.svelte";

  interface TeamProps {
    imageUrl: string;
    firstName: string;
    lastName: string;
    positions: string[];
    socialNetworks: SocialNetworkProps[];
  }

  interface SocialNetworkProps {
    name: 'LinkedIn' | 'Github' | 'X';
    url: string;
  }

  const teamList: TeamProps[] = [
    {
    imageUrl: "/Juan.jpg",
    firstName: "Juan",
    lastName: "",
    positions: ["Research", "Full Stack Developer"],
    socialNetworks: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/jundalisay/",
      }
    ],
  },
  {
    imageUrl:
      "/Lam.jpg",
    firstName: "Lam",
    lastName: "",
    positions: ["Content", "Marketing"],
    socialNetworks: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/baolamnguyen/",
      }
    ],
  },
  {
    imageUrl:
      "/jose.jpg",
    firstName: "Jose",
    lastName: "",
    positions: ["Agriculture Consultant"],
    // socialNetworks: [
    //   {
    //     name: "LinkedIn",
    //     url: "https://www.linkedin.com/in/leopoldo-miranda/",
    //   }
    // ],
  },
  {
    imageUrl:
      "/Syed.jpg",
    firstName: "Syed",
    lastName: "",
    positions: ["Volunteer"],
    // socialNetworks: [
    //   {
    //     name: "LinkedIn",
    //     url: "https://www.linkedin.com/in/leopoldo-miranda/",
    //   }
    // ],
  }
  ];

  const socialIconMap = {
    LinkedIn: LinkedInIcon,
    Github: GithubIcon,
    X: XIcon,
  };
</script>

<section id="team" class="container max-w-7xl mx-auto px-4 py-16 sm:py-24 lg:py-32">
  <div class="text-center mb-12">
    <h2 class="text-lg text-primary text-center mb-3 tracking-wider">Team</h2>

    <h2 class="text-3xl md:text-4xl text-center font-bold">
      Yoga Hoa Sen Team
    </h2>
  </div>

  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 justify-center items-start">
    {#each teamList as { imageUrl, firstName, lastName, positions, socialNetworks }}
      <Card class="bg-muted/60 dark:bg-card flex flex-col h-full overflow-hidden group/hoverimg">
        <CardHeader class="p-0 gap-0">
          <div class="h-full overflow-hidden">
            <img
              src={imageUrl}
              alt={`${firstName} ${lastName}`}
              class="w-full aspect-square object-cover saturate-0 transition-all duration-300 ease-in-out group-hover/hoverimg:saturate-100 group-hover/hoverimg:scale-105"
            />
          </div>
          <CardTitle class="p-4 sm:p-6">
            {firstName}
            <span class="text-primary">{lastName}</span>
          </CardTitle>
        </CardHeader>

        <div class="px-4 sm:px-6 flex-grow">
          {#each positions as position, index}
            <CardContent class="p-0 pb-2 text-muted-foreground">
              {position}{#if index < positions.length - 1},{/if}
            </CardContent>
          {/each}
        </div>

        <CardFooter class="space-x-4 px-4 sm:px-6 py-4">
          {#each socialNetworks as { name, url }}
            <a
              href={url}
              target="_blank"
              class="hover:opacity-80 transition-opacity"
              aria-label="Visit our {name} page"
            >
              <svelte:component this={socialIconMap[name]} />
            </a>
          {/each}
        </CardFooter>
      </Card>
    {/each}
  </div>
</section>
