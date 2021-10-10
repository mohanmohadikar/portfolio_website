import React from 'react';
import CustomPill from './CustomPill';

export default {
    title: 'Custom Pill',
    component: CustomPill
}

export const Primary = () => (
    <CustomPill />
)

export const Second = () => (
    <CustomPill title="My Secondary Title" />
)
