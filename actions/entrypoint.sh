#!/bin/sh
set -e

echo "Hello, $1!"
echo "Repository : $GITHUB_REPOSITORY"
echo "Event      : $GITHUB_EVENT_NAME"
echo "Ref        : $GITHUB_REF"
echo "Runner OS  : $RUNNER_OS"
