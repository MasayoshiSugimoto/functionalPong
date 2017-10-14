#!/bin/bash

#Bash unofficial strict mode
set -euo pipefail
IFS=$'\n\t'

#Generate the includes
mkdir -p out

echo "Generating out/index.html..."
inputFile='html/index.html'
outputFile='index.html'
rm -f $outputFile
lineNumber=$(grep -nF '<!--INCLUDE-->' $inputFile | cut -f1 -d:)
head -n$(( $lineNumber - 1)) $inputFile >> $outputFile
ls **/*.js \
  | grep -v '.test.js' \
  | grep -v 'import.js' \
  | tr ' ' '\n' | sed -e 's;\(.*\);<script src="\1"></script>;' \
  >> $outputFile
tail -n $(( $lineNumber - 2 )) $inputFile >> $outputFile
cat $outputFile

inputFile="html/test.html"
outputFile="test.html"
rm -f $outputFile
echo "Generating $outputFile"
lineNumber=$(grep -nF '<!--TEST_INCLUDE-->' $inputFile | cut -f1 -d:)
head -n$(( $lineNumber - 1)) $inputFile >> $outputFile
ls **/*.js \
  | grep -v 'import.js' \
  | tr ' ' '\n' \
  | sed -e 's;\(.*\);<script src="\1"></script>;' \
  >> $outputFile
tail -n$(( $lineNumber - 2)) $inputFile >> $outputFile
cat $outputFile
