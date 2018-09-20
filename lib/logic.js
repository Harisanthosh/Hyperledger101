/**
 * Track the trade of a commodity from one trader to another
 * @param {org.alphaalloy.biznet.Trade} trade - the trade to be processed
 * @transaction
 */
async function tradeCommodity(trade) {
    trade.commodity.owner = trade.newOwner;
    let assetRegistry = await getAssetRegistry('org.alphaalloy.biznet.Commodity');
    await assetRegistry.update(trade.commodity);
}
