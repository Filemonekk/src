import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { fn } from '@storybook/test';


const meta = {
    title: 'UI/Button',
    component: Button,
  tags: ["autodocs"],
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    label: 'Click me here!'
  },
};

export const Disabled: Story = {
  args: {
    label: 'Here!',
    disabled: true,
  },
};

export const Red: Story = {
  args: {
    label: 'Here!',
    className: 'bg-red-600 hover:bg-red-500'
  },
};

export const Green: Story = {
  args: {
    label: 'Here!',
    className: 'bg-green-600 hover:bg-green-500'
  },
};