---
id: intents_transactions
title: Intents and Transactions
---

Transactions that take place within Marmo are called Intents. Every Intent represents a signer's intention to broadcast a transaction to the Ethereum network. Intents get executed (effectively becoming Transactions) by the Relayer, which nevertheless has little to no control over their content. This characteristic guarantees the system's trustlessness and security. 

# Intents

Intents can perform a wide array of operations, ranging from sending cryptocurrency to interacting with complex services built on the Ethereum network.

## Intent Actions

Every Intent includes a series of Intent Actions, which are representations of the operations the signer wants to perform. The Intent Actions do not include information on how those operations are to be executed, allowing the Relayer to implement the most efficient strategy each time.

```
Intent Action: Do X
Intent: Do [Intent action] before [time]
```
# Sending Cryptocurrency

Intents can be used to send cryptocurrency from one Wallet to another (including standard Ethereum Wallets not related to Marmo).

## Sending ETH

Ether (ETH) is the cryptocurrency that powers the Ethereum network. Making ETH transactions is the most basic example of an Intent.

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
import network.marmoj.builder.IntentBuilder;
import network.marmoj.model.data.ETH;

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

## Sending ERC20 Tokens

ERC-20 Tokens are cryptocurrencies created and used on the Ethereum network. In order to send one of these Tokens it is necessary to specify the Token's address, the transfer's destination and its amount. 

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
import network.marmoj.builder.IntentBuilder;
import network.marmoj.model.data.ERC20;

// Test ERC20 token contract
ERC20 token = new ERC20("0x6B0F919A5d450Fa5e6283Ff6178dC1FCd195FD2A");

// Transfer 1 Token (RCN has 18 decimals)
IntentAction intentAction = token.transfer(
    new Address("0x7F5EB5bB5cF88cfcEe9613368636f458800e62CB"),
    new Uint256(BigInteger.TEN.pow(18))
);

// Create intent from intent action
Intent intent = IntentBuilder.anIntent()
    .withIntentAction(intentAction)
    .build();
```
<!--END_DOCUSAURUS_CODE_TABS-->

# Signing an Intent

Before the Relayer can process an Intent (or "relay" it) the Wallet which created it must attach its signature to it, transforming it into a Signed Intent.

Signed Intents contain an unique ID and information about the Wallet that signed them.

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
import network.marmoj.builder.SignedIntentBuilder;

SignedIntent signedIntent = SignedIntentBuilder.aSignedIntent()
    .withIntent(intent)
    .withWallet(wallet)
    .build();
```
<!--END_DOCUSAURUS_CODE_TABS-->

> The same Intent signed by different Wallets will result in different IDs.

# Relaying an Intent

Once an Intent is signed it is ready to be sent to the Relayer, which will broadcast it to the Ethereum network and pay the necessary ammount of ETH to complete the operation.

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
import network.marmoj.builder.SignedIntentBuilder;
import network.marmoj.builder.IntentBuilder;
import network.marmoj.model.Wallet;

SignedIntent signedIntent = SignedIntentBuilder.aSignedIntent()
    .withIntent(intent)
    .withWallet(wallet)
    .build();
signedIntent.relay()
```
<!--END_DOCUSAURUS_CODE_TABS-->

## Custom Relayer Provider

The SDK is configured to use a default provider to obtain the Relayer, but it is also possible to select a custom provider using the `relay()` function.

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
import network.marmoj.builder.SignedIntentBuilder;
import network.marmoj.builder.IntentBuilder;
import network.marmoj.model.Wallet;

SignedIntent signedIntent = SignedIntentBuilder.aSignedIntent()
    .withIntent(intent)
    .withWallet(wallet)
    .build();
    
Provider provider = new Provider(
      "<relayer here>",
      "<node here>"
  );
signedIntent.relay(provider);
```
<!--END_DOCUSAURUS_CODE_TABS-->

# Intent Status

Intent execution is an asynchronous process that can take from a couple of minutes to several hours to complete. To allow clients to oversee it, Marmo offers receipts on its execution status which include information about the process' progress and results.

## Status "Pending"

If the receipt shows the status as "Pending", it means that the Intent has not been registered on the blockchain yet.

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
import network.marmoj.builder.SignedIntentBuilder;

Status status = signedIntent.getStatus();

System.out.println(status.getCode()); // 'pending'
```
<!--END_DOCUSAURUS_CODE_TABS-->

## Status "Settling" or "Completed"

If the receipt shows the status as "Settling" or "Completed", it means that the Intent has been registered on the blockchain and that its intended action has been executed. The executed Intent's result can also be accessed on the status receipt.

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
import network.marmoj.builder.SignedIntentBuilder;

Status status = signedIntent.getStatus();

System.out.println(status.getCode()); // 'completed'
System.out.println(status.getReceipt().getBlock()); // '4059291'
System.out.println(status.getReceipt().getSuccess()); // true or false
```
<!--END_DOCUSAURUS_CODE_TABS-->
> While a "Settling" status means that the Intent was executed, this may get reverted by the internal workings of the Ethereum network. This status usually lasts up to 8 minutes.

## Receipt Success

The receipt contains a `success` flag that indicates whether the Intent execution was successful or not.

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
System.out.println(status.getReceipt().getSuccess()); // true or false
```
<!--END_DOCUSAURUS_CODE_TABS-->
