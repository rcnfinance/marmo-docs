---
id: wallet
title: Wallets
---

The Wallets are like accounts; each wallet is independent and can be used to interact with any project on the ethereum network like requesting loans, sending and receiving Ether, Non-Fungible or Fungible Tokens, and more.

Each Wallet is associated with a private key; this secret key is the owner of the wallet and without the secret is not possible to make operations on the name of the wallet. Any person or software with access to the key can make transactions on the wallet, so it's critical that the key is always kept secret.

# Create a wallet

Wallets can be created at any moment, even if the client is offline. The Marmo SDK takes a Private key and calculates the corresponding Marmo wallet address.

Wallet creation is free, and there is no limit on how many wallets can be created using the SDK, the process is instantaneous, and the wallet is ready to be used as soon as the address is obtained.

<!--DOCUSAURUS_CODE_TABS-->
<!--JavaScript-->
```js
todo
```
<!--Python-->
```python
from marmopy import Wallet

wallet = Wallet("<private key here>")
wallet.address # The address of the Marmo wallet
```
<!--Java-->
```java
todo
```
<!--END_DOCUSAURUS_CODE_TABS-->

> Two wallets created using the same private key and configuration, will have the same address

## Using a custom configuration

If a wallet is created without providing a configuration to the SDK, the wallet creation process will throw an exception.

If a global configuration is defined, the SDK will automatically assign that configuration to all new wallets, unless it's specified a custom configuration upon creation.

<!--DOCUSAURUS_CODE_TABS-->
<!--JavaScript-->
```js
todo
```
<!--Python-->
```python
from marmopy import Wallet, Conf

custom_conf = Conf("<init contract>", "<factory>", "<multi_dependency_contract>", 3)

wallet = Wallet("<private key here>", custom_conf)
wallet.address # The address of the Marmo wallet
```
<!--Java-->
```java
todo
```
<!--END_DOCUSAURUS_CODE_TABS-->

> Wallets created using different configuration will have different addresses, even when using the same private key.
