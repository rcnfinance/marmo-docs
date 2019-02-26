---
id: api_intent_action
title: Intent action reference
---

Intent actions are abstract representations of transactions, are meant to avoid manually constructing the "to, data and value" of a standard Ethereum transaction.

## Contract

If the Intent is meant to interact with a contract, the process to create this intent involves defining a contract interface. 

### Standard contracts

The Marmo SDKs come with the most common contract interface already pre-defined. It includes ETH, ERC20, ERC721, and some others.

<!--DOCUSAURUS_CODE_TABS-->
<!--Python-->
```python
from marmopy import ETH, ERC20
```
<!--JavaScript-->
```js
import { ETH, ERC20 } from "marmojs";
```
<!--Java-->
```java
todo
```
<!--END_DOCUSAURUS_CODE_TABS-->

### Custom contract interface

To create an `Intent` calling a contract that uses a custom interface, it is required to specify such interface to the Marmo SDK

<!--DOCUSAURUS_CODE_TABS-->
<!--Python-->
```python
from marmopy import Action

class MyContract:
    def __init__(self, address):
        self.address = address

    @Action
    def setOwner(self, owner='address'): return 'bool'

my_contract = MyContract("<contract address>")

# Create setOwner intent action
my_contract.setOwner("<new owner>")
```

#### Using the contract ABI

```python
from marmopy import Contract

abi = """
[
	{
		"constant": false,
		"inputs": [
			{
				"name": "owner",
				"type": "address"
			}
		],
		"name": "setOwner",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	}
]
"""

MyContract = Contract(abi)
my_contract = MyContract("<contract address>")

# Create setOwner intent action
my_contract.setOwner("<new owner>")
```
<!--JavaScript-->
```js
todo
```
<!--Java-->
```java
todo
```
<!--END_DOCUSAURUS_CODE_TABS-->

## Create intent action

Before interacting with a Contract, it is required to instantiate it with the address of the contract on the blockchain, after creating the instance, all methods of the contract can be called, and they will return an `intent action`.

<!--DOCUSAURUS_CODE_TABS-->
<!--Python-->
```python
from marmopy import ERC20

dai_token = ERC20("0x89d24a6b4ccb1b6faa2625fe562bdd9a23260359")

# Create intent action transfer 1 DAI
intent_action = dai_token.transfer("<destination>", 10 ** 18)
```
<!--JavaScript-->
```js
import { ETH, ERC20 } from "marmojs";
```
<!--Java-->
```java
todo
```
<!--END_DOCUSAURUS_CODE_TABS-->

### Intent action send Ether

Sending Ethereum is a special kind of `intent action`, because it does not require to instantiate any contract.

<!--DOCUSAURUS_CODE_TABS-->
<!--Python-->
```python
from marmopy import ETH

# Create intent action transfer 5 ETH
intent_action = ETH.transfer("<destination>", 10 ** 18)
```
<!--JavaScript-->
```js
import { ETH, ERC20 } from "marmojs";
```
<!--Java-->
```java
todo
```
<!--END_DOCUSAURUS_CODE_TABS-->
