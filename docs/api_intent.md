---
id: api_intent
title: Intent reference
---

An Intent is a wrapper of an Intent action; it additions metadata as dependencies, expiration, gas, and replay protection, all intent actions must be transformed in Intents before relaying.

## Create an Intent

All parameters are optional except for the `Intent action`.

<!--DOCUSAURUS_CODE_TABS-->
<!--JavaScript-->
```js
todo
```
<!--Python-->
```python
from marmopy import Intent
from time import time

intent = Intent(
    intent_action=intent_action,
    salt="0x13",                   # Optional, replay protection
    expiration=int(time()) + 86400 # Optional, unix time expiration
)
```
<!--Java-->
```java
todo
```
<!--END_DOCUSAURUS_CODE_TABS-->

### Intent parameters

| Parameter     | Required | Default                 | Description                                                                                       |
|---------------|----------|-------------------------|---------------------------------------------------------------------------------------------------|
| Intent action | true     | --                      | Action to be performed when the intent is executed.                                               |
| Dependencies  | false    | No dependencies         | List of SignedIntents that must be relayed before this intent.                                    |
| Salt          | false    | 0x                      | Unique identifier of the Intent, used to send multiple equal intents, and to avoid Intent replay. |
| Expiration    | false    | current time + 365 days | Expiration of the signed intent, after this unix time the Intent is no longer valid.              |
| Max gas price | false    | 2 ** 256 - 1            | Top limit gas price, it is used for applications that penalize users who pay high gas prices.     |
| Min gas limit | false    | 0                       | Min gas required to relay the Intent, used for limiting relayer malleability.                     |

### Dependencies

All Intents have dependencies, the dependencies are provided as an array of *SignedIntents* (see #SignedIntent). The contract only allows the relay of the Intent if all the dependencies are already relayed.

<!--DOCUSAURUS_CODE_TABS-->
<!--JavaScript-->
```js
todo
```
<!--Python-->
```python
from marmopy import Intent

intent = Intent(intent_action=intent_action)

intent.add_dependency(signed_intent_approve)
intent.add_dependency(signed_intent_confirm)
```
<!--Java-->
```java
todo
```
<!--END_DOCUSAURUS_CODE_TABS-->

### Salt

The same wallet can't relay two Intents with the same ID (See #Link), by providing the Intent with different salts, it's possible to send multiple Intents with the same actions and parameters. 

The salt can also be used as an Internal ID, to keep track of different intents.

<!--DOCUSAURUS_CODE_TABS-->
<!--JavaScript-->
```js
todo
```
<!--Python-->
```python
from marmopy import Intent

intent1 = Intent(intent_action=intent_action, salt="0x13")
intent2 = Intent(intent_action=intent_action, salt="0x14")

# Different Ids, same action
assert intent1.id(wallet) != intent2.id(wallet)
```
<!--Java-->
```java
todo
```
<!--END_DOCUSAURUS_CODE_TABS-->

### Expiration

`Expiration` defines the Unix-timestamp on which the signed Intent is no longer valid. After this period the Intent can no longer be relayed.

By default, the expiration is 365 days after the creation of the Intent.

> This expiration only affects non-relayed intents

<!--DOCUSAURUS_CODE_TABS-->
<!--JavaScript-->
```js
todo
```
<!--Python-->
```python
from marmopy import Intent
from time import time

# Expires in one day
intent = Intent(intent_action=intent_action, expiration=int(time()) + 86400)
```
<!--Java-->
```java
todo
```
<!--END_DOCUSAURUS_CODE_TABS-->

### Max gas price

`Max gas price` set's an upper limit on the transaction gas.

In ideal circumstances, the relayer should be able to determine the optimal gas price for the transaction, but some contracts penalize the user if the gas price is above a certain level.

<!--DOCUSAURUS_CODE_TABS-->
<!--JavaScript-->
```js
todo
```
<!--Python-->
```python
from marmopy import Intent

# 5 gwei max gas price
intent = Intent(intent_action=intent_action, max_gas_price=5 * 10 ** 9)
```
<!--Java-->
```java
todo
```
<!--END_DOCUSAURUS_CODE_TABS-->

> It's recommended to leave this value as default, to ensure a better chance of the Intent being relayed

### Min gas limit

`Min gas price` set's the minimum required gas to execute the Intent.

In ideal circumstances, the relayer can be trusted to choose the right gas limit, but in the case of a non-trusted relayer, it's recommended to define this value manually.

<!--DOCUSAURUS_CODE_TABS-->
<!--JavaScript-->
```js
todo
```
<!--Python-->
```python
from marmopy import Intent

# 5 gwei max gas price
intent = Intent(intent_action=intent_action, min_gas_limit=200000)
```
<!--Java-->
```java
todo
```
<!--END_DOCUSAURUS_CODE_TABS-->

> If the relayer is trusted is recommended to leave this value as the default
