#!/bin/bash

OS=$(uname)

configure_ollama_mac() {
  echo "Configuring CORS for Ollama on macOS..."
  launchctl setenv OLLAMA_ORIGINS "*"
  echo "OLLAMA_ORIGINS set to '*' on macOS."
}

configure_ollama_linux() {
  echo "Configuring CORS for Ollama on Linux..."
  
  # Adiciona ou modifica a variável de ambiente no serviço existente
  sudo sed -i '/^\[Service\]/a Environment="OLLAMA_ORIGINS=*"' /etc/systemd/system/ollama.service

  # Recarrega e reinicia o serviço Ollama
  sudo systemctl daemon-reload
  sudo systemctl restart ollama
  echo "OLLAMA_ORIGINS set to '*' on Linux."
}

if [ "$OS" == "Darwin" ]; then
  echo "System detected: macOS"
  configure_ollama_mac
elif [ "$OS" == "Linux" ]; then
  echo "System detected: Linux"
  configure_ollama_linux
else
  echo "Unsupported system: $OS"
  exit 1
fi
