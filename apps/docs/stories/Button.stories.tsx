import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "bib-ui";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  args: {
    variant: "default",
    color: "orange",
    shape: "default",
    size: "default",
    asIcon: false,
    disabled: false,
    fullWidth: false,
    isLoading: false,
    startIcon: "",
    endIcon: "",
    children: "Button",
  },
  argTypes: {
    variant: {
      control: { type: "radio" },
      options: ["default", "transparent", "text", "link", "outline"],
    },
    color: {
      control: { type: "radio" },
      options: [
        "orange",
        "red",
        "yellow",
        "green",
        "violet",
        "blue",
        "gray",
        "black",
      ],
    },
    size: {
      control: { type: "radio" },
      options: ["small", "default", "large"],
    },
    shape: {
      control: { type: "radio" },
      options: ["default", "rounded", "circle"],
    },
    disabled: {
      defaultValue: false,
    },
    asIcon: {
      defaultValue: false,
    },
    fullWidth: {
      defaultValue: false,
    },
    isLoading: {
      defaultValue: false,
    },
    startIcon: {
      type: "string",
    },
    endIcon: {
      type: "string",
    },
    asChild: {
      table: {
        disable: true,
      },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    variant: "default",
  },
};

export const Transparent: Story = {
  args: {
    variant: "transparent",
  },
};

export const Text: Story = {
  args: {
    variant: "text",
  },
};

export const Link: Story = {
  args: {
    variant: "link",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
  },
};
