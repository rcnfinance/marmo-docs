---
id: wallets
title: Wallets
---

Marmo Wallets behave like accounts. Each Wallet is independent and can be used to send and receive Ether or tokens (both Fungible and Non-Fungible) and to interact with any smart-contract on the Ethereum network.

Each Wallet is associated with a Private Key, which is required to operate with that Wallet. Any person or software with access to the Key can make use of the wallet, effectively becoming its owner. Therefore, it is crucial for the true owner of the Key to keep it secret at all times.

# Wallet Creation

Wallets can be created at any moment, even if the client is offline. This is possible because Marmo creates Wallets by taking Private Keys and calculating the Wallets' adresses using them, a process that does not require Internet connection.

Wallet creation is free and there is no limit to the amount of Wallets that a client can create using the SDK. The process is instantaneous and the Wallet is ready to be used as soon as its address is obtained.

<!--DOCUSAURUS_CODE_TABS-->
<!--JavaScript-->
```js
import { Wallet } from "marmojs";

const wallet = new Wallet("<private key here>");
console.log(wallet.address); // The address of the Marmo wallet
```
<!--Python-->
```python
from marmopy import Wallet

wallet = Wallet("<private key here>")
wallet.address # The address of the Marmo wallet
```
<!--Java-->
```java
import network.marmoj.model.Wallet;

Wallet wallet = new Wallet("<private key here>");
System.out.println(wallet.getAddress()); // The address of the Marmo wallet
```
<!--END_DOCUSAURUS_CODE_TABS-->

> Two Wallets created using the same Private Key and configuration will have the same address.

## Custom Configuration

If a Wallet is created without specifying a configuration to the SDK, the Wallet creation process will return an exception.

If a global configuration is defined the SDK will automatically assign that configuration to all new Wallets, unless another custom configuration is specified upon creation.

<!--DOCUSAURUS_CODE_TABS-->
<!--JavaScript-->
```js
import { Wallet, Config } from "marmojs";

const customConfig = new Config(
    "<init contract>",
    "<factory>",
    "<multi_dependency_contract>",
    3
);

const wallet = new Wallet("<private key here>", customConfig);

wallet.address; // The address of the Marmo wallet
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
import network.marmoj.config.Config;

Config config = new Config(
    "<init_contract>",
    "<factory>",
    "<multi_dependency_contract>",
    "<implementation_contract>",
    "<network_id>"
);
Wallet wallet = new Wallet("<private key here>", config);
```
<!--END_DOCUSAURUS_CODE_TABS-->

> Wallets created using different configurations will have different addresses, even when using the same Private Key.
