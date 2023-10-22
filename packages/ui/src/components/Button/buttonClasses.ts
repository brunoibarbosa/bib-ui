import { tv } from "tailwind-variants";

export const buttonVariants = tv({
  slots: {
    base: "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 disabled:pointer-events-none disabled:text-disabled-text",
    loadingIcon:
      "block w-3.5 h-3.5 rounded-[50%] border-[1px] border-white border-t-transparent animate-spin",
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
        base: "text-black disabled:bg-transparent",
      },
      outline: {
        base: "text-black disabled:bg-disabled-background border-[1px] disabled:border-disabled-text",
      },
    },
    isLoading: {
      true: {
        base: "opacity-50 disabled:opacity-100 cursor-default",
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

    // Transparent
    {
      variant: "transparent",
      color: "orange",
      class: {
        base: "text-orange-peel-800 bg-orange-peel-100/70 hover:bg-orange-peel-200/70 active:bg-orange-peel-300/70",
        loadingIcon: "border-orange-peel-800 border-t-transparent",
      },
    },
    {
      variant: "transparent",
      color: "red",
      class: {
        base: "text-cinnabar-800 bg-cinnabar-100/70 hover:bg-cinnabar-200/70 active:bg-cinnabar-300/70",
        loadingIcon: "border-cinnabar-800 border-t-transparent",
      },
    },

    // Text
    {
      variant: "text",
      color: "orange",
      class: {
        base: "text-orange-peel-800 bg-transparent hover:bg-orange-peel-100/70 active:bg-orange-peel-200/70",
        loadingIcon: "border-orange-800 border-t-transparent",
      },
    },
    {
      variant: "text",
      color: "red",
      class: {
        base: "text-cinnabar-800 bg-transparent hover:bg-cinnabar-100/70 active:bg-cinnabar-200/70",
        loadingIcon: "border-cinnabar-800 border-t-transparent",
      },
    },

    // Link
    {
      variant: "link",
      color: "orange",
      class: {
        base: "text-orange-peel-700 bg-transparent hover:text-orange-peel-600 active:text-orange-peel-800 group",
        loadingIcon:
          "border-orange-peel-700 border-t-transparent group-hover:border-orange-peel-600 group-hover:border-t-transparent group-active:border-orange-peel-800 group-active:border-t-transparent",
      },
    },
    {
      variant: "link",
      color: "red",
      class: {
        base: "text-cinnabar-700 bg-transparent hover:text-cinnabar-600 active:text-cinnabar-800 group",
        loadingIcon:
          "border-cinnabar-700 border-t-transparent group-hover:border-cinnabar-600 group-hover:border-t-transparent group-active:border-cinnabar-800 group-active:border-t-transparent",
      },
    },

    // Outline
    {
      variant: "outline",
      color: "orange",
      class: {
        base: "text-orange-peel-500 bg-transparent border-orange-peel-500 hover:bg-orange-peel-500 hover:text-white active:bg-orange-peel-600 active:border-orange-peel-600 group",
        loadingIcon:
          "border-orange-peel-500 border-t-transparent group-hover:border-white group-hover:border-t-transparent active:bg-orange-peel-600",
      },
    },
    {
      variant: "outline",
      color: "red",
      class: {
        base: "text-cinnabar-500 bg-transparent border-cinnabar-500 hover:bg-cinnabar-500 hover:text-white active:bg-cinnabar-600 active:border-cinnabar-600 group",
        loadingIcon:
          "border-cinnabar-500 border-t-transparent group-hover:border-white group-hover:border-t-transparent active:bg-cinnabar-600",
      },
    },
  ],
  defaultVariants: {
    variant: "default",
    size: "default",
    color: "orange",
  },
});
