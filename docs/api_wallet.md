---
id: api_wallet
title: Wallet reference
---

Wallets are used to known the address of the Marmo wallet, and to sign intents to that wallet.

## Constructor

Creates a new wallet instance

<!--DOCUSAURUS_CODE_TABS-->
<!--Python-->
```python
from marmopy import Wallet

Wallet(private or credentials, configuration (optional))
```

#### Parameters
1. `private_key` - `string | Credentials`: The private key to use when creating the wallet. Used to sign Intents.
2. `configuration` - `Config`: (semi-optional) The configuration to use in order to derivate the wallet address, by default uses the global configuration, throws if not available. 

#### Return
`Wallet` object used to sign Intents and obtain the wallet address.

<!--JavaScript-->
```js
import { Wallet } from "marmojs"

new Wallet(key, config)
```
#### Parameters
1. `private_key` - `string`: The private key to use when creating the wallet. Used to sign Intents.
2. `configuration` - `Config`: (semi-optional) The configuration to use in order to derivate the wallet address, by default uses the global configuration, throws if not available. 

#### Return
`Wallet` object used to sign Intents and obtain the wallet address.

<!--Java-->
```java
todo
```
<!--END_DOCUSAURUS_CODE_TABS-->

## wallet address

The address of the wallet, can receive and send funds, eth, tokens, etc.

<!--DOCUSAURUS_CODE_TABS-->
<!--Python-->
```python
wallet.address
```

#### Property

* `string` - Address of the Marmo wallet

<!--JavaScript-->
```js
wallet.address
```

#### Property

* `string` - Address of the Marmo wallet

<!--Java-->
```java
todo
```
<!--END_DOCUSAURUS_CODE_TABS-->

## wallet signer

The address signing the Intents, a regultar Ethereum address derivated from the private key.

<!--DOCUSAURUS_CODE_TABS-->
<!--Python-->
```python
wallet.signer
```

#### Property

* `string` - Address of the wallet signer

<!--JavaScript-->
```js
wallet.signer
```

#### Property

* `string` - Address of the wallet signer

<!--Java-->
```java
todo
```
<!--END_DOCUSAURUS_CODE_TABS-->

## wallet sign ()

Signs an Intent using the wallet

<!--DOCUSAURUS_CODE_TABS-->
<!--Python-->
```python
wallet.sign(intent)
```

#### Parameters

1. `Intent` - Intent to sign

#### Returns

`SignedIntent`, signature with intent attached

<!--JavaScript-->
```js
wallet.sign(intent)
```

#### Parameters

1. `Intent` - Intent to sign

#### Returns

`SignedIntent`, signature with intent attached

<!--Java-->
```java
todo
```
<!--END_DOCUSAURUS_CODE_TABS-->