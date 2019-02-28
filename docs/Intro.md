---
id: intro
title: Introduction
---

# What is Marmo?

Marmo is an open-source SDK that simplifies interactions with the Ethereum network by abstracting some of its core characteristics while maintaining trustlessness and security.

# Characteristics

Marmo includes the following characteristics:

## Full Compatibility

Since Marmo Wallets can perform the same interactions as standard Ethereum wallets, the SDK works with almost every existing type of Ethereum smart contract without requiring any ad-hoc adjustements. This enables developers to carry out a fast and seamless integration with any existing Ethereum project.

## Modularity and Scalability

Marmo open-source Contracts and Wallets are designed to be alterable and upgradeable in an opt-in way, giving experienced developers the ability to create custom functionalities and modules for the SDK.

## Multiple Libraries

The Marmo ecosystem includes libraries in [Python](https://github.com/ripio/marmopy-sdk), [Java](https://github.com/ripio/marmoj-sdk), and [Javascript](https://github.com/ripio/marmojs-sdk). While these libraries are not identical, they provide the same set of Contracts, Wallets and Relayers.

# Features

Marmo delivers the following features:

## ETH-less Transactions

The SDK allows Ethereum addresses to execute transactions without requiring funds in Ether (ETH) or any token. This is possible thanks to the implementation of a Relayer, a service that broadcasts Intents to the Ethereum network and pays the required fees in the process.

A Relayer can be easily self-hosted using the [Marmo reference relayer](#).

## Automatic Gas Calculations

The Marmo Relayer is also responsible for handling Gas Price and Gas Limits calculations, optimizing their values to respond to changes in Gas markets and making their execution more reliable and efficient.

## Nonce-flexible Transactions

Creating multiple transactions using the same address on the Ethereum network requires their signer to specify the order in which they must be executed, using Nonces. This is not always relevant for the signer and may cause the process to be unnecessarily complex.

Marmo replaces the Ethereum nonce system by a dependencies scheme, in which any given Intent may be dependent on one or more other Intents, or have no dependencies at all. This makes it possible to execute them in any order or without any in particular.

## Expirable Transactions

Marmo enables the creation of transactions with expirations dates, which will always get executed within a predefined time frame. This allows to sign intents while having the certainty that they will not be relayed once that time frame expires.
