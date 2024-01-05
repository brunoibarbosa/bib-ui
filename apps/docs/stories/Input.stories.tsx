import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "bib-ui";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
  args: {
    color: "orange",
    size: "default",
    disabled: false,
  },
  argTypes: {
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
    disabled: {
      defaultValue: false,
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    color: "black",
  },
};
