import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";

const meta = {
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
type Story = StoryObj<typeof meta>;

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
