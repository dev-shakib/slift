import Shopify from "@shopify/shopify-api";

const db = require("../../utils/db");

const getThemeVersion = async (params) => {
  // Specify the name of the template the app will integrate with
  const APP_BLOCK_TEMPLATES = ["product", "collection", "index"];

  // Retrieve a session token from an authenticated request
  const client = new Shopify.Clients.Rest(params.shop, params.accessToken);

  // Use `client.get` to request a list of themes on the shop
  const {
    body: { themes },
  } = await client.get({
    path: "themes",
  });

  // Find the published theme
  const publishedTheme = themes.find((theme) => theme.role === "main");

  // Retrieve a list of assets in the published theme
  const {
    body: { assets },
  } = await client.get({
    path: `themes/${publishedTheme.id}/assets`,
  });

  // Check if JSON template files exist for the template specified in APP_BLOCK_TEMPLATES
  const templateJSONFiles = assets.filter((file) => {
    return APP_BLOCK_TEMPLATES.some(
      (template) => file.key === `templates/${template}.json`
    );
  });

  if (templateJSONFiles.length === APP_BLOCK_TEMPLATES.length) {
    console.log("All desired templates support sections everywhere!");
  } else if (templateJSONFiles.length) {
    console.log(
      "Only some of the desired templates support sections everywhere."
    );
  }

  // Retrieve the body of JSON templates and find what section is set as `main`
  const templateMainSections = (
    await Promise.all(
      templateJSONFiles.map(async (file, index) => {
        let acceptsAppBlock = false;

        const {
          body: { asset },
        } = await client.get({
          path: `themes/${publishedTheme.id}/assets`,
          query: { "asset[key]": file.key },
        });

        const json = JSON.parse(asset.value);
        const main = Object.entries(json.sections).find(
          ([id, section]) => id === "main" || section.type.startsWith("main-")
        );
        if (main) {
          return assets.find(
            (file) => file.key === `sections/${main[1].type}.liquid`
          );
        }
      })
    )
  ).filter((value) => value);

  // Request the content of each section and check if it has a schema that contains a
  // block of type '@app'
  const sectionsWithAppBlock = (
    await Promise.all(
      templateMainSections.map(async (file, index) => {
        let acceptsAppBlock = false;

        const {
          body: { asset },
        } = await client.get({
          path: `themes/${publishedTheme.id}/assets`,
          query: { "asset[key]": file.key },
        });

        const match = asset.value.match(
          /\{\%\s+schema\s+\%\}([\s\S]*?)\{\%\s+endschema\s+\%\}/m
        );
        const schema = JSON.parse(match[1]);

        if (schema && schema.blocks) {
          acceptsAppBlock = schema.blocks.some((b) => b.type === "@app");
        }

        return acceptsAppBlock ? file : null;
      })
    )
  ).filter((value) => value);

  if (sectionsWithAppBlock.length) {
    return `2.0`;
  } else {
    return `1.0`;
  }
};

module.exports = {
  getThemeVersion,
};
