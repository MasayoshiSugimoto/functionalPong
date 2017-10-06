#!/bin/bash

#Bash unofficial strict mode
set -euo pipefail
IFS=$'\n\t'

#Generate the includes
mkdir -p out

echo "Generating out/index.html..."
rm out/index.html
lineNumber=$(grep -nF '<!--INCLUDE-->' html/index.html | cut -f1 -d:)
head -n$(( $lineNumber - 1)) html/index.html >> out/index.html
ls **/*.js \
  | grep -v '.test.js' \
  | grep -v 'import.js' \
  | tr ' ' '\n' | sed -e 's;\(.*\);<script src="../\1"></script>;' \
  >> out/index.html
tail -n$lineNumber html/index.html >> out/index.html
cat out/index.html

inputFile="html/test.html"
outputFile="out/test.html"
rm -f $outputFile
echo "Generating $outputFile"
lineNumber=$(grep -nF '<!--TEST_INCLUDE-->' $inputFile | cut -f1 -d:)
head -n$(( $lineNumber - 1)) $inputFile >> $outputFile
ls **/*.js \
  | grep -v 'import.js' \
  | tr ' ' '\n' \
  | sed -e 's;\(.*\);<script src="../\1"></script>;' \
  >> $outputFile
tail -n$lineNumber $inputFile >> $outputFile
cat $outputFile
