const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on("task", {
        promptLLLM(prompt) {
          // ollama.chat({ model: 'llama3.1', messages: [{ role: 'user', content: prompt }] })
        }
      });
    },
  },
});
