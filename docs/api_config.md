---
id: api_config
title: Configuration reference
---

## Constructor

Creates a new configuration object

<!--DOCUSAURUS_CODE_TABS-->
<!--Python-->
```python
from marmopy import Conf

Conf(init_code, marmo_factory, deps_utils, network_id)
```

#### Parameters

1. `init_code` - `string`: keccak256 hash of the init_code of each Marmo wallet contract.

2. `marmo_factory` - `string`: Address of the contract creating the wallets.

3. `deps_utils` - `string`: Contract with dependency utils, (must implement `multipleDeps`)

4. `network_id` - `int`: Id number of the Ethereum network being used

#### Returns

Configuration object

<!--JavaScript-->
```js
import { Config } from "marmojs"

new Conf(initCode, marmoFactory, depsUtils)
```

#### Parameters

1. `initCode` - `string`: keccak256 hash of the init_code of each Marmo wallet contract.

2. `marmoFactory` - `string`: Address of the contract creating the wallets.

3. `depsUtils` - `string`: Contract with dependency utils, (must implement `multipleDeps`)

#### Returns

Configuration object

<!--Java-->
```java
import network.marmoj.config.Config;

new Conf(initCode, marmoFactory, depsUtils, implementation, networkId);
```

#### Parameters

1. `initCode` - `String`: keccak256 hash of the initCode of each Marmo wallet contract.

2. `marmoFactory` - `String`: Address of the contract creating the wallets.

3. `deps_utils` - `String`: Contract with dependency utils, (must implement `multipleDeps`)

4. `implementation` - `String`: Contract address with implementation 

5. `networkId` - `Integer`: Id number of the Ethereum network being used

#### Returns

Configuration object

<!--END_DOCUSAURUS_CODE_TABS-->

## config as default ()

Defines the proper as the default global configuration.

<!--DOCUSAURUS_CODE_TABS-->
<!--Python-->
```python
config.as_default()
```
<!--JavaScript-->
```js
config.asDefault()
```
<!--Java-->
```java
config.asDefault();
```
<!--END_DOCUSAURUS_CODE_TABS-->

## Default configurations

Static preset configuration objects

* Ropsten - Main configuration for the Ethereum Ropsten Testnet

<!--DOCUSAURUS_CODE_TABS-->
<!--Python-->
```python
from marmopy import DefaultConf

DefaultConf.ROPSTEN
```
<!--JavaScript-->
```js
import { DefaultConf } from "marmojs"

DefaultConf.ROPSTEN
```
<!--Java-->
```java
import network.marmoj.config.DefaultConf;

DefaultConf.ROPSTEN;
```
<!--END_DOCUSAURUS_CODE_TABS-->
