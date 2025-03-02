#!/bin/bash

OS=$(uname)

configure_ollama_mac() {
  echo "Configuring CORS for Ollama on macOS..."
  launchctl setenv OLLAMA_ORIGINS "*"
  echo "OLLAMA_ORIGINS has been set to '*' on macOS."
}

configure_ollama_linux() {
  echo "Configuring CORS for Ollama on Linux..."
  
  # Add or modify the environment variable in the existing service
  sudo sed -i '/^\[Service\]/a Environment="OLLAMA_ORIGINS=*"' /etc/systemd/system/ollama.service

  # Reload and restart the Ollama service
  sudo systemctl daemon-reload
  sudo systemctl restart ollama
  echo "OLLAMA_ORIGINS has been set to '*' on Linux."
}

if [ "$OS" == "Darwin" ]; then
  echo "Detected system: macOS"
  configure_ollama_mac
elif [ "$OS" == "Linux" ]; then
  echo "Detected system: Linux"
  configure_ollama_linux
else
  echo "Unsupported system: $OS"
  exit 1
fi
