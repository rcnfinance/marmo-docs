---
id: intents
title: Intents and Transactions
---

Transactions within the Marmo ecosystem are called Intents; those Intents represent the desired action of the signer and are executed on the Ethereum network by a relayer. This relayer has little to no control over the intention of the signer.

## Building an Intent

Intents can perform a wide variety of operations, ranging from sending cryptocurrency to interacting with complex platforms built using the 
Ethereum technology.

#### Intent action

Inside Intents we have Intent actions, those are the representation of the desired operation to perform, but it has no information about the rules of execution

```
Intent Action: Do X
Intent: Do [Intent action] before [time]
```

### Sending ETH

ETH is the main cryptocurrency existing on the Ethereum network; it has a special place on the protocol, therefore making transfers of this currency is the most basic example of an Intent.

<!--DOCUSAURUS_CODE_TABS-->
<!--JavaScript-->
```js
todo
```
<!--Python-->
```python
todo
```
<!--Java-->
```java
todo
```
<!--END_DOCUSAURUS_CODE_TABS-->


### Sending ERC20 Tokens

To send Tokens is required to specify the address of the token*, the destination of the transfer, and the amount to transfer. 

>All tokens have an assigned address, belonging to the contract managing all the token logic.

<!--DOCUSAURUS_CODE_TABS-->
<!--JavaScript-->
```js
todo
```
<!--Python-->
```python
from marmopy import Intent, IntentAction, ERC20

# Test ERC20 token contract 
token = ERC20("0x2f45b6fb2f28a73f110400386da31044b2e953d4")

# Transfer 1 Token (RCN has 18 decimals)
intentAction = token.transfer("0x7F5EB5bB5cF88cfcEe9613368636f458800e62CB", 10 ** 18)

# Create intent from intent action
intent = Intent(intent_action = intentAction)
```
<!--Java-->
```java
todo
```
<!--END_DOCUSAURUS_CODE_TABS-->


## Signing an intent

Before relaying the intent, the wallet must attach its signature, transforming it into a "Signed intent".

Signed Intents contain a unique ID, and also data on which wallet approved the action.

<!--DOCUSAURUS_CODE_TABS-->
<!--JavaScript-->
```js
todo
```
<!--Python-->
```python
from marmopy import Intent, Wallet

wallet = Wallet("<private key here>")
intent = Intent(intent_action = intentAction)

signedIntent = wallet.sign(intent)
```
<!--Java-->
```java
todo
```
<!--END_DOCUSAURUS_CODE_TABS-->

> The same Intent signed by different wallets will result in different IDs

## Relaying an Intent

When an Intent is already signed, it's ready to be sent to a relayer; this relayer is going to perform the requested actions on the Blockchain.

<!--DOCUSAURUS_CODE_TABS-->
<!--JavaScript-->
```js
todo
```
<!--Python-->
```python
from marmopy import Intent, Wallet

wallet = Wallet("<private key here>")
intent = Intent(intent_action = intentAction)

signedIntent = wallet.sign(intent)

signedIntent.relay()
```
<!--Java-->
```java
todo
```
<!--END_DOCUSAURUS_CODE_TABS-->

### Custom Relayer provider

By default, the SDK uses the default provider to obtain the relayer but is possible to pass your custom provider to the `relay()` method. 

<!--DOCUSAURUS_CODE_TABS-->
<!--JavaScript-->
```js
todo
```
<!--Python-->
```python
from marmopy import Intent, Wallet, Provider

wallet = Wallet("<private key here>")
intent = Intent(intent_action = intentAction)

signedIntent = wallet.sign(intent)

my_provider = Provider("<eth node url>", "<relayer url>")
signedIntent.relay(my_provider)
```
<!--Java-->
```java
todo
```
<!--END_DOCUSAURUS_CODE_TABS-->