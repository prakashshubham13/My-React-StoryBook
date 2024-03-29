import React from "react";
import Center from "../Center/Center";
import Button from "./Button";

export default {
    title: 'Form/Button',
    component: Button,
    args:{
        children: 'Button'
    },
    decorators: [story => <Center>{story()}</Center>]
}

export const Primary = () => <Button variant='primary'>Primary</Button>
export const Danger = () => <Button variant='danger'>Danger</Button>
export const Secondary = () => <Button variant='secondary'>Secondary</Button>

const Template = args => <Button {...args} />
export const PrimaryA = Template.bind({})
PrimaryA.args = {
    variant: 'primary',
    // children: 'Primary Button'
}