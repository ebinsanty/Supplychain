var ItemManager = artifacts.require("./ItemManger.sol");

module.exports = function(deployer) {
  deployer.deploy(ItemManager);
};
