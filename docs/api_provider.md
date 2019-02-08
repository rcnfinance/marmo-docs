---
id: api_provider
title: Provider reference
---

The provider configuration object is used to define the Ethereum node and Relayer URL.

## Constructor

Creates a new provider object

<!--DOCUSAURUS_CODE_TABS-->
<!--JavaScript-->
```js
import { Provider } from "marmojs";

new Provider(eth_node, relayer_url);
```
#### Parameters
1. `eth_node` - `string | Web3`: The Ethereum node used to read information of the network (It can be provided as a Web3 instance).
2. `relayer_url` - `string`: The Relayer used to send Intents.

#### Return
`Provider` object used to relay and query intents.

<!--Python-->
```python
from marmopy import Provider

Provider(eth_node, relayer_url)
```

#### Parameters
1. `eth_node` - `string | Web3`: The Ethereum node used to read information of the network (It can be provided as a Web3 instance).
2. `relayer_url` - `string`: The Relayer used to send Intents.

#### Return
`Provider` object used to relay and query intents.

<!--Java-->
```java
import network.marmoj.config.Provider;

new Provider(ethNode, relayerUrl);
```
#### Parameters
1. `ethNode` - `String | Web3`: The Ethereum node used to read information of the network (It can be provided as a Web3 instance).
2. `relayerUrl` - `String`: The Relayer used to send Intents.
```
<!--END_DOCUSAURUS_CODE_TABS-->

## provider as default ()

Defines the proper as the default global provider.

<!--DOCUSAURUS_CODE_TABS-->
<!--JavaScript-->
```js
provider.asDefault()
```

<!--Python-->
```python
provider.as_default()
```
<!--Java-->
```java
provider.asDefault();
```
<!--END_DOCUSAURUS_CODE_TABS-->
