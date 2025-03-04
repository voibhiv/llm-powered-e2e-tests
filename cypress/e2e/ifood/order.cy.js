const { default: axios } = require("axios");
const { createProxyMiddleware } = require("http-proxy-middleware");

describe("Pede comida no ifood", () => {
  it("Acessa o site do ifood", () => {
    const OLLAMA_LOCAL_SERVER_ENDPOINT = "http://127.0.0.1:11434/api/generate";
    const IFOOD_ENDPOINT_URL = "https://www.ifood.com.br/";
    const prompt = `Why the sky is blue?`;
    cy.visit(IFOOD_ENDPOINT_URL);

    axios
      .post(OLLAMA_LOCAL_SERVER_ENDPOINT, {
        model: "llama3.2",
        prompt,
        stream: false,
        format: "json",
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

    // cy.document().then((doc) => {
    //     const htmlSource = doc.documentElement.outerHTML;
    //     const promopt = `Objective: return alist of action in order to buy products in a webpage.
    //         Context: You are an user that wants to automate the purchase of some products in a webpage.
    //         You need to add 1 product of each type in the cart and finish the purchase.
    //         You will be given the HTML of the page and will need to output a list of actions to be performed by cypress
    //         in order to complete the purchase.

    //         EXAMPLE:
    //         HTML INPUT: <html><body><button id="add-to-cart">Add to cart</button></body></html>
    //         OUTPUT: [{type: "click", selector: "#add-to-cart"}]

    //         INTRUCTION:
    //         Your must output only a json array with the action in plain text.

    //         HTML INPUT:
    //             ${htmlSource}
    //         `;

    //     cy.log(promopt);

    //     const ollamaLocalServerEnpoint = "http://127.0.0.1:11434/api/generate";
    //     axios.post(ollamaLocalServerEnpoint, {
    //         model: "llama3.2",
    //         prompt,
    //         stream: false,
    //         "format": "json",
    //         // eval())
    //     }).then((response) => {
    //         console.log(JSON.parse(response.data.response));
    //     })
    //     // cy.log(htmlSource);

    //     // Ollama.chat({
    //     //     model: 'llama3.1',
    //     //     messages: [{ role: 'user', content: 'Why is the sky blue?' }],
    //     // }).then((response) => {
    //     //     console.log(response);
    //     //   }
    //     // );
    //     // expect(htmlSource).to.contain("iFood");

    //     // const actions = JSON.parse(retornoDaLLM);

    //     // for (const action of actions) {
    //     //     // if action.type === "type" {
    //     //     //     cy.get(action.selector).type(action.text);
    //     //     // }
    //     //     // if action.type === "click" {
    //     //     //     cy.get(action.selector).click();
    //     //     // }

    //     // }

    // });
  });
});
