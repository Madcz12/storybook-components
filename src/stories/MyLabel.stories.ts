import type { Meta, StoryObj } from "@storybook/react-vite";
import { MyLabel, type Props } from "../components/MyLabel";
const meta: Meta<Props> = {
    title: 'UI/labels/MyLabel',
    component: MyLabel,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        size: { control: 'inline-radio' },
        color: { control: 'color' }
    }
} satisfies Meta<typeof MyLabel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
    args: {
        label: 'Basic Label',
        size: "normal"
    }
};

export const AllCaps: Story = {
    args: {
        label: 'All Caps Label',
        size: "h3"
    }
};

export const Secondary: Story = {
    args: {
        label: 'Secondary Label',
        color: 'text-secondary',
    }
};

export const CustomColor: Story = {
    args: {
        label: 'Custom Color Label',
        fontColor: "#e81c01",
    }
};

export const CustomBackgroundColor: Story = {
    args: {
        label: 'Custom Color Label',
        fontColor: "#e81c01",
    }
};