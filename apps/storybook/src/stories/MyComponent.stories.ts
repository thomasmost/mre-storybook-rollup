import type { Meta, StoryObj } from "@storybook/react";
import { MyComponent } from "@myscope/react";

const meta = {
  title: "Example/MyComponent",
  component: MyComponent,
  tags: ["autodocs"],
} satisfies Meta<typeof MyComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    mapAttribution: false,
  },
};
