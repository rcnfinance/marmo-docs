---
id: api_config
title: Configuration reference
---

## Constructor

Creates a new configuration object

<!--DOCUSAURUS_CODE_TABS-->
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

<!--Java-->
```java
todo
```
<!--END_DOCUSAURUS_CODE_TABS-->

## config as default ()

Defines the proper as the default global configuration.

<!--DOCUSAURUS_CODE_TABS-->
<!--JavaScript-->
```js
config.asDefault()
```

<!--Python-->
```python
config.as_default()
```
<!--Java-->
```java
todo
```
<!--END_DOCUSAURUS_CODE_TABS-->

## Default configurations

Static preset configuration objects

* Ropsten - Main configuration for the Ethereum Ropsten Testnet

<!--DOCUSAURUS_CODE_TABS-->
<!--JavaScript-->
```js
import { DefaultConf } from "marmojs"

DefaultConf.ROPSTEN
```

<!--Python-->
```python
from marmopy import DefaultConf

DefaultConf.ROPSTEN
```
<!--Java-->
```java
todo
```
<!--END_DOCUSAURUS_CODE_TABS-->