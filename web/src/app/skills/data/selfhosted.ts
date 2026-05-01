type SelfHostedService = {
  name: string;
  url?: string;
};

export const selfHostedServices: SelfHostedService[] = [
  {
    name: "Uptime Kuma",
  },
  {
    name: "Dozzle",
  },
  {
    name: "Home Assistant",
  },
  {
    name: "Github Actions Runner",
  },
  {
    name: "Tailscale",
  },
  {
    name: "Tinyauth",
  },
  {
    name: "n8n",
  },
  {
    name: "RSSHub",
  },
  {
    name: "ChartDB",
    url: "https://chartdb.mma.dev",
  },
  {
    name: "Gotify",
  },
  {
    name: "Owntracks",
  },
  {
    name: "OwnCast",
  },
  {
    name: "Nextcloud",
  },
  {
    name: "FreshRSS",
  },
  {
    name: "Apprise",
  },
  {
    name: "ChangeDetection.io",
  },
  {
    name: "Portfolio",
    url: "https://portfolio.mma.dev",
  },
  {
    name: "+ pleins d'autres",
  },
];
