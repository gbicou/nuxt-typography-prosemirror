import { describe, it, expect } from "vitest";
import { setup, $fetch } from "@nuxt/test-utils";
import { Window } from "happy-dom";
import { fileURLToPath } from "node:url";

describe("example", async () => {
  await setup({
    rootDir: fileURLToPath(new URL("../", import.meta.url)),
  });

  it("render nodes", async () => {
    const html = await $fetch("/example");

    const window = new Window({
      settings: {
        disableJavaScriptFileLoading: true,
        disableJavaScriptEvaluation: true,
        disableCSSFileLoading: true,
        disableIframePageLoading: true,
        enableFileSystemHttpRequests: false,
      },
    });
    const document = window.document;
    document.body.innerHTML = html;

    const italic = document.querySelector("[data-testid='italic']");
    expect(italic.tagName).toBe("EM");
    expect(italic.textContent).toBe("basic");

    const bold = document.querySelector("[data-testid='bold']");
    expect(bold.tagName).toBe("STRONG");
    expect(bold.textContent).toBe("tiptap");
  });
});
