const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on("task", {
        promptLLLM(prompt) {
          // ollama.chat({ model: 'llama3.1', messages: [{ role: 'user', content: prompt }] })
        },
      });
    },
  },
});
