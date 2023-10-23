import { tv } from "tailwind-variants";

export const buttonVariants = tv({
  slots: {
    base: "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 disabled:pointer-events-none disabled:text-disabled-text",
    loadingIcon:
      "block w-3.5 h-3.5 rounded-[50%] border-[1px] border-white !border-t-transparent animate-spin",
  },
  variants: {
    fullWidth: {
      true: {
        base: "w-full",
      },
    },
    variant: {
      default: {
        base: "text-white disabled:bg-disabled-background",
      },
      transparent: {
        base: "text-black disabled:bg-disabled-background",
      },
      text: {
        base: "text-black disabled:bg-transparent",
      },
      link: {
        base: "text-black disabled:bg-transparent hover:underline",
      },
      outline: {
        base: "text-black disabled:bg-disabled-background border-[1px] disabled:border-disabled-text",
      },
    },
    isLoading: {
      true: {
        base: "opacity-50 disabled:opacity-100 cursor-default pointer-events-none",
      },
    },
    shape: {
      default: {
        base: "rounded-none",
      },
      rounded: {
        base: "rounded-[4px]",
      },
      circle: {
        base: "rounded-[1rem]",
      },
    },
    size: {
      small: {
        base: "h-6 px-3 py-1.5",
      },
      default: {
        base: "h-8 px-4 py-2",
      },
      large: {
        base: "h-10 px-[1.25rem] py-2.5",
      },
    },
    color: {
      orange: {
        base: "bg-orange-peel-400",
      },
      red: {
        base: "bg-cinnabar-400",
      },
      yellow: {
        base: "bg-corn-400",
      },
      green: {
        base: "bg-emerald-400",
      },
      violet: {
        base: "bg-electric-violet-400",
      },
      blue: {
        base: "bg-azure-radiance-400",
      },
      gray: {
        base: "bg-oslo-gray-400",
      },
      black: {
        base: "bg-woodsmoke-400",
      },
    },
    asIcon: {
      true: {
        base: "",
      },
    },
  },
  compoundVariants: [
    // Sizes
    {
      shape: "circle",
      size: "large",
      class: {
        base: "rounded-[1.25rem]",
      },
    },
    {
      shape: "circle",
      size: "small",
      class: {
        base: "rounded-[0.75rem]",
      },
    },

    // asIcon
    {
      asIcon: true,
      size: "default",
      class: {
        base: "h-8 w-8 p-2",
      },
    },
    {
      asIcon: true,
      size: "large",
      class: {
        base: "h-10 w-10 p-2.5",
      },
    },
    {
      asIcon: true,
      size: "small",
      class: {
        base: "h-6 w-6 p-1.5",
      },
    },

    // Default
    {
      variant: "default",
      color: "orange",
      class: {
        base: "bg-orange-peel-500 hover:bg-orange-peel-600 active:bg-orange-peel-700 focus-visible:ring-orange-peel-200 text-white",
      },
    },
    {
      variant: "default",
      color: "red",
      class: {
        base: "bg-cinnabar-500 hover:bg-cinnabar-600 active:bg-cinnabar-700 focus-visible:ring-cinnabar-200 text-white",
      },
    },
    {
      variant: "default",
      color: "yellow",
      class: {
        base: "bg-corn-500 hover:bg-corn-600 active:bg-corn-700 focus-visible:ring-corn-200 text-white",
      },
    },
    {
      variant: "default",
      color: "green",
      class: {
        base: "bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 focus-visible:ring-emerald-300 text-white",
      },
    },
    {
      variant: "default",
      color: "violet",
      class: {
        base: "bg-electric-violet-500 hover:bg-electric-violet-600 active:bg-electric-violet-700 focus-visible:ring-electric-violet-200 text-white",
      },
    },
    {
      variant: "default",
      color: "blue",
      class: {
        base: "bg-azure-radiance-600 hover:bg-azure-radiance-700 active:bg-azure-radiance-800 focus-visible:ring-azure-radiance-300 text-white",
      },
    },
    {
      variant: "default",
      color: "gray",
      class: {
        base: "bg-oslo-gray-600 hover:bg-oslo-gray-700 active:bg-oslo-gray-800 focus-visible:ring-oslo-gray-300 text-white",
      },
    },
    {
      variant: "default",
      color: "black",
      class: {
        base: "bg-woodsmoke-800 hover:bg-woodsmoke-900 active:bg-woodsmoke-950 focus-visible:ring-woodsmoke-300 text-white",
      },
    },

    // Transparent
    {
      variant: "transparent",
      color: "orange",
      class: {
        base: "text-orange-peel-800 bg-orange-peel-100/70 hover:bg-orange-peel-200/70 active:bg-orange-peel-300/70",
        loadingIcon: "border-orange-peel-800",
      },
    },
    {
      variant: "transparent",
      color: "red",
      class: {
        base: "text-cinnabar-800 bg-cinnabar-100/70 hover:bg-cinnabar-200/70 active:bg-cinnabar-300/70",
        loadingIcon: "border-cinnabar-800",
      },
    },
    {
      variant: "transparent",
      color: "yellow",
      class: {
        base: "text-corn-800 bg-corn-100/70 hover:bg-corn-200/70 active:bg-corn-300/70",
        loadingIcon: "border-corn-800",
      },
    },
    {
      variant: "transparent",
      color: "green",
      class: {
        base: "text-emerald-800 bg-emerald-100/70 hover:bg-emerald-200/70 active:bg-emerald-300/70",
        loadingIcon: "border-emerald-800",
      },
    },
    {
      variant: "transparent",
      color: "violet",
      class: {
        base: "text-electric-violet-800 bg-electric-violet-100/70 hover:bg-electric-violet-200/70 active:bg-electric-violet-300/70",
        loadingIcon: "border-electric-violet-800",
      },
    },
    {
      variant: "transparent",
      color: "blue",
      class: {
        base: "text-azure-radiance-800 bg-azure-radiance-100/70 hover:bg-azure-radiance-200/70 active:bg-azure-radiance-300/70",
        loadingIcon: "border-azure-radiance-800",
      },
    },
    {
      variant: "transparent",
      color: "gray",
      class: {
        base: "text-oslo-gray-800 bg-oslo-gray-100/70 hover:bg-oslo-gray-200/70 active:bg-oslo-gray-300/70",
        loadingIcon: "border-oslo-gray-800",
      },
    },
    {
      variant: "transparent",
      color: "black",
      class: {
        base: "text-woodsmoke-800 bg-woodsmoke-100/70 hover:bg-woodsmoke-200/70 active:bg-woodsmoke-300/70",
        loadingIcon: "border-woodsmoke-800",
      },
    },

    // Text
    {
      variant: "text",
      color: "orange",
      class: {
        base: "text-orange-peel-800 bg-transparent hover:bg-orange-peel-100/70 active:bg-orange-peel-200/70",
        loadingIcon: "border-orange-800",
      },
    },
    {
      variant: "text",
      color: "red",
      class: {
        base: "text-cinnabar-800 bg-transparent hover:bg-cinnabar-100/70 active:bg-cinnabar-200/70",
        loadingIcon: "border-cinnabar-800",
      },
    },
    {
      variant: "text",
      color: "yellow",
      class: {
        base: "text-corn-800 bg-transparent hover:bg-corn-100/70 active:bg-corn-200/70",
        loadingIcon: "border-corn-800",
      },
    },
    {
      variant: "text",
      color: "green",
      class: {
        base: "text-emerald-800 bg-transparent hover:bg-emerald-100/70 active:bg-emerald-200/70",
        loadingIcon: "border-emerald-800",
      },
    },
    {
      variant: "text",
      color: "violet",
      class: {
        base: "text-electric-violet-800 bg-transparent hover:bg-electric-violet-100/70 active:bg-electric-violet-200/70",
        loadingIcon: "border-electric-violet-800",
      },
    },
    {
      variant: "text",
      color: "blue",
      class: {
        base: "text-azure-radiance-800 bg-transparent hover:bg-azure-radiance-100/70 active:bg-azure-radiance-200/70",
        loadingIcon: "border-azure-radiance-800",
      },
    },
    {
      variant: "text",
      color: "gray",
      class: {
        base: "text-oslo-gray-800 bg-transparent hover:bg-oslo-gray-100/70 active:bg-oslo-gray-200/70",
        loadingIcon: "border-oslo-gray-800",
      },
    },
    {
      variant: "text",
      color: "black",
      class: {
        base: "text-woodsmoke-800 bg-transparent hover:bg-woodsmoke-100/70 active:bg-woodsmoke-200/70",
        loadingIcon: "border-woodsmoke-800",
      },
    },

    // Link
    {
      variant: "link",
      color: "orange",
      class: {
        base: "text-orange-peel-700 bg-transparent hover:text-orange-peel-600 active:text-orange-peel-800 group",
        loadingIcon:
          "border-orange-peel-700 group-hover:border-orange-peel-600 group-active:border-orange-peel-800",
      },
    },
    {
      variant: "link",
      color: "red",
      class: {
        base: "text-cinnabar-700 bg-transparent hover:text-cinnabar-600 active:text-cinnabar-800 group",
        loadingIcon:
          "border-cinnabar-700 group-hover:border-cinnabar-600 group-active:border-cinnabar-800",
      },
    },
    {
      variant: "link",
      color: "yellow",
      class: {
        base: "text-corn-700 bg-transparent hover:text-corn-600 active:text-corn-800 group",
        loadingIcon:
          "border-corn-700 group-hover:border-corn-600 group-active:border-corn-800",
      },
    },
    {
      variant: "link",
      color: "green",
      class: {
        base: "text-emerald-700 bg-transparent hover:text-emerald-600 active:text-emerald-800 group",
        loadingIcon:
          "border-emerald-700 group-hover:border-emerald-600 group-active:border-emerald-800",
      },
    },
    {
      variant: "link",
      color: "violet",
      class: {
        base: "text-electric-violet-700 bg-transparent hover:text-electric-violet-600 active:text-electric-violet-800 group",
        loadingIcon:
          "border-electric-violet-700 group-hover:border-electric-violet-600 group-active:border-electric-violet-800",
      },
    },
    {
      variant: "link",
      color: "blue",
      class: {
        base: "text-azure-radiance-700 bg-transparent hover:text-azure-radiance-600 active:text-azure-radiance-800 group",
        loadingIcon:
          "border-azure-radiance-700 group-hover:border-azure-radiance-600 group-active:border-azure-radiance-800",
      },
    },
    {
      variant: "link",
      color: "gray",
      class: {
        base: "text-oslo-gray-700 bg-transparent hover:text-oslo-gray-600 active:text-oslo-gray-800 group",
        loadingIcon:
          "border-oslo-gray-700 group-hover:border-oslo-gray-600 group-active:border-oslo-gray-800",
      },
    },
    {
      variant: "link",
      color: "black",
      class: {
        base: "text-woodsmoke-800 bg-transparent hover:text-woodsmoke-800 active:text-woodsmoke-950 group",
        loadingIcon:
          "border-woodsmoke-800 group-hover:border-woodsmoke-900 group-active:border-woodsmoke-950",
      },
    },

    // Outline
    {
      variant: "outline",
      color: "orange",
      class: {
        base: "text-orange-peel-500 bg-transparent border-orange-peel-500 hover:bg-orange-peel-500 hover:text-white active:bg-orange-peel-600 active:border-orange-peel-600 group",
        loadingIcon:
          "border-orange-peel-500 group-hover:border-white active:bg-orange-peel-600",
      },
    },
    {
      variant: "outline",
      color: "red",
      class: {
        base: "text-cinnabar-500 bg-transparent border-cinnabar-500 hover:bg-cinnabar-500 hover:text-white active:bg-cinnabar-600 active:border-cinnabar-600 group",
        loadingIcon:
          "border-cinnabar-500 group-hover:border-white active:bg-cinnabar-600",
      },
    },
    {
      variant: "outline",
      color: "yellow",
      class: {
        base: "text-corn-500 bg-transparent border-corn-500 hover:bg-corn-500 hover:text-white active:bg-corn-600 active:border-corn-600 group",
        loadingIcon:
          "border-corn-500 group-hover:border-white active:bg-corn-600",
      },
    },
    {
      variant: "outline",
      color: "green",
      class: {
        base: "text-emerald-600 bg-transparent border-emerald-600 hover:bg-emerald-600 hover:text-white active:bg-emerald-700 active:border-emerald-700 group",
        loadingIcon:
          "border-emerald-600 group-hover:border-white active:bg-emerald-700",
      },
    },
    {
      variant: "outline",
      color: "violet",
      class: {
        base: "text-electric-violet-600 bg-transparent border-electric-violet-600 hover:bg-electric-violet-600 hover:text-white active:bg-electric-violet-700 active:border-electric-violet-700 group",
        loadingIcon:
          "border-electric-violet-600 group-hover:border-white active:bg-electric-violet-700",
      },
    },
    {
      variant: "outline",
      color: "blue",
      class: {
        base: "text-azure-radiance-600 bg-transparent border-azure-radiance-600 hover:bg-azure-radiance-600 hover:text-white active:bg-azure-radiance-700 active:border-azure-radiance-700 group",
        loadingIcon:
          "border-azure-radiance-600 group-hover:border-white active:bg-azure-radiance-700",
      },
    },
    {
      variant: "outline",
      color: "gray",
      class: {
        base: "text-oslo-gray-600 bg-transparent border-oslo-gray-600 hover:bg-oslo-gray-600 hover:text-white active:bg-oslo-gray-700 active:border-oslo-gray-700 group",
        loadingIcon:
          "border-oslo-gray-600 group-hover:border-white active:bg-oslo-gray-700",
      },
    },
    {
      variant: "outline",
      color: "black",
      class: {
        base: "text-woodsmoke-900 bg-transparent border-woodsmoke-900 hover:bg-woodsmoke-900 hover:text-white active:bg-woodsmoke-950 active:border-woodsmoke-950 group",
        loadingIcon:
          "border-woodsmoke-900 group-hover:border-white active:bg-woodsmoke-950",
      },
    },
  ],
  defaultVariants: {
    variant: "default",
    size: "default",
    color: "orange",
  },
});
