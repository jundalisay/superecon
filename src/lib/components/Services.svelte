<script lang="ts">
  import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
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

  const serviceList: ServiceProps[] = [
    {
      title: "Circular Economy",
      description:
        "Whether food rescue, resource rescue, labor rescue (unemployment), etc our system circulates resources and services",
      pro: 0,
    },
    {
      title: "Economic Matching",
      description:
        "Is your career the best for you? We match student-course, buyer-seller, investor-entrepreneur through ou rmatching system",
      pro: 1,
    },
    {
      title: "Superanalytics",
      description: "Analytics from the moneyless servers are made available to all.",
      pro: 1,
    },
    {
      title: "Socio-economic Prediction",
      description: "We use the Social Cycles model to predict socio-economic outcomes.",
      pro: 1,
    },
  ];
</script>

<section id="services" class="container py-24 sm:py-32">
  <h2 class="text-lg text-primary text-center mb-2 tracking-wider">
    Services
  </h2>

  <h2 class="text-3xl md:text-4xl text-center font-bold mb-4">
    An Integrated Economy
  </h2>
<!--   <h3 class="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
    We complete your health
  </h3> -->

  <div class="grid sm:grid-cols-2 lg:grid-cols-2 gap-4 w-full lg:w-[60%] mx-auto">
    {#each serviceList as { title, description, pro }}
      <Card class="bg-muted/60 dark:bg-card h-full pb-6 relative">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        {#if pro === ProService.YES}
          <Badge variant="secondary" class="absolute -top-2 -right-3">
            PRO
          </Badge>
        {/if}
      </Card>
    {/each}
  </div>
</section>
