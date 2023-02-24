
# Onboarding Guide to the Gaia-X Web3 Ecosystem

This document serves as an onboarding guide to participate In the Gaia-X Web3 ecosystem. 

  

## 1. Participant Self-Description
To create a trustworthy, secure and transparent data infrastructure, we need a clear identification process for participants.

A participant is, according to the [Gaia-X Trust Framework](https://gaia-x.gitlab.io/policy-rules-committee/trust-framework/), a legal person, which is identified, onboarded and has a Gaia-X Self-Description. Therefore, to ensure trust in the Gaia-X Web3 ecosystem, we must create a Gaia-X compliant participant Self-Description for your company first.


**We need the following information to create a participant Self-Description for your company:**

1. Your company legal name.

2. A valid registration number (local, EUID, EURI, vatID or leiCODE). The list of valid entity registration number types are described in more detail under [Chapter 5.2.1](https://gaia-x.gitlab.io/policy-rules-committee/trust-framework/participant/) in the Trust Framework.

3. Your headquarter address: Your street, your postal code and your ISO 3166 code.

4. The same information for your legal address. Please let us know if the information are the same.

5. Both information above for your parent company, if you should have one.


Here is an example for [deltaDAO](https://delta-dao.com/.well-known/participantdeltadao.json), according to the Trust Framework.

**Please send the information to onboarding@delta-dao.com or thomas@delta-dao.com. We are happy to assist!**
We will create a wallet and thus a blockchainID for you and explain in the course of the document how you can set up the wallet. 
If you already have a wallet, you can also give us your public address and we will send you test tokens as soon as the Self-Description is created.

With the first Gaia-X compliant Self-Description your institution can participate in the Gaia-X Web3 ecosystem "Pontus-X" and Gaia-X edge network "GEN-X".



## 2. How do I join?

After we have signed and confirmed your Self-Description as a Trust Service Provider of the test ecosystem, we can now equip you with a **private key and a public address** that

- allow your institution to consume service offerings in Pontus-X

- publish service offerings and implement use cases in Pontus-X

- allow you to test drive the federation services of the ecosystem

- identify your institution in the test network as participant of Gaia-X

Your public address, derived from your public and private keys, is listed as your Blockchain-Account-ID in your Self-Description.

Using your Self-Descriptions this identity is connected to your institution and can be used to identify a Gaia-X participant that is providing or consuming services. It creates the foundation of trust.

## 3. How to get started?

To get started as a participant in the ecosystem you need to take control over your private key and insert it in a wallet.

**You will be able to retrieve your private key for the next 21 days from the email-link we have sent you.**

Your private key will look like this (just an example!):

*_do not use_!0d9619d1702c7a4ff89ecf3720132812f0d124ca503a61c5f3a60e0451236365_do not use!_*

Some important notes before you continue:

- This private key **controls your identity** in the ecosystem, creates a secure offline backup.

-  **Do not share it with anybody outside your organization** , don't store it in the cloud.

- We also have control over this private key for testing - to assist you during your first steps in the ecosystem \'96 so **do not use it in any production system** under any circumstances.

- If you lose control over your private key inform us so that the GEN-X federators can blacklist it for the network.

- You are **not allowed to store any personal information on the network** , i.e., names or e-mail addresses when publishing own service offerings on the network.

In this ecosystem we use a Web3 wallet like **MetaMask**. It allows you to sign test transactions and test contracts with other ecosystem participants.

MetaMask is a widely used Web3 browser and mobile wallet solution to store your keys and sign transactions with more than 10 million monthly active users (MAU) that is considered a secure "hot" wallet.

Step 1: The onboarding guide on [https://portal.minimal-gaia-x.eu/](https://portal.minimal-gaia-x.eu/) will take you through the process on how to install MetaMask and to connect to the GEN-X network.

Best you start here on our website or directly here: [https://metamask.io/download/](https://metamask.io/download/)
![Picture 1](https://gitlab.com/web3-ecosystem/gen-x-network/-/raw/main/docs/assets/community%20onboarding/1.png)

*Hint: You do not need to use the faucet at the end of the onboarding guide as we already equipped your wallet with some test tokens that allow you interactions in the network.*

If you have set up your local MetaMask in your browser (Chromium-based or Firefox) and secured it with a password, you can import the private key we shared with you through the "import account" feature.

![Picture 2](https://gitlab.com/web3-ecosystem/gen-x-network/-/raw/main/docs/assets/community%20onboarding/2.png)

![Picture 3](https://gitlab.com/web3-ecosystem/gen-x-network/-/raw/main/docs/assets/community%20onboarding/3.png)

Once you have imported the account, you can select it through the icon in the upper right corner.

You can give the account a custom name instead of "Account 2" by opening the menu indicated with the three dots and opening "Account details"

![Picture 4](https://gitlab.com/web3-ecosystem/gen-x-network/-/raw/main/docs/assets/community%20onboarding/5.png)

When you click the pen icon you can add a custom name for this account.

![6.png](https://gitlab.com/web3-ecosystem/gen-x-network/-/raw/main/docs/assets/community%20onboarding/6.png)

You will be able to confirm your selected account by checking the public address of this account matching the public address of your Self-Description. Simply press the middle field displaying the address and it will be copied to your clipboard.

![7.png](https://gitlab.com/web3-ecosystem/gen-x-network/-/raw/main/docs/assets/community%20onboarding/7.png)

Furthermore, you need to select the right network "GEN-X testnet" by selecting it from the network field at the top of the wallet.\

This only works if you have added the network as part of step 3 the onboarding guide on [https://portal.minimal-gaia-x.eu/](https://portal.minimal-gaia-x.eu/) by approving and allowing the site to add this network to your wallet.

![8.png](https://gitlab.com/web3-ecosystem/gen-x-network/-/raw/main/docs/assets/community%20onboarding/8.png)

Once you have added the network, selected the right address, and connected to the portal you can refresh the website and you will appear as logged in. You can add the GEN-X network manually under "settings" and "networks". For this route you need to following configuration:

- Network name: GEN-X

- New RPC URL: [https://rpc.genx.minimal-gaia-x.eu](https://rpc.genx.minimal-gaia-x.eu/)\

- Chain ID: 100

- Currency Symbol: GX

- Block Explorer URL: [https://explorer.genx.minimal-gaia-x.eu/](https://explorer.genx.minimal-gaia-x.eu/)


![Picture 9](https://gitlab.com/web3-ecosystem/gen-x-network/-/raw/main/docs/assets/community%20onboarding/9.png)

First indicator is the portal showing your public address and GEN-X network selection now.
![Picture 10](https://gitlab.com/web3-ecosystem/gen-x-network/-/raw/main/docs/assets/community%20onboarding/10.png)

The wallet will also indicate this with a green dot.

![11.png](https://gitlab.com/web3-ecosystem/gen-x-network/-/raw/main/docs/assets/community%20onboarding/11.png)

**Well done, the setup is completed. You are ready to go.**

You should now see 0.1 GX in your wallet, enough for hundreds of transactions in the network.

![12.png](https://gitlab.com/web3-ecosystem/gen-x-network/-/raw/main/docs/assets/community%20onboarding/12.png)
Currently we used test Ocean Token to pay for services, these will be enhanced by EURO and USD next. But if you'd like to see your current balance of test tokens you can add the Token to your MetaMask through our portal [https://portal.minimal-gaia-x.eu/](https://portal.minimal-gaia-x.eu/)

Just open the top right menu and click "add ocean" to make the current balance visible in your MetaMask.

![13.png](https://gitlab.com/web3-ecosystem/gen-x-network/-/raw/main/docs/assets/community%20onboarding/13.png)![14.png](https://gitlab.com/web3-ecosystem/gen-x-network/-/raw/main/docs/assets/community%20onboarding/14.png) 

Once you confirm the dialogue it will appear in your wallet.

![15.png](https://gitlab.com/web3-ecosystem/gen-x-network/-/raw/main/docs/assets/community%20onboarding/15.png)

From here on you will be able to consume service offerings from the market. For example, from EuProGigant: [https://euprogigant.portal.minimal-gaia-x.eu/asset/did:op:0E8cEa497d897f8D18283B86b20eD6416281dC73](https://euprogigant.portal.minimal-gaia-x.eu/asset/did:op:0E8cEa497d897f8D18283B86b20eD6416281dC73)\


Just select the software service offering you would like to run on the data service offering by selecting it on the right-hand side.

![16.png](https://gitlab.com/web3-ecosystem/gen-x-network/-/raw/main/docs/assets/community%20onboarding/16.png)

If you sign the transactions that now appear you will sign the test contract with the data provider and the software provider and run the analysis on the Compute-to-Data environment of the data owner, here Technical University of Darmstadt. The raw data and IP will never be submitted or compromised in any way.

After the final signature (5-6 Transactions) the computation will start.

![18.png](https://gitlab.com/web3-ecosystem/gen-x-network/-/raw/main/docs/assets/community%20onboarding/18.png)

You will be able to retrieve the results under "your Profile" -\\> "Compute Jobs" once the job has been finished. [https://euprogigant.portal.minimal-gaia-x.eu/profile](https://euprogigant.portal.minimal-gaia-x.eu/profile)\

![19](https://gitlab.com/web3-ecosystem/gen-x-network/-/raw/main/docs/assets/community%20onboarding/19.png)

If you click on job details, you can retrieve the job output and download it from there.
![20](https://gitlab.com/web3-ecosystem/gen-x-network/-/raw/main/docs/assets/community%20onboarding/20.png)


**Well done, you just executed your first consumption of a service offering in the test network.**

### Thanks for your contribution to Gaia-X, the interest in our Gaia-X Web3 ecosystem and the GEN-X network.

If you need help with anything, just let us know, we are happy to assist you. Just contact [thomas@delta-dao.com](mailto:thomas@delta-dao.com) and [kai@delta-dao.com](mailto:kai@delta-dao.com) if you have questions or need help.


If you want to get started with some additional quick links to the ecosystem and additional resources, please follow [https://docs.genx.minimal-gaia-x.eu/docs/quick\\_links](https://docs.genx.minimal-gaia-x.eu/docs/quick_links)
