$ErrorActionPreference = "Stop"

rm -r build
mkdir build

Write-Host "Building Homepage"
cd .\wiki-homepage
npm install
npm run build
cp -r build/* ../build/
cd ..
Write-Host 

Write-Host "Installing MkDocs dependencies"
pip install -r .\requirements.txt

Write-Host "Building MkDocs (academic)"
cd academic
mkdocs build
cp -r site ../build/docs/academic/
cd ..
Write-Host 

Write-Host "Building MkDocs (knowledge)"
cd knowledge
mkdocs build
cp -r site ../build/docs/knowledge/
cd ..
Write-Host 