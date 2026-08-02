#!/bin/bash
# Launcher script for IP VEXA on Linux
cd "$(dirname "$0")"
npx -y electron@30 --disable-gpu --no-sandbox ./resources/app.asar "$@"
