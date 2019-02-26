---
id: intro
title: What is Marmo?
---

Marmo is a toolkit to simplify the integration with Ethereum based projects; it accomplishes this by abstracting some core characteristics of the Ethereum network while maintaining decentralization and security.

## Eth-less transactions

Marmo allows Ethereum addresses to execute transactions without requiring funds in Ether or any other token; this is accomplished by using a relayer. a service responsible for broadcasting Intents, paying the gas in the process.

A Relayer can be easily self-hosted using the [Marmo reference relayer](#).

## Simple gas cost and limits

The Marmo relayer is responsible for choosing the best values for gas price and gas limit, and it can also respond to changes in the gas price, by re-broadcasting an Intent with the optimal gas price, making their execution more reliable.

## Non-explicit order for transactions

When creating transactions using the same address in the Ethereum network, the signer has to specify the order of the actions explicitly; this is not always neccesary and may be the cause of added complexity.

Marmo replaces the Ethereum nonce by a dependencies scheme, where an Intent may be dependent on another Intent, multiples intents or have no dependencies at all.

## Expirable transactions

Marmo Intents can be created with an expiration date; this allows to sign intents while having certainty that those intents cant be relayed in the far future.

## Plug and play with existing contracts

Marmo does not require any change on behalf of the contract, and it can work with almost any pre-existing contract, because Marmo creates wallets that can perform the same calls and interactions of a classic Ethereum wallet.

## Modular, scalable and decentralized

Marmo contracts and wallets are designed to be upgraded and improved in an opt-in and decentralized scheme, giving experienced developers the ability to develop their custom functionality and modules for Marmo.

## Multiple platforms

The Marmo ecosystem has libraries ready to use in [Python](https://github.com/ripio/marmopy-sdk), [Java](https://github.com/ripio/marmoj-sdk), and [Javascript](https://github.com/ripio/marmojs-sdk), with many more to come! 

Marmo Libraries are not identical in all platforms, but they follow similar patterns and can make use of the same set of contracts, wallet, and relayers.

