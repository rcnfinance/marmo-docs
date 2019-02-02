---
id: api_signed_intent
title: Signed Intent reference
---

A SignedIntent is the complete definition of Intent in the Marmo ecosystem, it has a unique ID and can be attached as a dependency of other intents.

## Sign an Intent

The last step in building a valid Intent is Signing; this process generates the ID alongside the ECC signature.

<!--DOCUSAURUS_CODE_TABS-->
<!--JavaScript-->
```js
todo
```
<!--Python-->
```python
from marmopy import Wallet

wallet = Wallet("<your private key here>")

signed_intent = wallet.sign(intent)
```
<!--Java-->
```java
todo
```
<!--END_DOCUSAURUS_CODE_TABS-->

### Signed Intent ID

