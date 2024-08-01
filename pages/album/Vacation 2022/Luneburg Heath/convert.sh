#!/bin/bash

for file in *
do
cwebp -q 60 "$file" -o "${file%.png}.webp"
done
