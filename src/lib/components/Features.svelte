<script lang="ts">
  import { Card, CardContent, CardHeader, CardTitle } from "$lib/components/ui/card";
  import {
    Paintbrush,
    MessageCircle,
    TabletSmartphone,
    BadgeCheck,
    Goal,
    PictureInPicture,
    MousePointerClick,
    Newspaper,
  } from "lucide-svelte";

  interface FeaturesProps {
    icon: 'tabletSmartphone' | 'badgeCheck' | 'goal' | 'pictureInPicture' | 
          'paintbrush' | 'mousePointerClick' | 'messageCircle' | 'newspaper';
    title: string;
    description: string;
  }

  const featureList: FeaturesProps[] = [
    {
      icon: "tabletSmartphone",
      title: "Moneyless First",
      description:
        "Supereconomics uses grains as the basis of exchangeable value instead of money.",
    },
    {
      icon: "badgeCheck",
      title: "Time Value of Life",
      description:
        "We do impact projects for society.",
    },
    {
      icon: "goal",
      title: "DSIT Model",
      description:
        "The 4 Laws are plugged into the Demand-Supply-Industry-Trade model to ensure sustainable and balanced wealth maximization",
    },
    {
      icon: "pictureInPicture",
      title: "Usufruct Economy",
      description:
        "Private ownership is replaced with usufruct rights as temporary ownership and circular economy",
    },
    {
      icon: "mousePointerClick",
      title: "Pool Clearing",
      description:
        "The Bretton Woods System is replaced with a Pool Cleraing system from Adam Smith and EF Schumacher",
    },
    {
      icon: "newspaper",
      title: "Resource Branch",
      description:
        "Supereconomics advocates for a 4th Branch of government called Resources to handle key industries",
    },
  ];

  const iconMap = {
    tabletSmartphone: TabletSmartphone,
    badgeCheck: BadgeCheck,
    goal: Goal,
    pictureInPicture: PictureInPicture,
    paintbrush: Paintbrush,
    mousePointerClick: MousePointerClick,
    messageCircle: MessageCircle,
    newspaper: Newspaper,
  };
</script>

<section id="features" class="container py-24 sm:py-32">
  <h2 class="text-lg text-primary text-center mb-2 tracking-wider">
    Features
  </h2>

  <h2 class="text-3xl md:text-4xl text-center font-bold mb-4">
    What Makes Us Different
  </h2>

  <h3 class="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
    Supereconomics has new and original concepts 
  </h3>

  <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
    {#each featureList as { icon, title, description }}
      <Card class="h-full bg-background border-0 shadow-none">
        <CardHeader class="flex justify-center items-center">
          <div class="bg-primary/20 p-2 rounded-full ring-8 ring-primary/10 mb-4">
            <svelte:component 
              this={iconMap[icon]} 
              class="size-6 text-primary"
            />
          </div>
          <CardTitle>{title}</CardTitle>
        </CardHeader>

        <CardContent class="text-muted-foreground text-center">
          {description}
        </CardContent>
      </Card>
    {/each}
  </div>
</section>
