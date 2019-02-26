---
id: api_signed_intent
title: Signed Intent reference
---

A SignedIntent is the complete definition of Intent in the Marmo ecosystem, it has a unique ID and can be attached as a dependency of other intents.

## Sign an Intent

The last step in building a valid Intent is Signing; it generates an object containing the Intent, ID, wallet, and signature.

<!--DOCUSAURUS_CODE_TABS-->
<!--Python-->
```python
from marmopy import Wallet

wallet = Wallet("<your private key here>")

signed_intent = wallet.sign(intent)
```
<!--JavaScript-->
```js
import { Wallet } from "marmojs";

const wallet = new Wallet("<private key here>");

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

### Signed Intent ID

The ID of a Signed Intent is generated using the address of the wallet, the address of the Marmo implementation and the data of the Intent.

```
id = keccak(wallet, implementation, data)
```

> An intent only has an ID when paired with a wallet, for that reason the ID is only available in a signed intent object.

<!--DOCUSAURUS_CODE_TABS-->
<!--Python-->
```python
signed_intent = wallet.sign(intent)
signer_intent.id
```
<!--JavaScript-->
```js
signedIntent = wallet.sign(intent)
signedIntent.id
```
<!--Java-->
```java
todo
```
<!--END_DOCUSAURUS_CODE_TABS-->

### Relay

To execute a SignedIntent it has to be sent to a relayer; the relayer wraps the intent in a transaction calling the wallet contract.

<!--DOCUSAURUS_CODE_TABS-->
<!--Python-->
```python
signed_intent = wallet.sign(intent)
signer_intent.relay()
```
<!--JavaScript-->
```js
signedIntent = wallet.sign(intent)
signedIntent.relay();
```
<!--Java-->
```java
todo
```
<!--END_DOCUSAURUS_CODE_TABS-->

> A provider has to be provided or defined as global, is neither is fulfilled the operation will fail.

> The same Signed intent can be relayed to multiple relayers, with the only risk being the duplicated operational cost.

#### Using a custom provider

<!--DOCUSAURUS_CODE_TABS-->
<!--Python-->
```python
signed_intent = wallet.sign(intent)
signer_intent.relay(provider)
```
<!--JavaScript-->
```js
signedIntent = wallet.sign(intent)
signedIntent.relay(provider);
```
<!--Java-->
```java
todo
```
<!--END_DOCUSAURUS_CODE_TABS-->

### to JSON

The relayer exposes a `POST \relay` endpoint that accepts a JSON Object with the following scheme.

```json
{
    "id":"0x202bc993c44ad86bbf1d731fae03197296acaf34f65515fe8d412e8892afc6a5",
    "wallet":"0x925643c521ea663eeba00a1fa116b4e21e971ed3",
    "signer":"0x7E5F4552091A69125d5DfCb7b8C2659029395Bdf",
    "signature":{
        "r":"0xa10b5e5740d990962ea8d8c139eaae9ecacf22214340e09355a278cdf1146a35",
        "s":"0x73c757baeb7202eb00f8f603e12bf262333923bf846cc1d86bb7d24da6d50a3e",
        "v":"0x1b"
    },
    "intent":{
        "implementation":"0x2101d39973a6a49061934e40f21db638874b39da",
        "data":"0x00000000000000000000000000000000000000000000000000000000000001000000000000000000000000002f45b6fb2f28a73f110400386da31044b2e953d400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000120ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff000000000000000000000000000000000000000000000000000000005e45bca9000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000044a9059cbb000000000000000000000000a6693e041aafe9b9d722338ca9f8a6e7746d7148000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "detail":{
            "dependency":"0x",
            "to":"0x2f45b6fb2f28a73f110400386da31044b2e953d4",
            "value":0,
            "data":"0xa9059cbb000000000000000000000000a6693e041aafe9b9d722338ca9f8a6e7746d71480000000000000000000000000000000000000000000000000000000000000000",
            "maxGasPrice":115792089237316195423570985008687907853269984665640564039457584007913129639935,
            "maxGasLimit":115792089237316195423570985008687907853269984665640564039457584007913129639935,
            "salt":"0x0000000000000000000000000000000000000000000000000000000000000000",
            "expiration":1581628585
        }
    }
}
```

