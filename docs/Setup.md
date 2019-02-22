---
id: setup
title: Setup
---

# Installing Marmo

Marmo libraries are available in Java, Javascript and Python, and include pre-loaded configurations to interact with Marmo in the Ropsten Testnet and Ethereum Mainnet.

### Javascript

<!--DOCUSAURUS_CODE_TABS-->
<!--JavaScript-->
```shell
npm install marmojs
```
<!--Python-->
```shell
pip install marmopy
```
<!--Java-->
#### Gradle
```shell
compile ('network.marmoj:core:0.1.0')
```
#### Maven
```shell
<dependency>
    <groupId>network.marmoj</groupId>
    <artifactId>core</artifactId>
    <version>0.1.0</version>
</dependency>
```
<!--END_DOCUSAURUS_CODE_TABS-->

# Choosing a Configuration

In order to deploy Marmo across different networks and employ its different versions it is necessary to implement specific configurations for it, which are already included on the SDK.

## Global configuration

If the client only needs to interact with a single Marmo configuration for the whole project, that configuration can be defined as default.

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

// Select the Ropsten testnet configuration
DefaultConf.ROPSTEN.asDefault();
```
<!--END_DOCUSAURUS_CODE_TABS-->

An example on how to use local configuration can be found [here](wallet#using-a-custom-configuration)

# Provider

The Provider is the combination of services that allow Marmo to communicate with the Ethereum network.

## Relayer

The Relayer is in charge of broadcasting all signed Intents to the Ethereum network as Transactions, while also paying for their fees.

## Ethereum Node

The Ethereum Node provides all the relevant information about the intents' status. The Node must operate in the same network where the chosen Marmo configuration has been deployed.

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
import network.marmoj.config.Provider;

Provider provider = new Provider(
        "<url of the ethereum node>", 
        "<url of the relayer>"
);
```
<!--END_DOCUSAURUS_CODE_TABS-->
> The Provider can be defined as the Global Provider. 

## Sandbox provider

We provide a Relayer and an Ethereum Node intended to be used by developers on the Ethereum Ropsten Testnet.

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
import network.marmoj.config.Provider;

String ethNode = "https://ropsten.node.rcn.loans:8545/";
String relayer = "http://ec2-18-188-99-203.us-east-2.compute.amazonaws.com/";

Provider provider = new Provider(ethNode, relayer);
```
<!--END_DOCUSAURUS_CODE_TABS-->
