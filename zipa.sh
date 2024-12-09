rm function.zip
cd dist-lambda
zip -r -9 ../function.zip *
cd ..
zip -r -9 function.zip node_modules package.json
