#!/bin/bash

# This script is used to test the program
# NOTE: MUST BE RUN FROM THE ROOT DIRECTORY

# Delete everything in test/
rm -rf test

# Create test/ directory
mkdir test

cd test
node ..
cd ..
