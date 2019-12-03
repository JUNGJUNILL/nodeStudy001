const { Good, Auction, User, sequelize } = require('./models');

module.exports = async () => {
  try {
    const yesterday = new Date();
    yesterday.setMinutes(yesterday.getMinutes() - 1);
    const targets = await Good.findAll({
      where: {
        soldId: null,
        createdAt: { $lte: yesterday }, //이하... 
      },
    });
    targets.forEach(async (target) => {
      const success = await Auction.findOne({
        where: { goodId: target.id },
        order: [['bid', 'DESC']],
      });
      await Good.update({ soldId: success.userId }, { where: { id: target.id } });
      await User.update({
        money: sequelize.literal(`money - ${success.bid}`),
      }, {
        where: { id: success.userId },
      });
    });
  } catch (error) {
    console.error(error);
  }
};