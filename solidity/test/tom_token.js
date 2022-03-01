const TomToken = artifacts.require("TomToken");

contract("TomToken", function (/* TomToken */) {
  it("symbol is correct", async function () {
    const instance = await TomToken.deployed();
    const symbol = await instance.symbol();
    assert.equal(symbol, "TOM");
    return assert.isTrue(true);
  });

});
