---
id: setup
title: First steps
---

# Install

Marmo library is available in Java, Javascript and Python, the library has pre-loaded the configuration to interact with Marmo in the Ropsten testnet and Ethereum Mainnet.

### Javascript

<!--DOCUSAURUS_CODE_TABS-->
<!--JavaScript-->
```shell
npm install marmo-sdk
```
<!--Python-->
```shell
pip install marmopy
```
<!--Java-->
```shell
todo
```
<!--END_DOCUSAURUS_CODE_TABS-->

# Configuration

In order to use Marmo in different networks and different versions of Marmo, is required to specify a configuration to use. The Marmo-SDK already contains configurations ready to roll on different networks.

## Global configuration

If the client only needs to interact with a single Marmo configuration in the whole project, the configuration can be defined as default.

<!--DOCUSAURUS_CODE_TABS-->
<!--JavaScript-->
```js
import { DefaultConf } from "marmojs";

// Select the Ropsten testnet configuration
DefaulltConf.ROPSTEN.asDefault();
```
<!--Python-->
```python
from marmopy import DefaultConf

# Select the Ropsten testnet configuration
DefaultConf.ROPSTEN.as_default()
```
<!--Java-->
```java
import network.marmoj.config.DefaultConf;

# Select the Ropsten testnet configuration
DefaultConf.ROPSTEN.asDefault();
```
<!--END_DOCUSAURUS_CODE_TABS-->

An example on how to use local configuration is available, [Local configuration](wallet#using-a-custom-configuration)

# Provider

The provider is the combination of services that are going to be used to talk with the Ethereum network.

## Relayer

The Relayer is in charge of wrapping and broadcasting all the signed Intents, is going to be responsible for paying the fees to the Ethereum network.

## Ethereum node

The Ethereum node is going to be providing all information about the status of the intents; this node has to be operating in the same network where is deployed the chosen Marmo configuration.


<!--DOCUSAURUS_CODE_TABS-->
<!--JavaScript-->
```js
import { Provider } from "marmojs"

provider = new Provider(
    '<url of the ethereum node>',
    '<url of the relayer>'
);
```
<!--Python-->
```python
from marmopy import Provider

provider = Provider(
    '<url of the ethereum node>',
    '<url of the relayer>'
)

provider.as_default()
```
<!--Java-->
```java
TODO
```
<!--END_DOCUSAURUS_CODE_TABS-->
> The provider can be defined as the global provider, 

### Sandbox provider

We provide a Relayer and Ethereum Node intended to be used by developers on the Ethereum Ropsten network.

<!--DOCUSAURUS_CODE_TABS-->
<!--JavaScript-->
```js
import { Provider } from "marmojs";

const ethNode = "https://ropsten.node.rcn.loans:8545/";
const relayer = "http://ec2-18-188-99-203.us-east-2.compute.amazonaws.com/";

provider = new Provider(ethNode, relayer);
```
<!--Python-->
```python
from marmopy import Provider

eth_node = "https://ropsten.node.rcn.loans:8545/"
relayer = "http://ec2-18-188-99-203.us-east-2.compute.amazonaws.com/"

provider = Provider(eth_node, relayer)
```
<!--Java-->
```java
TODO
```
<!--END_DOCUSAURUS_CODE_TABS-->
