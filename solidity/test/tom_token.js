const TomToken = artifacts.require("TomToken");

contract("TomToken", function (accounts) {
  it("symbol is correct", async function () {
    const instance = await TomToken.deployed();
    const symbol = await instance.symbol();
    assert.equal(symbol, "TOM");
    return assert.isTrue(true);
  });

  it("should transfer 510 tokens from 10,000 tokens", function () {
    var token;
    return TomToken.deployed().then(function (instance) {
      token = instance;
      return token.transfer(accounts[1], 510);
    }).then(function () {
      return token.balanceOf.call(accounts[0]);
    }).then(function (result) {
      assert.equal(result.toNumber(), 9490, "accounts[0] balance is wrong");
      return token.balanceOf.call(accounts[1]);
    }).then(function (result) {
      assert.equal(result.toNumber(), 510, "accounts[1] balance is wrong");
    })
  });

});