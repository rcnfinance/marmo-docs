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
from marmopy import Intent, ETH

# Transfer 10 Ethers (ETH has 18 decimals)
intentAction = ETH.transfer("0x7F5EB5bB5cF88cfcEe9613368636f458800e62CB", 10 ** 18)

# Create intent from intent action
intent = Intent(intent_action = intentAction)
```
<!--Java-->
```java
ISendEth sendEth = new ETH();

// Transfer 10 Ethers (ETH has 18 decimals)
IntentAction intentAction = sendEth
    .send("0x009ab4de1234c7066197d6ed75743add3576591f", BigInteger.TEN.pow(18));
    
// Create intent from intent action
Intent intent = IntentBuilder.anIntent()
    .withIntentAction(intentAction)
    .build();
```
<!--END_DOCUSAURUS_CODE_TABS-->


### Sending ERC20 Tokens

To send Tokens is required to specify the address of the token, the destination of the transfer, and the amount to transfer. 

<!--DOCUSAURUS_CODE_TABS-->
<!--JavaScript-->
```js
import { IntentBuilder, Intent, ERC20, BigNumber } from "marmojs";

// Test ERC20 token contract 
const token = new ERC2O("0x2f45b6fb2f28a73f110400386da31044b2e953d4");

// Transfer 1 Token (RCN has 18 decimals)
const value = new BigNumber(10).pow(new BigNumber(18));

// Create Intent action
const intentAction = token.transfer("0x7F5EB5bB5cF88cfcEe9613368636f458800e62CB", value);

// Create Intent
const intent = new IntentBuilder()
    .withIntentAction(intentAction)
    .build();
```
<!--Python-->
```python
from marmopy import Intent, ERC20

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
import { Wallet } from "marmojs";

const wallet = new Wallet("<private key here>");

signedIntent = wallet.sign(intent);
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
import { SignedIntent } from "marmojs";

signedIntent.relay();
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
import { Provider, SignedIntent } from "marmojs";

const myProvider = new Provider("<eth node url>", "<relayer url>")

signedIntent.relay(myProvider);
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

# Reading the Status

A receipt with the current execution status is available; it contains information about the current progression of execution and the result of such process.

Intent execution is an asynchronous process; the time range goes from a couple of minutes to several hours to complete the execution of a relayed intent.

## Status pending

If the status is pending, the intent wasn't registered on the blockchain yet. This process can take from a couple of minutes to several hours.

<!--DOCUSAURUS_CODE_TABS-->
<!--JavaScript-->
```js
import { SignedIntent } from "marmojs";

const status = await signedIntent.status();

console.log(status.code); // 'pending'
```
<!--Python-->
```python
from marmopy import SignedIntent

status = signedIntent.status()

print(status["code"]) # 'pending'
```
<!--Java-->
```java
todo
```
<!--END_DOCUSAURUS_CODE_TABS-->

## Status settling & completed

If the status is settling or completed, the intent is registered on the blockchain, and thus it's intended action was executed.

The result of the call can be accessed on the receipt of the status.

<!--DOCUSAURUS_CODE_TABS-->
<!--JavaScript-->
```js
timport { SignedIntent } from "marmojs";

const status = await signedIntent.status();

console.log(status.code); // 'completed'
console.log(status.receipt.block); // 4059291
console.log(status.receipt.success); // true or false
```
<!--Python-->
```python
from marmopy import SignedIntent

status = signedIntent.status()

print(status["code"]) # 'completed'

print(status["receipt"]["block"]) # 4059291
print(status["receipt"]["success"]) # True / False
```
<!--Java-->
```java
todo
```
<!--END_DOCUSAURUS_CODE_TABS-->
> When the status code is settling, it means that the Intent was executed, but it may get reverted by internal workings of the Ethereum network, this status usually last for 8 minutes.
### Receipt success

Transactions in Ethereum can fail and revert all changes performed, and a broad set of reasons can cause this, (asserts, low fees, code errors, etc.)

The receipt contains a `success` flag to know if an Intent execution was successful or not.

<!--DOCUSAURUS_CODE_TABS-->
<!--JavaScript-->
```js
console.log(status.receipt.success); // true or false
```
<!--Python-->
```python
print(status["receipt"]["success"]) # True / False
```
<!--Java-->
```java
todo
```
<!--END_DOCUSAURUS_CODE_TABS-->
