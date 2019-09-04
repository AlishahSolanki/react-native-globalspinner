<h1 align="center" style="text-align: center;">react-native-globalspinner</h1>

<p align="center" style="font-size: 1.2rem;">
  <strong>global Spinner</strong> it is a React Native module to help you with easily and highly customizable Spinner to show loading<br />
  
  <img src="https://i.imgur.com/46PytxA.gif" alt="Global Demo of Spinner Component" width="86%" style="border: 0; width: 86%; min-width: 240px; max-width: 100%;" />
</p>

<p align="center" style="font-size: 1.2rem;">
  <a href="https://www.npmjs.com/package/react-native-globalspinner" title="View this project on npm">
    <img src="http://img.shields.io/npm/v/react-native-globalspinner.svg?style=flat-square" alt="npm version" />
  </a>
  <a href="https://www.npmjs.com/package/react-native-globalspinner" title="View this project on npm">
    <img src="http://img.shields.io/npm/dm/react-native-globalspinner.svg?style=flat-square" alt="npm downloads" />
  </a>
  <a href="https://www.npmjs.com/package/react-native-globalspinner" title="View this project on npm">
    <img src="http://img.shields.io/npm/l/react-native-globalspinner.svg?style=flat-square" alt="npm licence" />
  </a>
</p>

## Installation

Since the library is a JS-based solution, to install the latest version of `react-native-globalspinner` you only need to run:

```bash
npm install --save react-native-globalspinner
```

or

```bash
yarn add react-native-globalspinner
```

<!-- ## Try it out

You can try out the [Flash Message Playground app](https://exp.host/@lucasferreira/FlashMessagePlayground) to get a tease of the functionalities of this lib. -->

## Basic Usage

The _Spinner component_ it's build to a global use, so you have to instance this component once in your main app screen always as a last inserted component:

```jsx
import React from "react";
import { View } from "react-native";
import Spinner, { showSpinner, hideSpinner } from "react-native-globalspinner";

export default class App extends React.Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View ref={"otherView1"} />
                <View ref={"otherView2"} />
                <View ref={"otherView3"} />
                {/* GLOBAL FLASH MESSAGE COMPONENT INSTANCE */}
                <Spinner color={"blue"} />
                {/* <--- here as last component */}
            </View>
        );
    }
}
```

After that you only need to call `showSpinner` or `hideSpinner` methods from anywhere in your app.

If you don't need a global use for _(e.g. will use only in one screen)_ you can instance your _Spinner Component_ with a ref ID _(or other capture ref method)_:

```jsx
<View style={{ flex: 1 }}>
  <YourMainApp />
  <Spinner color={"blue"} ref="mySpinner" /> {/* <--- here as last component always with `ref` */}
<View>
```

The message object obligatorily requires some `message` attribute. If you need to show a message with two lines _(title and more details)_ you could use `message` attr for title and `description` attr for details line:

## Props

| Property | Default | Required | Description                |
| -------- | ------- | -------- | -------------------------- |
| color    | `true`  | No       | To change color of spinner |

## Documentation

More details and usages will coming soon.

## TODO

1. Add more customization
2. Add more spinner animations

## License

[MIT](./LICENSE)
