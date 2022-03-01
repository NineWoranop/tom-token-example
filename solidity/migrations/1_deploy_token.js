const tomToken = artifacts.require("TomToken");

module.exports = function(deployer) {
    deployer.deploy(tomToken, 10000, 18);
};