import React from 'react';

import Header from '../components/Header';

export default {
  title: 'Header',
  component: Header,
};


export const Text = () => <Header></Header>;

/*
const Template = (args) => <Header {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {},
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
*/
