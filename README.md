# HalfPace
The new HalfPace

HalfPace Protocol: Scaleable Flash Loan Arbitrage, and ERC-20 HalfPace Token
(PACE) Utilization

Alec Schuerger	Noah Guzik

18 August 2021
V1.1
Abstract
In this whitepaper, we propose a solution for capitalizing on arbitrage opportunities between cryptocurrency exchanges. We will explore the use of flash loans and the implication of utilizing a multi market analysis bot and a dedicated liquidity pool. The main challenge facing this project is, as with most, profitability and scalability. If the bot is unable to execute arbitrage opportunities efficiently and profitably then the project will be a failure. We will go into more detail on the risks of arbitrage using flash loans later on in this paper. Furthermore, if the bot proves to not be profitable then it cannot have any chance to scale in the future. 
The vision of HalfPace is to gain an appreciable advantage in the existing arbitrage market. Currently, only a minute number of individuals utilize the tools necessary to capitalize on arbitrage opportunities. In the absence of software to capitalize on this opportunity fully, it would appear that no single entity occupies a significant portion of the arbitrage market. HalfPace will be the first significant leader in this space by designing software that can cohesively integrate multiple existing technologies. This integration will directly affect its success in gaining majority control of a growing market. 
While HalfPace does intend to front-run the software that will take control of the arbitrage market (therefore limiting individuals' arbitrage opportunities), it does not plan to take the value of the arbitrage market from individuals. This will be further explained when we talk about the value proposition of HalfPace for the individual investor.  In the following sections we will explain more in depth how HalfPace plans to capitalize on the arbitrage market and inevitably control this sector of the cryptocurrency asset class.


Contents
1	Introduction                      
1.1	Cryptocurrency Exchanges 						     
1.2 	Arbitrage / Arbitrage Opportunities					     
1.3 	Flash Loans                                                                                
1.4	Liquidity Pools                                                                            
2	HalfPace Token (PACE)		                                                    
2.1	Tokenomics
	2.2	PACE Stable Growth Theory / Execution of HalfPace Protocol
3	Conclusion                                                                         
	3.1	HalfPace Protocol Roadmap 
	3.2	Socials

1	Introduction

The cryptocurrency asset class is often viewed as the most speculative market in the world by traditional investors. With over 4,000 projects as of early 2021 it is also one of the most innovative industries, both technologically and progressive financially. The DeFi boom has seen many revolutionary projects including Chainlink, SYNTHETIX, Maker, Uniswap and Dai just to name a few. While we cannot get into every project and how they operate, what's important to know is that each one adds and/or captures value in the market through its utility. Financially the DeFi space empowers individual investors to take control of their own finances how they choose with complete transparency. Many of the over 4,000 projects derive their value from wild speculation. However, a vast number of projects provide significant utility to many people worldwide. That is what HalfPace intends to achieve. Not only value for multitudes of investors but a tangible utility that serves a valid purpose alongside other serious projects in the ecosystem. To begin to understand how HalfPace can become a necessary part of the DeFi ecosystem we first have to talk about exchanges.

1.1	Cryptocurrency Exchanges

A cryptocurrency exchange (sometimes referred to as a digital currency exchange), is a business that allows individuals to trade cryptocurrencies for other assets, such as fiat money or other digital currencies. There are two different types of exchanges, Decentralized Exchanges (DEXs) and Centralized Exchanges (CEXs). They differ in many ways worth noting but we won’t get into all of them here as we are primarily focusing on DEXs. The key to HalfPace working with DEXs is that it allows for arbitrage opportunities using flash loans and bodes vastly greater operability within the DeFi ecosystem.  
	We have established what exchanges are and why DEXs are an important part of the equation. There is another crucial detail, which is the fact that exchanges don’t always agree on the exact price of an asset. For us to understand why this happens we need to accept that markets are not truly efficient. This means that the price of an asset can vary slightly across exchanges due to a difference in fees, as well as varying levels of trade volume and liquidity on any given exchange. This discrepancy in price which is happening all the time is what allows for arbitrage.

1.2	Arbitrage / Arbitrage Opportunities

Arbitrage is the simultaneous buying and selling of securities, currency, or commodities in different markets or in derivative forms in order to take advantage of differing prices for the same asset. In this case we are going to be trading cryptocurrency between exchanges to make a profit on the difference between prices. The problem with doing this however is that most of the time the difference in price between exchanges is miniscule. If you were to trade an asset and gain mere cents or dollars it would have likely been easier to stake that asset or day trade instead. This is why flash loans, and how they can operate in the DeFi ecosystem is so important. 
	HalfPace Protocol will utilize a specified wallet (later on referred to as the Arbitrage Wallet) to ensure ready payment of gas fees on the Ethereum Network. 

1.3 Flash Loans

Flash loans use smart contracts, tools enabled by a blockchain that don't let funds change hands unless certain rules are met. The rule is that the borrower must pay back the loan before the transaction ends, otherwise the smart contract reverses the transaction – so it’s like the loan never happened in the first place. The only risk inhibiting profitability and scaling for HalfPace would be consistent failure to capitalize on the execution of arbitrage. In which case the Ethereum gas fees would still apply however all funds would be returned to the Liquidity Pool with no profit. Flash loans require zero collateral to execute making them very powerful with little risk. They are also instantaneous, meaning they execute within one block and must be paid back instantly. In the best case scenario, the loan is paid back with extra profit resulting from the difference in exchange prices.

1.4	Liquidity Pools

Liquidity pools provide the capital for flash loans, liquidity pools are pools of tokens that are locked into a smart contract. They facilitate efficient asset trading while allowing investors to earn a return on their holdings. A liquidity pool is essentially a market maker which provides liquidity in the market that prevents major price swings. A single liquidity pool contains two tokens; each pool creates a new market for each of those tokens. The DAI/ETH pair is what this protocol will be utilizing.

2	HalfPace Token (PACE)

The HalfPace Token (PACE) derives its value directly from successful arbitrage executions. Primarily, PACE will reflect the value of the HalfPace Protocol. If the protocol scales as expected the value of PACE should see stable growth over time. To explain how this theoretically works we will illustrate the process down below in figure 2-1. First we will start with the basic tokenomics.

2.1	Tokenomics

The protocol's success depends wholly on the scalability of the network. With this in mind, it is necessary to allocate a portion of PACE tokens initially to the Arbitrage Wallet which will be used to fund the implementation of further bots into the network. Below is a list of basic tokenomics for HalfPace Token:

Max Supply/Total Supply: 50 Million (Circulating Supply: 20 Million) 
Locked in Liquidity PACE/ETH: 20 Million 
Arbitrage Wallet Scaling Reserve: 10 Million

2.2	PACE Stable Growth Theory / Execution of HalfPace Protocol

As a result of the supply being fixed at 50 Million Tokens the currency is inherently deflationary. Therefore, as the network scales to accommodate vastly more bots, and in turn generate more profit, there should be a mathematically verifiable “bottom” to the price. In this model the price should ultimately maintain a guaranteed positive growth on the macro scale. The logic behind the theoretical “bottom” is this; the network will start off generating small amounts of revenue from arbitrage in the beginning, without taking into account token trading price, the generated revenue will be allocated to two places. The first being the Arbitrage Wallet which will receive Ether previously converted from Dai acquired in the arbitrage. This will be used to continue running the bot by paying gas fees. The second part of the growth model is the buying of PACE using Dai. Specifically the Dai acquired in the arbitrage will be used to acquire PACE at current market prices as well as the proportionate amount of Ether. Then, the PACE and Ether acquired will be allocated to the dedicated liquidity pool to further support minimization of price fluctuations in the market and increase liquidity for the token.
	With all of that in mind, the theory is that with the liquidity pool helping to stabilize the price the arbitrage bot will be able to readily purchase PACE when necessary. This will allow the token to continually be influenced by the success of the arbitrage bot. In turn, as the network scales and profitability increases the long term trend for PACE would be positive. However, PACE will always be subject to market conditions, this would not be as apparent if the price stayed low and was only purchased with the arbitrage bot. When the project gains attention and attracts individuals who invest the price will inevitably be subject to speculation, still the long term trend would undoubtedly stay positive. Below is a diagram illustrating how this process will work. Note that if the process fails the gas will be deducted without profit and the transaction will not take place.


Figure 2-1


Figure 2-2*
Source: https://cryptomarketpool.com/flash-loan-arbitrage-on-uniswap-and-sushiswap/

3	Conclusion

HalfPace Protocol is currently under development, this white paper is the first iteration of what Halfpace can be. A second white paper will be published in the initial stages of the HalfPace Protocol 2.0 upgrades, which does not yet have a set timeframe. To stay up to date check out our socials listed under the roadmap. The 2.0 white paper will go into further detail and provide a better picture of the future for HalfPace Protocol. Below is a roadmap for the project going forward.

3.1 HalfPace Protocol Roadmap


3.2	Socials

To find the most recent development updates for HalfPace you can follow the links below:

Official Website: https://www.halfpace.info 

Telegram: https://t.me/joinchat/fFPPzTk4Rl4zZTMx 

Reddit: https://www.reddit.com/r/HalfPace/ 

