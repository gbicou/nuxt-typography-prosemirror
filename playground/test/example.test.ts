import { describe, it, expect } from "vitest";
import { setup, createPage } from "@nuxt/test-utils";
import { fileURLToPath } from "node:url";

describe("example", async () => {
  await setup({
    rootDir: fileURLToPath(new URL("../", import.meta.url)),
    browser: true,
  });

  it("render nodes", async () => {
    const page = await createPage("/example", {});

    const italic = page.getByTestId("italic");
    expect(await italic.evaluate((element) => element.tagName)).toBe("EM");
    expect(await italic.textContent()).toBe("basic");

    const bold = page.getByTestId("bold");
    expect(await bold.evaluate((element) => element.tagName)).toBe("STRONG");
    expect(await bold.textContent()).toBe("tiptap");
  }, 60_000);
});
