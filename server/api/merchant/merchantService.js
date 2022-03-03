const db = require("../../utils/db");

const ThemeService = require("../theme/themeService");
const DateService = require("../../utils/date.service");

const findOrInitialiseMerchant = async (params) => {
  const { shop, accessToken } = params;
  const {
    publishedThemeId,
    publishedThemeVersion,
    publishedThemeAppSupport,
  } = await ThemeService.getThemeDetails(params);

  const _sql = `INSERT INTO merchants(shop, access_token, pb_theme_id, pb_theme_version, pb_theme_app_support) VALUES(?, ?, ?, ?, ?)`;

  return await db.query(_sql, [
    shop,
    accessToken,
    publishedThemeId,
    publishedThemeVersion,
    publishedThemeAppSupport,
  ]);
};

module.exports = {
  findOrInitialiseMerchant,
};
