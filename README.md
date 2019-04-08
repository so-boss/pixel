# pixel
Pixel Web Resources: Component, Utils

## Read about Pixel and it's parts:
1. [Elements](https://csaaig.atlassian.net/wiki/spaces/pixel/pages/904331361/Elements)
2. [Wrappers](https://csaaig.atlassian.net/wiki/spaces/pixel/pages/904134741/Wrappers) 
3. [Containers](https://csaaig.atlassian.net/wiki/spaces/pixel/pages/904200306/Containers)
4. [Style](helpers/tokens-DEP)(https://csaaig.atlassian.net/wiki/spaces/pixel/pages/904299268/Helpers)
5. [Base Config (color/font)](https://csaaig.atlassian.net/wiki/spaces/pixel/pages/904396887/Color)

AVAILABLE
1. Elements: **Title, Thing**
2. Wrappers: **Wrapper, Label, Message**
3. Containers: **Container, Group**

UNAVAILABLE:
1. Elements: **Block, Button, Icon**
2. Wrappers: **Action, ActionBlock, ActionButton, ActionLink, Flag, Input, Inputs, InputSelect, Interview, Tag**
3. Containers: **Drawer, Page**
4. All UI.*** Packages

## Getting Started
1. Install private module for Pixel from our enterprise repo. TODO: Use API Key?
npm install git+ssh://git@github.com:aaa-ncnu-ie/pixel.git#v0.1.0

2. Include Pixel component(s) in a project's component
import { Wrapper, Label } from 'pixel';

NOTE: 
Migrating pixel components into module, not all components in Pixel are included.
